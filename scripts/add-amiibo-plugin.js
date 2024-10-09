; (function (win) {
    win.AmiiboPlugin = {}

    win.AmiiboPlugin.NoSpecialChars = function (e) {
        var regex = new RegExp("^[a-zA-Z0-9]+$");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
            return true;
        }

        e.preventDefault();
        return false;
    }

    win.AmiiboPlugin.ClickButton = function () {
        npcLabel = document.getElementById("npcLabel");
        npcName = document.getElementById("npcName");

        if (npcLabel == null || npcName == null) return;
        if (npcName.value == "" || npcLabel.value == "") return;

        // Last original entry + 256 
        let characterId = getRandomInt(663552 + 256, 6635520);
        characterId = Math.abs(characterId & -256); // Make sure our value is positive

        let numberingId = getRandomInt(984, 65535);

        console.log("Generated CharacterId: " + characterId);
        console.log("Generated numberingId: " + numberingId);

        SaveBCSVFile(characterId, numberingId);
        SaveAmiiboZip(characterId, numberingId);
    }

    var myPlugin = function (hook, vm) {
        hook.doneEach(function () {
            var form = document.getElementById("amiibo-form");
            if (form != null) {
                form.addEventListener("submit", function (event) {
                    event.preventDefault();
                })
            }
        });
    };

    $docsify = $docsify || {};
    $docsify.plugins = [].concat($docsify.plugins || [], myPlugin);
})(window);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let npcLabel = document.getElementById("npcLabel");
let npcName = document.getElementById("npcName");

function getCurrentDate() {
    const date = new Date();
    return {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate()
    };
}

function generateRandomUUID() {
    return (Array.from({ length: 8 }, () => Math.floor(Math.random() * 256))).concat([0, 0, 0]);
}

function SaveBCSVFile(characterId, numberingId) {
    if (npcLabel.value == "") return;

    const blobParts = [];
    const entrySize = 28; // AmiiboData EntrySize

    const fields = [
        { "Hash": 3350015967, "Offset": 4 },
        { "Hash": 77885493, "Offset": 8 },
        { "Hash": 4138945558, "Offset": 10 },
        { "Hash": 2890543941, "Offset": 12 },
        { "Hash": 885583573, "Offset": 13 },
        { "Hash": 2175024758, "Offset": 21 },
        { "Hash": 3701969225, "Offset": 22 },
        { "Hash": 1534894258, "Offset": 23 },
        { "Hash": 496616723, "Offset": 24 },
        { "Hash": 196503666, "Offset": 25 }
    ];

    // Header
    blobParts.push(new Uint32Array([1]));  // Entries Count
    blobParts.push(new Uint32Array([entrySize])); // Entry Size
    blobParts.push(new Uint16Array([fields.length])); // Field Count
    blobParts.push(new Uint8Array([1])); // HasExtenderHeader
    blobParts.push(new Uint8Array([1])); // Unknown
    blobParts.push(new TextEncoder().encode("VSCB")); // BCSV magic
    blobParts.push(new Uint16Array([20100])); // Version
    blobParts.push(new Uint8Array(10)); // Padding

    // Write Fields
    fields.forEach(field => {
        blobParts.push(new Uint32Array([field["Hash"]]));
        blobParts.push(new Uint32Array([field["Offset"]]));
    });

    // Writing our entry (in this case only one)
    const entryPosition = new Uint32Array([blobParts.reduce((acc, curr) => acc + curr.byteLength, 0)]);
    blobParts.push(entryPosition);

    blobParts.push(new Uint32Array([characterId])); // Random Id
    blobParts.push(new Uint16Array([numberingId])); // Numbering Id
    blobParts.push(new Uint16Array([-1]));
    blobParts.push(new Uint8Array([1]));

    let textData = [0, 0, 0, 0, 0, 0, 0, 0]
    let newText = new TextEncoder().encode(npcLabel.value);

    for (let i = 0; i < newText.length; i++) {
        if (i >= 8) return;
        textData[i] = newText[i];
    }

    blobParts.push(new Uint8Array(textData));

    blobParts.push(new Uint8Array([0]));
    blobParts.push(new Uint8Array([0]));
    blobParts.push(new Uint8Array([5]));
    blobParts.push(new Uint8Array([0]));

    blobParts.push(new Uint8Array([0]));
    blobParts.push(new Uint8Array([0]));
    blobParts.push(new Uint8Array([0]));


    const blob = new Blob(blobParts, { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "AmiiboData_" + npcLabel.value + ".bcsv";
    a.click();
    URL.revokeObjectURL(url);
}


function resize(arr, newSize, defaultValue) {
    return [...arr, ...Array(Math.max(newSize - arr.length, 0)).fill(defaultValue)];
}

function toAmiiboId(value) {
    value = value >> 4;
    let firstDigit = (value >> 12) & 0xF;
    let shiftedValue = (value & 0xFFF) << 4;
    return shiftedValue | firstDigit;
}

function SaveAmiiboZip(characterId, numberingId) {
    const zip = new JSZip();

    const amiibo_data = {
        name: npcName.value,
        write_counter: 0,
        version: 0,
        mii_charinfo_file: 'mii-charinfo.bin',
        first_write_date: getCurrentDate(),
        last_write_date: getCurrentDate(),
        id: {
            game_character_id: toAmiiboId(characterId),
            character_variant: 0,
            figure_type: 1,
            series: 5,
            model_number: numberingId
        },
        use_random_uuid: true,
        uuid: generateRandomUUID()
    };


    const jsonString = JSON.stringify(amiibo_data, null, 2);
    zip.file("amiibo.json", jsonString);
    zip.file("amiibo.flag", new Uint8Array());
    zip.file("amiibo.png", new Uint8Array());

    zip.generateAsync({ type: "blob" }).then(function (content) {
        const a = document.createElement("a");
        const url = URL.createObjectURL(content);
        a.href = url;
        a.download = "amiibo.zip";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url); // Libera a memória do Blob
    });
}
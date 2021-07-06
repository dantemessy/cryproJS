var CryptoJS = require("crypto-js");

function encrypt(message = '', key = '') {
    key = CryptoJS.enc.Utf8.parse(key);
    var message = CryptoJS.AES.encrypt(message, key, { mode: CryptoJS.mode.ECB });

    return message.toString();
}


function decrypt(message = '', key = '') {
    key = CryptoJS.enc.Utf8.parse(key);
    var code = CryptoJS.AES.decrypt(message, key, { mode: CryptoJS.mode.ECB });
    console.log(code.toString(CryptoJS.enc.Base64));
    var decryptedMessage = code.toString(CryptoJS.enc.Utf8);

    return decryptedMessage;
}

console.log(encrypt('ola amigos', '1234567891234567'));

console.log(decrypt('ujD/DyXpgkoi9S15b9gM7Q==', '1234567891234567'));

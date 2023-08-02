import CryptoJS from "crypto-js";

const sayHi=()=>{

    return "i love node js"
}
const calcDigest = (PublicKey, PrivateKey, messageParams) => {
    let messageString = messageParams.toString();
    var hash = CryptoJS.HmacSHA256(messageString, PrivateKey);
    var hashInBase64 = CryptoJS.enc.Hex.stringify(hash);
    var signature = PublicKey + ":" + hashInBase64;
    return signature;
  };

module.exports = sayHi,calcDigest;
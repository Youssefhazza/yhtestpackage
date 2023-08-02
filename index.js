import { HmacSHA256, enc } from 'crypto-js';

const sayHi=()=>{

    return "i love node js"
}
const calcDigest = (PublicKey, PrivateKey, messageParams) => {
    let messageString = messageParams.toString();
    var hash = HmacSHA256(messageString, PrivateKey);
    var hashInBase64 = enc.Hex.stringify(hash);
    var signature = PublicKey + ":" + hashInBase64;
    return signature;
  };

module.exports = sayHi,calcDigest;
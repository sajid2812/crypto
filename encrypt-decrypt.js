import * as ed from "@noble/ed25519";

const privKey = ed.utils.randomPrivateKey();
const message = new TextEncoder().encode("sajid");
const pubKey = await ed.getPublicKeyAsync(privKey);
const sign = await ed.signAsync(message, privKey);
try {
  const isValid = await ed.verifyAsync(sign, message, pubKey);
  console.log(isValid);
} catch (e) {
  console.log(e.message);
}

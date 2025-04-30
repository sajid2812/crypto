import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

const keyPair = Keypair.generate();
const pubKey = keyPair.publicKey.toBytes();
const privKey = keyPair.secretKey;

const message = new TextEncoder().encode("sajid");

const sign = nacl.sign.detached(message, privKey);

try {
  const isValid = nacl.sign.detached.verify(message, sign, pubKey);
  console.log(isValid);
} catch (e) {
  console.log(e.message);
}

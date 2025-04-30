import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

const keyPair = Keypair.generate();
const pubKey = keyPair.publicKey.toBytes();
const privKey = keyPair.secretKey;



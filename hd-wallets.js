import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import nacl from "tweetnacl";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";

const words = generateMnemonic(128);
const seed = mnemonicToSeedSync(words);

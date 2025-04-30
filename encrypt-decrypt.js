import * as ed from "@noble/ed25519";

async function main() {
  // Generate a secure random private key
  const privateKey = ed.utils.randomPrivateKey();

  // Convert a message to Uint8Array
  const message = new TextEncoder().encode("My name is Sk Sajid");

  // Generate the public key from private key
  const publicKey = await ed.getPublicKeyAsync(privateKey);

  //sign the message
  const signature = await ed.signAsync(message, privateKey);

  // verify the signature
  try {
    const isValid = await ed.verifyAsync(signature, "hello", publicKey);
    console.log(isValid); // should print 'true' if the signature is valid
  } catch (e) {
    console.log(e.message);
  }
}

main();

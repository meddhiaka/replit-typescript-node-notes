import { createHash, randomBytes, scryptSync } from "crypto";

// used for asymetric encryption
import { createCipheriv, createDecipheriv } from "crypto";

export default function cryptography() {
    // HASHING
    const e = createHash("sha256").update("test123").digest("hex");
    const e2 = createHash("sha256").update("test123").digest("hex");
    // compare only, no direct cracking
    // console.log(e === e2)

    //###############################################################
    //###############################################################
    //###############################################################

    // salt + hash
    // should be stored in env files for ex.
    const salt = randomBytes(8).toString("hex");

    const hashedPasswordWithSalt = scryptSync("test123", salt, 64).toString(
        "hex",
    );
    const hashedPasswordWithSalt2 = scryptSync("test123", salt, 64).toString(
        "hex",
    );
    // with salt, were using a upper layer to protect the password from cracking
    // console.log(hashedPasswordWithSalt === hashedPasswordWithSalt2);

    //###############################################################
    //###############################################################
    //###############################################################

    // SYMETRIC ENCRYPTION/ DECRYPTION WITH CIPHER
    // ENCRYPTION

    const password = "hello world";
    const key = randomBytes(32);
    const iv = randomBytes(16);
    let cipher = createCipheriv("aes-256-cbc", key, iv);
    let encrypted = cipher.update(password, "utf-8", "hex");
    encrypted += cipher.final("hex");

    // encrypted password
    // not like the hashing, with encrpytion it is generating a new encrypted string every time we run the application
    // console.log(encrypted)

    // DECRYPTION
    const decipher = createDecipheriv("aes-256-cbc", key, iv);
    let decrypted = decipher.update(encrypted, "hex", "utf-8");
    decrypted += decipher.final("utf8");

    // decrypted password:
    // console.log(decrypted)

    // asymertric, jwt ... 
}

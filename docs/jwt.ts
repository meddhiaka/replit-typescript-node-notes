// JWT looks like encryption/decryption concept not hashing
import jwt from "jsonwebtoken";

// secret key supposed to be stored in environment variables
const secretKey = "dhiax1337";

interface payloadCustom {
  firstName: string;
  lastName: string;
  age: number;
  position: string;
  password: string;
}

const payload: payloadCustom = {
  firstName: "Med Dhia",
  lastName: "Kassab",
  age: 22,
  position: "Full Stack Developer",
  password: "*#test TEST123#*",
};

function generateToken(secretKey: string, payload: object) {
  const jwtToken = jwt.sign(payload, secretKey, {
    expiresIn: 10,
  });
  return jwtToken;
}

function verifyToken(secretKey: string, token: string) {
  const decoded = jwt.decode(token, secretKey);
  return decoded;
}

export default function jwtMain() {
  const token = generateToken(secretKey, payload);
  console.log("TOKEN: \n", token);
  console.log("")
  const decodedToken = verifyToken(
    secretKey,
    token,
  );
  console.log("DECODED TOKEN: \n", decodedToken);
}

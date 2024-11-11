import jwt from "jsonwebtoken";

export function createToken(payload) {
  console.log(payload);

  return jwt.sign(payload, "s3cr3t", {
    expiresIn: "5m",
  });
}

export function verifyToken(token) {
  return jwt.verify(token, "s3cr3t");
}

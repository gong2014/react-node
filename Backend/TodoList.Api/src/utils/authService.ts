const jwt = require("jsonwebtoken");

const jwtTokenSecret = process.env.JWT_TOKEN_SECRET;

export function generateJWTToken() {
  const paylaod = {
    userId: 123,
    userName: "name",
  };
  const options = {
    expiresIn: "2h",
  };
  return jwt.sign(paylaod, jwtTokenSecret, options);
}

export function validateJWTToken() {
  jwt.verify();
}

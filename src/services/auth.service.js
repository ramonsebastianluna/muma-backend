const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { createUser, findUserByEmail } = require("../repositories/user.repository");

const register = async (email, password) => {
  const userExists = await findUserByEmail(email);
  if (userExists) throw new Error("Usuario ya registrado");

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await createUser({ email, password: hashedPassword });

  return user;
};

const login = async (email, password) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error("Credenciales inválidas");

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) throw new Error("Credenciales inválidas");

  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return { token };
};

module.exports = { register, login };
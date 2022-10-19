const Users = require("../models/user.model");
// const Memories = require('../models/memory.model')
const argon2 = require("argon2"); //https://github.com/ranisalt/node-argon2/wiki/Options
const jwt = require("jsonwebtoken");
const validator = require("validator");

class UserController {
  async register(req, res) {
    const { email, password } = req.body;
    if (!email || !password)
      return res.json({ ok: false, message: "All fields required" });
    if (!validator.isEmail(email))
      return res.json({ ok: false, message: "Invalid email" });
    try {
      const user = await Users.findOne({ email });
      if (user) return res.json({ ok: false, message: "Invalid credentials" });
      const hash = await argon2.hash(password);
      console.log("hash ==>", hash);
      const newUser = {
        email,
        password: hash,
        active_subscription: false,
      };
      await Users.create(newUser);
      res.json({ ok: true, message: "Successfully registered" });
    } catch (error) {
      res.json({ ok: false, error });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    if (!email || !password)
      return res.json({ ok: false, message: "All field are required" });
    if (!validator.isEmail(email))
      return res.json({ ok: false, message: "invalid data provided" });
    try {
      const user = await Users.findOne({ email });
      if (!user)
        return res.json({ ok: false, message: "invalid data provided" });
      const match = await argon2.verify(user.password, password);
      console.log(match);
      if (match) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET, {});
        res.json({ ok: true, message: "welcome back", token, email });
      } else return res.json({ ok: false, message: "invalid data provided" });
    } catch (error) {
      res.json({ ok: false, error });
    }
  }

  verify_token(req, res) {
    console.log(req.headers.authorization);
    const token = req.headers.authorization;
    jwt.verify(token, process.env.JWT_SECRET, (err, succ) => {
      err
        ? res.json({ ok: false, message: "something went wrong" })
        : res.json({ ok: true, succ });
    });
  }

  async deleteUser(req, res) {
    const { email } = req.body;
    try {
      const user = await Users.findOneAndDelete({ email });
      res.json({ ok: true, message: "successfully deleted" });
    } catch (e) {
      res.json({ ok: false, message: "did not find / delete user" });
    }
  }
}

module.exports = new UserController();

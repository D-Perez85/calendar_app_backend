const { response } = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

const createUser = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email: email });
        if (user) {
        return res.status(400).json({
            ok: false,
            msg: "Email exist in our register",
        });
        }

    user = new User(req.body);
    
    //Encrypt of password
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync( password, salt );

    await user.save();

    res.status(201).json({
        ok: true,
        uid: user.id,
        name: user.name,
    });
  } catch (error) {
        res.status(500).json({
        ok: false,
        msg: "Please contact the admin ...",
        });
    }
};

const loginUser = (req, res = response) => {
  const { email, password } = req.body;
    res.status(201).json({
        ok: true,
        msg: "login",
        email,
        password,
    });
};

const revalidateToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: "revalidate",
  });
};

module.exports = { createUser, loginUser, revalidateToken };

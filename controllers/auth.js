const { response } = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { generateJWT } = require("../helpers/jwt");


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
    user.password = bcrypt.hashSync(password, salt);
    await user.save();

    // Generate of JWT
    const token = await generateJWT(user.id, user.name); 

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token 
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Please contact the admin ...",
    });
  }
};

const loginUser = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: "User does not exist with thath email or password",
      });
    }

    // Comfirm passwords
    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Password wrong",
      });
    }
    
    // Generate of JWT
    const token = await generateJWT(user.id, user.name); 

    res.json({
      ok: true,
      uid: user.id,
      name: user.name,
      token
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Please contact the admin ...",
    });
  }
};

const revalidateToken = async (req, res = response) => {
  const {uid, name} = req; 
  // Generate of JWT
  const token = await generateJWT(uid, name); 

  res.json({
    ok: true,
    token
  })
}

module.exports = { createUser, loginUser, revalidateToken };

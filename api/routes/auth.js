const router = require('express').Router();
const User = require('../models/UserModel')
const cryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

//REGISTER
router.post('/register', async (req, res) => {
    const newUser = new User({
        email: req.body.email,
        password: cryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString()
    })

    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
})

// LOGIN
router.post('/login', async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
  
      if (!user) {
        return res.status(401).json("Wrong credentials.");
      }
  
      const pwd = cryptoJS.AES.decrypt(user.password, process.env.PASS_SECRET).toString(cryptoJS.enc.Utf8);
  
      if (pwd !== req.body.password) {
        return res.status(401).json("Wrong credentials.");
      }
  
      const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin
        },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );
  
      const { password, ...other } = user._doc;
      res.status(200).json({ ...other, accessToken });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router
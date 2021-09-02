require("dotenv").config();

const { Admin } = require("../database/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { SECRET_TOKEN } = process.env;

exports.register = async (req, res, next) => {
  try {
    const { name, username, password } = req.body;

    const admin = await Admin.findOne({
      where: {username, name},
    });

    if (admin) {
      throw new Error(
        "Admin with this username already exist. Please use other username."
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await Admin.create({
      name,
      username,
      password: hashedPassword,
    });

    return res.status(201).json({
      status: "Success",
      code: 201,
      message: "Success Register Admin."
    });
  } catch (error) {
    return next(error)
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({
      where: {
        username,
      },
    })

    if (!admin) {
      throw new Error("Admin with this username not found.");
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      throw new Error("Password not valid.")
    }

    const accessToken = jwt.sign({ adminId: admin.id }, SECRET_TOKEN, {
      expiresIn: "1h",
    });
    
    return res.status(200).json({
      status: "Success",
      code: 200,
      message: "Success Login.",
      data: {
        access_token: accessToken,
        name: admin.name,
        username: admin.username,
        // user_id: user.id
      },
    });
  } catch (error){
    return next(error);
  }
};
import Users from "../models/userModels.js";
import bcrypt from 'bcrypt';
import nodemailer from "nodemailer";


export const fetchAllUsers = async (req, res) => {
  const allusers = Users.find();

  res.send("Patients");
};

export const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, password } = req.body;
    if (!username) {
      return res.status(400).json({ message: "username is required" });
    }
    if (!email) {
      return res.status(400).json({ message: "email is required" });
    }
    if (!password) {
      return res.status(400).json({ message: "password is required" });
    }

    const existingUser = await Users.findOne({ email: email });
    if (existingUser) {
      return res.status(404).json({ message: "Email already associated with another account. try another email, or reset your account password" });
    }

    const newUser = new Users({ name:username, email, password });
    await newUser.save();
    res
      .status(201)
      .json({ message: "Acount created successfully", Users: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { name, email, password } = req.body;

  const { Id } = req.param;

  try {
    const gotUser = await Users.findById(id);
    if (!gotUser) {
      return res
        .status(404)
        .json({ message: "user not found", Users: existingUser });

      if (name) Users.name = name;
      if (email) Users.email = email;
      if (password) Users.password = password;

      await gotUser.save();
      res
        .status(200)
        .json({ message: "user updated  successfully", Users: gotUser });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const SigninUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    


    // Successful login
    return res.status(200).json({ message: "Login successful", user: { id: user._id, email: user.email, name: user.name } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


export const deleteUser = async (req, res) => {
  const { Id } = req.param;

  const { name, email, password } = req.body;

  try {
    const wantedUser = await Users.findById(Id);

    if (!wantedUser) {
      return res.status(404).json({ message: "user not found" });

      await wantedUser.delete();

      res.status(200).json({ message: "user deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// Configure nodemailer 
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    "user": "email",
    "pass": "password", 
  },
});

// Generate a random password
const generateRandomPassword = () => {
  return crypto.randomBytes(6).toString('hex'); // 12-character password
};

// Password reset function
export const resetPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User with that email not found" });
    }

    // Generate new password and hash it
    const newPassword = generateRandomPassword();
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Check if it's same as old password
    const isSame = await bcrypt.compare(newPassword, user.password);
    if (isSame) {
      return res.status(400).json({ message: "Generated password matched old one. Try again." });
    }

    // Save new hashed password
    user.password = hashedPassword;
    await user.save();

    // Send new password via email
    await transporter.sendMail({
      from: email,
      to: user.email,
      subject: 'Password Reset - HealthBD',
      text: `Hello ${user.name},\n\nYour new password is: ${newPassword}\n\nPlease login and change it immediately.`,
    });

    res.status(200).json({ message: "New password sent to your email" });

  } catch (error) {
    console.error("Error in resetPassword:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//function to add and save a new user

export const AddUser = async(req,res) => {
  try {
    const{name,email,password} = req.body;
    //checking if the user already exists
    const existingUser = await Users.findOne({email});
    if(existingUser){
    return res.status(400).json({message:"The user already exists please try creating a new account"});
    }

    const newUser = new Users({name,email,password});
    await newUser.save();
    return res.status(201).json({message:"user saved successfully",user:newUser});
    
  } catch (err) {
    return res.status(500).json({message:"There is a server error",error:err.message});
  }

};

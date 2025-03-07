import User from "../models/UserSchema.js";

export const userSignup = async (req, res) => {
    try {
        const user = req.body;
        const exist = await User.findOne({ email: user.email });
        if (exist) {
            return res.status(401).json({ message: "Email already exists" });
        }
        const existNumber = await User.findOne({ phone: user.phone });
        if (existNumber) {
            return req.status(401).json({ message: 'Phone Number already exist' });
        };

        const newUser = new User({ ...user, password: user.password }); // Store plain password

        await newUser.save();
        res.status(200).json({ message: user })
    } catch (error) {
        console.log('Error in Signup API');
        res.status(500).json({ message: error.message })
    }
}

//Login
export const userLogin = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const exist = await User.findOne({ email: email });
        console.log('User found:', exist);

        if (exist) {

            if (password !== exist.password) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            return res.status(200).json({ data: exist });
        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error in Login: ' + error.message });
    }
}

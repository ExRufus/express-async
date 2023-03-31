const bcrypt = require('bcrypt')
const { User } = require('./../models')

const generatePassword = async(password) => {
    return await bcrypt.hash(password, 8)
}
const checkPassword = async (password, hashPassword) => {
    return await bcrypt.compare(password, hashPassword);
}

module.exports = {
    index: async (req, res, next) => {
        // Funtion rendering for page registrasi user.
        res.render('registration', { page: {
            title : 'Halaman Registration'
        }})
    },
    registration1: async (req, res, next) => {
        // Function create User
        const { email, password, fullname} = req.body;
        const passwordHash = await generatePassword(password)
        const user = new Promise((resolve, reject) => {
            User.create({
                email,
                password: passwordHash,
                fullname
            }).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            })
        })
        
        user.then(data => {
            delete data.password; // agar fungsi tidak membalikan return password (agar tidak terlihat public)
            res.status(201).json({
                status: "Success!",
                code: 1,
                message: "Registration success!",
                data: data
            })
        }).catch(err => {
            res.status(400).json({
                status: "Fail",
                code: 0,
                message: "Registration Failed!",
                data: err.errors
            })
        })
    },

  registration2: async (req, res, next) => {
    const { email, password, fullname} = req.body;
    try {
        const user = await User.registration({
          fullname,
          email,
          password
        })
        delete user.password;
        
        res.status(201).json({
            status: "Success!",
            code: 1,
            message: "Registration success!",
            data: user
        })
    } catch(error) {
        res.status(400).json({
            status: "Fail",
            code: 0,
            message: "Registration Failed!",
            data: error.errors
        })
    }
  }
}

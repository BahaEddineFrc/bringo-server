const express = require('express');
const router = express.Router();
let User = require('../user/user');

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

//DONE
export async function signUp(req, res) {
    try {
        if (!req.body.email) return res.status(400).json({ error: 'email cannot be empty' })
        if (!req.body.password) return res.status(400).json({ error: 'Password cannot be empty' })
        if (!req.body.fullname) return res.status(400).json({ error: 'Name cannot be empty' })
        if (!emailRegex.test(user.email)) return res.status(400).json({error: 'Wrong email form' })

        let user = await User.findOne({ email: req.body.email })

        if (user) return res.status(401).json({ error: 'A user with the same email exists already' })

        user = new User()
        user.fullname = req.body.fullname
        user.email = req.body.email
        user.password = req.body.password
        user.address = req.body.address
        user.phone = req.body.phone
        user.pic = req.body.pic

        user = await User.create(user)

        return res.status(201).json(user)
    } catch (error) {
        console.log(error)
        return res.status(500).end()
    }
}

//DONE
export async function signIn(req, res) {
    try {
        if (!req.body.email) return res.status(400).json({ error: 'email cannot be empty' })

        if (!req.body.password) return res.status(400).json({ error: 'Password cannot be empty' })

        let user = await User.findOne({ email: req.body.email })

        if (!user) return res.status(401).json({ error: 'Wrong email' })
        if (!user.comparePassword(req.body.password)) return res.status(401).json({ code: 144, error: 'Wrong Credentials' })

        return res.status(200).json(user)

    } catch (error) {
        console.log(error)
        return res.status(500).end()
    }
}

//DONE
export async function changePassword(req, res) {
    try {
        const { oldPassword, newPassword } = req.body

        if (!oldPassword) return res.status(400).json({ error: 'Old password cannot be empty' })
        if (!newPassword) return res.status(400).json({ error: 'New password cannot be empty' })
        
        if (!req.user.comparePassword(oldPassword)) return  res.status(401).json({ error: 'Old password mismatch' })
        //if (newPassword.length < 8) return res.status(400).json({ code: 104, error: 'Password should contain eight characters or more' })

        await req.user.save()
        return res.status(204).end()

    } catch (error) {
        console.log(error)
        return res.status(500).end()
    }
}

//DONE BUT EDITABLE
export async function signOut(req, res) {
    try {
        //const token = req.headers.authorization.split(' ')[1]
        //req.user.devices = req.user.devices.filter(device => device.token != token)
        req.headers.authorization = ''
        await req.user.save()
        return res.status(204).end()
    } catch (error) {
        console.log(error)
        return res.status(500).end()
    }
}

module.exports = router;

const Password = require('../model/Password');

const createNewPassword = async (req, res) => {
    if (!req?.body?.title || !req?.body?.password || !req?.body?.autor  ) {
        return res.status(400).json({ 'message': 'Se requiere titulo, contraseña y autor' });
    }

    try {
        const result = await Password.create({
            title: req.body.title,
            password: req.body.password,
            autor: req.body.autor,
            in_bin:false
        });

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}

const updatePassword = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ 'message': 'ID parameter is required.' });
    }

    const password = await Password.findOne({ _id: req.body.id }).exec();
    if (!password) {
        return res.status(204).json({ "message": `No password matches ID ${req.body.id}.` });
    }
    if (req.body?.title) password.title = req.body.title;
    if (req.body?.password) password.password = req.body.password;
    if (req.body?.url) password.url = req.body.url;
    const result = await password.save();
    res.json(result);
}

const deletePassword = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({ 'message': 'Password ID required.' });

    const password = await Password.findOne({ _id: req.body.id }).exec();
    if (!password) {
        return res.status(204).json({ "message": `No password matches ID ${req.body.id}.` });
    }
    const result = await password.deleteOne(); //{ _id: req.body.id }
    res.json(result);
}

const getPassword = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'message': 'Password ID required.' });

    const password = await Password.findOne({ _id: req.params.id }).exec();
    if (!password) {
        return res.status(204).json({ "message": `No password matches ID ${req.params.id}.` });
    }
    res.json(password);
}

module.exports = {
    createNewPassword,
    updatePassword,
    deletePassword,
    getPassword
}
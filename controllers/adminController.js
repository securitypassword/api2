const Admin = require('../model/Admin');

const getAllAdmin = async (req, res) => {
    const admin = await Admin.find();
    if (!admin) return res.status(204).json({ 'message': 'No admins found.' });
    res.json(admin);
}

const createNewAdmin = async (req, res) => {
    if (!req?.body?.username || !req?.body?.mpassword) {
        return res.status(400).json({ 'message': 'Username and MPassword are required' });
    }

    try {
        const result = await Admin.create({
            username: req.body.username,
            mpassword: req.body.mpassword
        });

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}

const updateAdmin = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ 'message': 'ID parameter is required.' });
    }

    const admin = await Admin.findOne({ _id: req.body.id }).exec();
    if (!admin) {
        return res.status(204).json({ "message": `No employee matches ID ${req.body.id}.` });
    }
    if (req.body?.username) admin.username = req.body.username;
    if (req.body?.mpassword) admin.mpassword = req.body.mpassword;
    const result = await admin.save();
    res.json(result);
}

const deleteAdmin = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({ 'message': 'Admin ID required.' });

    const admin = await Admin.findOne({ _id: req.body.id }).exec();
    if (!admin) {
        return res.status(204).json({ "message": `No admin matches ID ${req.body.id}.` });
    }
    const result = await employee.deleteOne(); //{ _id: req.body.id }
    res.json(result);
}

const getAdmin = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'message': 'Employee ID required.' });

    const admin = await Admin.findOne({ _id: req.params.id }).exec();
    if (!admin) {
        return res.status(204).json({ "message": `No admin matches ID ${req.params.id}.` });
    }
    res.json(admin);
}

module.exports = {
    getAllAdmin,
    createNewAdmin,
    updateAdmin,
    deleteAdmin,
    getAdmin
}
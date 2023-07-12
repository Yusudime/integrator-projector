const alunoService = require('../services/alunoService');

async function createUser(req, res) {
    try {
        const {nome, matricula, email} = req.body
        let user = await alunoService.findUserByEmail(email);

        if (user) {
            return res.json({
                success: false,
                data: {},
                message: "User with this email already exist",
            });
        }

        user = await alunoService.createUser(nome, matricula, email)

        return res.json({
            success: true,
            data: user,
            message: "User created successfully",
        });

    } catch (error) {
        return res.json({error})
    }
}
async function findAllUsers(req, res) {
    try {
        const users = await alunoService.findAllUsers();
        return res.json({
            success: true,
            data: users,
            message: "Users found successfully",
        });
    } catch (error) {
        return res.json({error})

    }
}

async function findUser(req, res){
    try {
        const {id} = req.params;
        const user = await alunoService.findUserById(id);

        if (!user){
            return res.json({
                    success: false,
                    data: {},
                    message: "Could not find this user",
            });
        }

        return res.json({
            success: true,
            data: user,
            message: "User found successfully",
        });
    }catch (error) {
        return res.json({error})

    }
}

async function updateUser(req, res){
    try {
        const {id} = req.params;
        const {name, email} = req.body;

        let user = await alunoService.updateUser(id);

        if (!user){
            return res.json({
                success: false,
                data: {},
                message: "Could not update this user",
            });
        }
        user = await alunoService.updateUser(id, name, email);

        return res.json({
            success: true,
            data: user,
            message: "User updated successfully",
        });

    }catch (error) {
        return res.json({error})

    }
}
async function deleteUser(req, res) {
    try {
        const { id } = req.params;

        const user = await alunoService.findUserById(id);
        if (!user){
            return res.json({
                success: false,
                data: {},
                message: "Could not find this user",
            });
        }

        await alunoService.deleteUserById(id);
        return res.json({
            success: true,
            data: user,
            message: "User deleted successfully",
        });
    } catch (error) {
        return res.json({ error });
    }
}

module.exports = {
    createUser,
    findAllUsers,
    findUser,
    updateUser,
    deleteUser,
};

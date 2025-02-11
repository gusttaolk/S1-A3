const usermodel = require ('../models/usermodel');

const createuser = (req,res) => {
  const newuser = req.body;
  res.send('Usuario ${newuser.name} criado com sucesso');
};

module.exports = {createUser};

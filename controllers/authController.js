const User = require('../models/user');

exports.register = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const newUser = await User.create({ username, password, role });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username, password } });
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

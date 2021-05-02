module.exports = function (req, res, next) {
  try {
    //validation
    next();
  } catch (error) {
    res.status(401).json({ msg: 'some error message' });
  }
};

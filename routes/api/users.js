module.exports = app => {
  // @routes    GET /api/users
  // @desc      Test users route
  // @access    Public
  app.get('/api/users', (req, res) => res.json({ msg: 'users works' }));
};

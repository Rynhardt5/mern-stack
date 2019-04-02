module.exports = app => {
  // @routes    GET /api/profile
  // @desc      Test profile route
  // @access    Public
  app.get('/api/profile', (req, res) => res.json({ msg: 'profile works' }));
};

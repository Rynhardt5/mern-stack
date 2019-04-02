module.exports = app => {
  // @routes    GET /api/posts
  // @desc      Test posts route
  // @access    Public
  app.get('/api/posts', (req, res) => res.json({ msg: 'posts works' }));
};

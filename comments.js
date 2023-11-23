// Create web server
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment');

router.use((req, res, next) => {
  console.log('Hora: ', Date.now());
  next();
});

router.get('/', (req, res) => {
  res.send('¡Bienvenido a mi servidor web!');
});
router.get('/comments', commentController.comment_list);
router.post('/comments', commentController.create_comment);
router.delete('/comments/:id', commentController.delete_comment);

module.exports = router;

const express = require('express');
const { createShortUrl, redirectToOriginalUrl } = require('../controllers/urlController');
const router = express.Router();

router.post('/shorten', createShortUrl);
router.get('/:shortId', redirectToOriginalUrl);
router.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to LinkTrim URL Shortener API <3' });
});

module.exports = router;

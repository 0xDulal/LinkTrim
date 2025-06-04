import nanoid from 'nanoid';

const { nanoid } = require('nanoid');
const Url = require('../models/Url');

const createShortUrl = async (req, res) => {
  const { originalUrl } = req.body;
  const shortId = nanoid(6);

  try {
    const newUrl = await Url.create({ shortId, originalUrl });
    res.status(201).json({ shortUrl: `${process.env.BASE_URL}:${process.env.PORT}/${shortId}` });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

const redirectToOriginalUrl = async (req, res) => {
  const { shortId } = req.params;
  try {
    const url = await Url.findOne({ shortId });
    if (url) {
      return res.redirect(url.originalUrl);
    }
    res.status(404).json({ error: 'URL not found' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { createShortUrl, redirectToOriginalUrl };

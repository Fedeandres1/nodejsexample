const express = require('express');
const router = express.Router();

// Routers
router.get('/', (req, res) => {
    res.render('index.html', { title: 'First WebSite'});
})

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contact Page'});
})

module.exports = router;
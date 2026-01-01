const paypal = require('paypal-rest-sdk');

paypal.configure({
    'mode': 'sandbox', // or 'live' if you're in production
    'client_id': 'AR36swgv0Nr3nFS_xSGsCuxif3Il-t2d46XzFe5lq9RFVJ95BNoYahHQdD21e1LSL7rpRrNFuyq4mNjM',
    'client_secret': 'EG1mJ7SU38GBkFsERlHH5vISHZDlBWnY8xpIWKodEsy9RMI3ur1Z-EGtLCsXeITkrhlGDc7x5RkFgRJ-'
});

module.exports = paypal;



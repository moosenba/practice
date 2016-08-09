var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'firefox' } };
var client = webdriverio.remote(options);

client
    .init()
    .url('https://www.google.com/')
    .setValue('#lst-ib', 'WebdriverIO')
    .click('[name="btnG"]')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
    })
    .end();
var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'firefox' } };
var client = webdriverio.remote(options);

client
    .init()
    .url('https://www.google.com/')
    // .setValue('#search_form_input_homepage', 'WebdriverIO')
    // .click('#search_button_homepage')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
    })
    .end();
var $ = require('zepto-browserify').$;
var Zepto = require('zepto-browserify').Zepto;
var Mustache = require('mustache');

function renderContent() {
    const template = $('#content-template').html(),
        rendered = Mustache.render(template, {name: "World"});
        $('#content').html(rendered);
}

Zepto(function ($) {
    renderContent();
});


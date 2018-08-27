"use strict";

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _bootstrap = require("bootstrap/dist/js/bootstrap");

var _lodash = require("lodash");

var _ = _interopRequireWildcard(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_lodash.templateSettings.interpolate = /\{\{([\s\S]+?)\}\}/g;
_lodash.templateSettings.evaluate = /\{%([\s\S]+?)%\}/g;

window.$ = window.jQuery = _jquery2.default;

var getTplList = function getTplList(selector, data) {

    var html = '',
        tpl = null;

    for (var i = 0; i < data.length; i++) {
        tpl = document.querySelector(selector).textContent;
        html = html + (0, _lodash.template)(tpl)(data[i]);
    }
    return html;
};

var render = function render(selector, data) {
    var html = '',
        tpl = document.querySelector(selector).textContent;
    html = html + (0, _lodash.template)(tpl)(data);
    document.querySelector('#app').innerHTML += "render" + html;
};
var images = [{ src: "/img/small-ones/astronaut.jpg" }, { src: "/img/small-ones/baseball.png" }, { src: "/img/small-ones/butterfly.png" }, { src: "/img/small-ones/cat-eye.jpg" }, { src: "/img/small-ones/chess.jpg" }, { src: "/img/small-ones/coffee.jpg" }, { src: "/img/small-ones/dice.jpg" }, { src: "/img/small-ones/energy-arc.jpg" }, { src: "/img/small-ones/fish.jpg" }, { src: "/img/small-ones/flake.jpg" }, { src: "/img/small-ones/flower.jpg" }, { src: "/img/small-ones/grapes.jpg" }, { src: "/img/small-ones/guitar.jpg" }, { src: "/img/small-ones/launch.jpg" }, { src: "/img/small-ones/leaf.jpg" }, { src: "/img/small-ones/lightning.jpg" }, { src: "/img/small-ones/penguin.jpg" }, { src: "/img/small-ones/puppy.jpg" }, { src: "/img/small-ones/sky.jpg" }, { src: "/img/small-ones/soccerball.png" }, { src: "/img/small-ones/sunflower.jpg" }, { src: "/img/small-ones/sunset.jpg" }, { src: "/img/small-ones/tennis-ball.png" }, { src: "/img/small-ones/yellow-rose.jpg" }];

var images2 = [{ src: "/img/big-ones/adwaita-day.jpg", title: "title#0" }, { src: "/img/big-ones/adwaita-lock.jpg", title: "title#0" }, { src: "/img/big-ones/adwaita-morning.jpg", title: "title#0" }, { src: "/img/big-ones/adwaita-night.jpg", title: "title#0" }, { src: "/img/big-ones/Bokeh_Tails.jpg", title: "title#0" }, { src: "/img/big-ones/Chmiri.jpg", title: "title#0" }, { src: "/img/big-ones/Dark_Ivy.jpg", title: "title#0" }, { src: "/img/big-ones/Fabric.jpg", title: "title#0" }, { src: "/img/big-ones/Flowerbed.jpg", title: "title#0" }, { src: "/img/big-ones/Godafoss_Iceland.jpg", title: "title#0" }, { src: "/img/big-ones/Icescape.jpg", title: "title#0" }, { src: "/img/big-ones/Mirror.jpg", title: "title#0" }, { src: "/img/big-ones/Road.jpg", title: "title#0" }, { src: "/img/big-ones/Sandstone.jpg", title: "title#0" }, { src: "/img/big-ones/Stones.jpg", title: "title#0" }, { src: "/img/big-ones/Terraform-green.jpg", title: "title#0" }, { src: "/img/big-ones/Waterfalls.jpg", title: "title#0" }, { src: "/img/big-ones/Waves.jpg", title: "title#0" }];

var setLinkActive = function setLinkActive(href) {
    $('a.nav-link').removeClass('active');
    $('a.nav-link[href="' + href + '"]').addClass('active');
};
var t_transition_time = 300;
var onShowBig = function onShowBig(event) {
    $('#main_content > *').addClass('t_t').addClass('t');
    setTimeout(function () {
        $('#main_content > *').addClass('d-none');
        setLinkActive('/#/big');
        var content = '<div class="row t_t t">' + getTplList('script#big-one', images2) + '</div>';
        document.querySelector('#main_content').innerHTML = content;
        window.requestAnimationFrame(function () {
            window.requestAnimationFrame(function () {
                $('#main_content > *').removeClass('t');
            });
        });
    }, t_transition_time);
};

var onShowSmall = function onShowSmall(event) {
    $('#main_content > *').addClass('t_t').addClass('t');
    setTimeout(function () {
        $('#main_content > *').addClass('d-none');
        setLinkActive('/#/small');
        var content = '<div class="row t_t t">' + getTplList('script#small-one', images) + '</div>';
        document.querySelector('#main_content').innerHTML = "render" + content;
        console.log('inserted');
        window.requestAnimationFrame(function () {
            console.log('new frame rendered in dom');
            window.requestAnimationFrame(function () {
                console.log('new by');
                window.requestAnimationFrame(function () {
                    $('#main_content > *').removeClass('t');
                });
            });
        });
    }, t_transition_time);
};

var onShowBadges = function onShowBadges(event) {
    $('#main_content > *').addClass('t_t').addClass('t');
    setTimeout(function () {
        setLinkActive('/#/badges');
        document.querySelector('#main_content').innerHTML = "";
        document.querySelectorAll('script.badge').forEach(function (el) {
            var html = '<div class="row t t_t">' + _.template(el.textContent)({}) + '</div>';
            document.querySelector('#main_content').innerHTML += html;
            window.requestAnimationFrame(function () {
                console.log('new frame rendered in dom');
                window.requestAnimationFrame(function () {
                    console.log('new by');
                    $('#main_content > *').removeClass('t');
                });
            });
        });
    }, t_transition_time);
};

$('#app').delegate('a.nav-link[href="/#/big"]', 'click', onShowBig);
$('#app').delegate('a.nav-link[href="/#/small"]', 'click', onShowSmall);
$('#app').delegate('a.nav-link[href="/#/badges"]', 'click', onShowBadges);
var runApp = function runApp() {
    render('#layout', {
        menu: ['One', 'Two'],
        content: '<div class="row">' + getTplList('script#big-one', images2) + '</div>'
    });
};
var pushState = function pushState(event) {
    if (window.location.hash === '#/big') {
        onShowBig(event);
    } else if (window.location.hash === '#/small') {
        onShowSmall(event);
    } else if (window.location.hash === '#/badges') {
        onShowBadges(event);
    }
};
window.addEventListener("hashchange", pushState, false);
document.addEventListener("DOMContentLoaded", runApp);
document.addEventListener("DOMContentLoaded", pushState);

var i = 0;
var update = function update() {
    i++;
};
var step = function step() {
    update();
    window.requestAnimationFrame(step);
};
step();
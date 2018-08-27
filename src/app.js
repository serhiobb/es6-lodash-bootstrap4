import jQuery from "jquery"
import { bootstrap } from "bootstrap/dist/js/bootstrap";
import { templateSettings, template } from "lodash";
import *  as _ from "lodash";

templateSettings.interpolate = /\{\{([\s\S]+?)\}\}/g;
templateSettings.evaluate = /\{%([\s\S]+?)%\}/g;

window.$ = window.jQuery = jQuery;
let app_selector = '#app';

let getTplList = (selector, data) => {
    
    let html = '', tpl = null;

    for (var i = 0; i < data.length; i++) {
        tpl = document.querySelector(selector).textContent;
        html = html + (template(tpl)(data[i]));
    }
    return html;
}

let render = (selector, data, area) => {
    area = area || app_selector;
    let html = '', tpl = document.querySelector(selector).textContent;
    html = html + (template(tpl)(data));
    document.querySelector(area).innerHTML += "render" + html;
}

 let images = [
     {src: "/img/small-ones/astronaut.jpg"},
     {src: "/img/small-ones/baseball.png"},
     {src: "/img/small-ones/butterfly.png"},
     {src: "/img/small-ones/cat-eye.jpg"},
     {src: "/img/small-ones/chess.jpg"},
     {src: "/img/small-ones/coffee.jpg"},
     {src: "/img/small-ones/dice.jpg"},
     {src: "/img/small-ones/energy-arc.jpg"},
     {src: "/img/small-ones/fish.jpg"},
     {src: "/img/small-ones/flake.jpg"},
     {src: "/img/small-ones/flower.jpg"},
     {src: "/img/small-ones/grapes.jpg"},
     {src: "/img/small-ones/guitar.jpg"},
     {src: "/img/small-ones/launch.jpg"},
     {src: "/img/small-ones/leaf.jpg"},
     {src: "/img/small-ones/lightning.jpg"},
     {src: "/img/small-ones/penguin.jpg"},
     {src: "/img/small-ones/puppy.jpg"},
     {src: "/img/small-ones/sky.jpg"},
     {src: "/img/small-ones/soccerball.png"},
     {src: "/img/small-ones/sunflower.jpg"},
     {src: "/img/small-ones/sunset.jpg"},
     {src: "/img/small-ones/tennis-ball.png"},
     {src: "/img/small-ones/yellow-rose.jpg"}
 ]

 let images2 = [
     {src: "/img/big-ones/adwaita-day.jpg", title: "title#0"},
     {src: "/img/big-ones/adwaita-lock.jpg", title: "title#0"},
     {src: "/img/big-ones/adwaita-morning.jpg", title: "title#0"},
     {src: "/img/big-ones/adwaita-night.jpg", title: "title#0"},
     {src: "/img/big-ones/Bokeh_Tails.jpg", title: "title#0"},
     {src: "/img/big-ones/Chmiri.jpg", title: "title#0"},
     {src: "/img/big-ones/Dark_Ivy.jpg", title: "title#0"},
     {src: "/img/big-ones/Fabric.jpg", title: "title#0"},
     {src: "/img/big-ones/Flowerbed.jpg", title: "title#0"},
     {src: "/img/big-ones/Godafoss_Iceland.jpg", title: "title#0"},
     {src: "/img/big-ones/Icescape.jpg", title: "title#0"},
     {src: "/img/big-ones/Mirror.jpg", title: "title#0"},
     {src: "/img/big-ones/Road.jpg", title: "title#0"},
     {src: "/img/big-ones/Sandstone.jpg", title: "title#0"},
     {src: "/img/big-ones/Stones.jpg", title: "title#0"},
     {src: "/img/big-ones/Terraform-green.jpg", title: "title#0"},
     {src: "/img/big-ones/Waterfalls.jpg", title: "title#0"},
     {src: "/img/big-ones/Waves.jpg", title: "title#0"}
 ]

let setLinkActive = (href) => {
     $('a.nav-link').removeClass('active');
     $('a.nav-link[href="' + href + '"]').addClass('active');
 }
let t_transition_time = 300;
let onShowBig = (event) => {
    $('#main_content > *').addClass('t_t').addClass('t');
    setTimeout( () => {
            $('#main_content > *').addClass('d-none');
            setLinkActive('/#/big');    
            let content = '<div class="row t_t t">' +
            getTplList('script#big-one', images2)+
            '</div>';
            document.querySelector('#main_content').innerHTML = content;
        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
                $('#main_content > *').removeClass('t');
            })
        });
    }, t_transition_time);
}

let onShowSmall = (event) => {
    $('#main_content > *').addClass('t_t').addClass('t');
    setTimeout( () => {
            $('#main_content > *').addClass('d-none');
            setLinkActive('/#/small');
            let content = '<div class="row t_t t">' +
            getTplList('script#small-one', images) +
            '</div>';
            document.querySelector('#main_content').innerHTML = "render" + content;
        console.log('inserted');
        window.requestAnimationFrame(() => {
            console.log('new frame rendered in dom');
            window.requestAnimationFrame(() => {
                console.log('new by');
                window.requestAnimationFrame(() => {
                    $('#main_content > *').removeClass('t');
                });
            })
        });
    }, t_transition_time);
}

let onShowBadges = (event) => {
    $('#main_content > *').addClass('t_t').addClass('t');
    setTimeout( () => {
        setLinkActive('/#/badges');
        document.querySelector('#main_content').innerHTML = "";
        document.querySelectorAll('script.badge').forEach(function(el){
            let html = '<div class="row t t_t">' + (_.template(el.textContent)({})) + '</div>';
            document.querySelector('#main_content').innerHTML += html;
window.requestAnimationFrame(() => {
    console.log('new frame rendered in dom');
    window.requestAnimationFrame(() => {
        console.log('new by');
        $('#main_content > *').removeClass('t');
    })
});
        })
    }, t_transition_time);
}

let onShowCards = (event) => {
   $('#main_content > *').addClass('d-none');
    setLinkActive('/#/cards');
    render('script#card-page', {}, '#main_content');
}

$(app_selector).delegate('a.nav-link[href="/#/big"]','click', onShowBig)
$(app_selector).delegate('a.nav-link[href="/#/small"]','click', onShowSmall)
$(app_selector).delegate('a.nav-link[href="/#/badges"]','click', onShowBadges)
$(app_selector).delegate('a.nav-link[href="/#/cards"]','click', onShowCards)
let runApp = () => {
    render('#layout', {
        menu: ['One', 'Two'],
        content: '<div class="row">' + getTplList('script#big-one', images2) + '</div>'
    });
};
let pushState = (event) => {
    if(window.location.hash === '#/big'){onShowBig(event)}
    else if(window.location.hash === '#/small'){onShowSmall(event)}
    else if(window.location.hash === '#/badges'){onShowBadges(event)}
    else if(window.location.hash === '#/cards'){onShowCards(event)}
}
window.addEventListener("hashchange", pushState, false);
document.addEventListener("DOMContentLoaded", runApp);
document.addEventListener("DOMContentLoaded", pushState);

let i = 0;
let update = () => {
    i++;
};
let step = () => {
    update(); 
    window.requestAnimationFrame(step);
}; 
step();
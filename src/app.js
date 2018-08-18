import jQuery from "jquery"
import { bootstrap } from "bootstrap/dist/js/bootstrap";
import { templateSettings, template } from "lodash";
import *  as _ from "lodash";

templateSettings.interpolate = /\{\{([\s\S]+?)\}\}/g;
templateSettings.evaluate = /\{%([\s\S]+?)%\}/g;

window.$ = window.jQuery = jQuery;


$(document).ready(() => {
    let getTplList = (selector, data) => {
        let html = '';

        for (var i = 0; i < data.length; i++) {
            html = html + (template(document.querySelector(selector).textContent)(data[i]));
        }

        return html;
    }

    let render = (selector, data) => {
        let html = '';
        html = html + (template(document.querySelector(selector).textContent)(data));
        document.querySelector('#app').innerHTML += "render" + html;
    }

     let clear = () => {
         document.querySelector('#main_content').innerHTML = "";
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

     /*renderImages(images);
     renderImages(images2, 'big');

    document.querySelectorAll('script.badge').forEach(function(el){
        let html = "<hr>" + (_.template(el.textContent)({}));
        document.querySelector('#app').innerHTML += html;
    })*/
     let setLinkActive = (href) => {
         $('a.nav-link').removeClass('active');
         $('a.nav-link[href="' + href + '"]').addClass('active');
     }
    let onShowBig = (event) => {
        clear();
        setLinkActive('/#/big');
        let content = '<div class="row">' + getTplList('script#big-one', images2) + '</div>';
        document.querySelector('#main_content').innerHTML += "render" + content;
    }

    let onShowSmall = (ev) => {
        clear();
        setLinkActive('/#/small');
        let content = '<div class="row">' + getTplList('script#small-one', images) + '</div>';
        document.querySelector('#main_content').innerHTML += "render" + content;
    }

    let onShowBadges = (event) => {
        clear();
        setLinkActive('/#/badges');
        document.querySelectorAll('script.badge').forEach(function(el){
            let html = "<hr>" + (_.template(el.textContent)({}));
            document.querySelector('#main_content').innerHTML += html;
        })
    }

    $('#app').delegate('a.nav-link[href="/#/big"]','click', onShowBig)
    $('#app').delegate('a.nav-link[href="/#/small"]','click', onShowSmall)
    $('#app').delegate('a.nav-link[href="/#/badges"]','click', onShowBadges)

    render('#layout', {
        menu: ['One', 'Two'],
        content: '<div class="row">' + getTplList('script#big-one', images2) + '</div>'
    });

    let onHashChange = (event) => {
        if(window.location.hash === '#/big'){onShowBig(event)}
        else if(window.location.hash === '#/small'){onShowSmall(event)}
        else if(window.location.hash === '#/badges'){onShowBadges(event)}
    }
    window.addEventListener("hashchange", onHashChange, false);
 })

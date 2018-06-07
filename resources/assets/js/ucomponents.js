require('./bootstrap');

window.toastr = require('../vendors/js/extensions/toastr.min');
window.Vue = require('vue');

require('animate.css');
import VueFormWizard from  'vue-form-wizard'
Vue.use(VueFormWizard);
import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed);

 Vue.component('modulos', require('./components/modulos/Modulo.vue'));
 Vue.component('aumentadas', require('./components/aumentadas/Aumentada.vue'));
 Vue.component('temas', require('./components/temas/Tema.vue'));

 // require('aframe');
const app = new Vue({
    el: '#ucontenido',
    methods: {
        onComplete: function () {
            alert('Yay. Done!');
        }
    }
});

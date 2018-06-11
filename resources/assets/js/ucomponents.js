require('./bootstrap');

window.toastr = require('../vendors/js/extensions/toastr.min');
window.Vue = require('vue');

require('animate.css');
import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed);
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
Vue.use(VueFormWizard);

import swal from 'sweetalert';

 Vue.component('modulos', require('./components/modulos/Modulo.vue'));
 Vue.component('aumentadas', require('./components/aumentadas/Aumentada.vue'));
 Vue.component('temas', require('./components/temas/Tema.vue'));
 Vue.component('previstas', require('./components/prevista/Prevista.vue'));

 // require('aframe');
const app = new Vue({
    el: '#ucontenido',
    methods: {

    }
});

import Vue from 'vue'

Vue.component('navi', require('./components/navs/Nav.vue').default);
Vue.component('navl', require('./components/navs/NavLeft.vue').default);
Vue.component('login', require('./components/index/login.vue').default);
Vue.component('mision', require('./components/index/mision.vue').default);
Vue.component('programadores', require('./components/index/programadores.vue').default);


Vue.component('navs', require('./components/navs/NavSuper.vue').default);
Vue.component('precios', require('./components/super/precios.vue').default);
Vue.component('descuentos', require('./components/super/descuentos.vue').default);
Vue.component('informacion', require('./components/super/informacion.vue').default);
Vue.component('iva', require('./components/super/iva.vue').default);
Vue.component('roles', require('./components/super/roles.vue').default);
Vue.component('usuarios', require('./components/super/usuarios.vue').default);
Vue.component('facturas', require('./components/super/facturas.vue').default);
Vue.component('periodos', require('./components/super/periodos.vue').default);
Vue.component('empleados', require('./components/super/empleados.vue').default);


Vue.component('nave', require('./components/navs/NavEmpleado.vue').default);

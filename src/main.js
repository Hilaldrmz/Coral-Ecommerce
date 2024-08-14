import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/cart'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(store)
app.use(pinia)

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faShoppingBag, faUser, faSearch, faMoon, faSun, faFilter, faChevronLeft, faTimes, faLock,faCheckCircle,faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan} from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


library.add(faSearch, faFacebookF, faTwitter, faInstagram, faShoppingBag, faUser, faMoon, faSun, faFilter, faXTwitter, faLinkedinIn, faChevronLeft, faTimes, faLock, faCheckCircle, faTrashCan, faArrowTrendUp);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')

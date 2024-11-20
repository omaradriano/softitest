import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import FooterBody from './components/BodyComponents/Footer_Body.vue';
import Section_1 from './components/BodyComponents/Section_1.vue';
import Section_2 from './components/BodyComponents/Section_2.vue';
import Section_3 from './components/BodyComponents/Section_3.vue';
import Icon from './components/Items/Icon.vue';
import PriceSummary from './components/Items/PriceSummary.vue';

const app = createApp(App);

//Component that belongs to the body grid area
app
    .component('FooterBody', FooterBody)
    .component('Section_1', Section_1)
    .component('Section_2', Section_2)
    .component('Section_3', Section_3)
    .component('Icon', Icon)
    .component('PriceSummary', PriceSummary)

app.mount('#app')

// import MyComponent from './components/MyComponent.vue';



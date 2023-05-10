import NV_button from './components/NV_button.vue'
import NV_input from './components/NV_input.vue'

export default {
    install: (app, options) => {
        app.component('AppButton', NV_button),
        app.component('AppInput', NV_input)
    }
}
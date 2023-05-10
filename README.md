# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

Установка и инициализация библиотеки в проект через NPM:
npm i nv-uikit

main.js:
import AppButton from 'nv-uikit'
import AppInput from 'nv-uikit'
import 'nv-uikit/dist/style.css'

const app = createApp(App);
app.use(AppButton);
app.use(AppInput)

app.mount("#app");

Использование:

AppButton атрибуты:
label: текст в кнопке
size: "sm" или "xl"
rounded= true или false

AppInput атрибуты:
value: строковое значение в инпуте
name: имя инпута (обязательное значение)
label: название инпута (обязательное значение)
placeholder: подсказка в инпуте (обязательное значение)

Установка приложения:
Скачать файлы с GitHub,
В папке с проектом инициализировать NPM (npm i),
Инициализировать SASS (npm add -D sass),
Запустить приложение (npm run dev)





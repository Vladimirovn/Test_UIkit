<script setup>
    const props = defineProps({
        value: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div class="input_form">
        <input 
        class="input_text"
        type="text"
        :name="name"
        :placeholder="placeholder"
        :value="value">
        <label :for="name" class="input_label">{{ label }}</label>
    </div>
</template>

<style lang="scss" scoped>
    .input {
        &_form {
            width: 500px;
            position: relative;
        }

        &_text {
            width: 100%;
            height: 40px;
            padding: 0 10px;
            border: 1px solid #009ee3;
            border-radius: 7px;
            font-size: 15px;
            position: relative;
            z-index: 1;
                &:focus {
                    outline: none;
                    border: 1px solid #0070d2;
                    & + .input_label {
                        z-index: 1;
                        opacity: 1;
                        top: -20px;
                    }
                }
                &:not(:placeholder-shown) {
                    & + .input_label {
                        z-index: 1;
                        opacity: 1;
                        top: -20px;
                    }
                }
        }

        &_label {
            font-weight: bold;
            display: block;
            position: absolute;
            top: 20px;
            opacity: 0;
            z-index: -1;
            transition: .3s;
            font-size: 13px;
            color: #009ee3;
        }
    }

</style>
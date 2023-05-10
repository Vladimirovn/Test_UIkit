<script setup>
    const props = defineProps({
        label: {
            type: String,
            default: 'Click Me'
        },
        rounded: {
            type: Boolean,
            required: false
        },
        size: {
            type: String,
            default: 'normal'
        }
    })

    const emit = defineEmits(['click'])

    const clickOnbutt = () => {
        emit('click')
    }
</script>


<template>
    <button 
    :class="['btn', {'btn_rounded': rounded}, {'btn_xl': size == 'xl'}, {'btn_sm': size == 'sm'}]"
    @click="clickOnbutt">
        {{ label }}
    </button>
</template>

<style lang="scss" scoped>
    .btn {
        height: 40px;
        padding: 0 20px;
        color: #ffff;
        border-radius: 7px;
        border: none;
        background-color: #009ee3;
        font-size: 15px;
        cursor: pointer;
        transition: .2s;

        &:enabled:hover {
            background-color: #0070d2;
        }

        &_rounded {
            border-radius: 15px;
        }

        &_xl {
            height: 48px;
            padding: 0 30px;
        }

        &_sm {
            height: 32px;
            padding: 0 10px;
        }
    }
</style>
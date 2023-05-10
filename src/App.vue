<script setup>
  import NV_button from './components/NV_button.vue'
  import NV_input from './components/NV_input.vue'
</script>

<template>
  <div class="wrap">
    <NV_button/>
    <div class="inp" style="margin-top: 40px;">
      <NV_input label="Input label" placeholder="Enter some text"/>
    </div>
  </div>
</template>


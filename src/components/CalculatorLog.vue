<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  log: {
    type: Array,
    required: false,
  }
})

</script>

<template>
<div v-if="log" class="container">
  <ul>
    <li v-for="(output, index) in log" :key="index">{{output}}</li>
  </ul>
</div>
</template>

<style scoped>
.container {
  margin-left: 40px;
  width: 270px;
  padding: 20px;
  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
}
</style>
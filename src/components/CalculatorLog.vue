<script>
import { ref, computed } from "vue";
export default {
  props: {
    log: String
  },
  setup(props) {
    return { props }
  }
}
</script>

<template>
<div class="container">
  <ul>
    <li>Hello</li>
  </ul>
</div>
</template>

<style scoped>
.container {
  width: 100%;
  padding: 20px;
  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
}
</style>
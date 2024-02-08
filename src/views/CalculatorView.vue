<script setup>
import { ref } from "vue";
import Calculator from "@/components/Calculator.vue";
import CalculatorLog from "@/components/CalculatorLog.vue";

const log = ref([])

function updateLog(output) {
  log.value.push(output);
}
</script>

<template>
  <main>
    <div class="flex-container">
      <Calculator @calculate="updateLog"/>
      <CalculatorLog :log="log"/>
    </div>
  </main>
</template>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>

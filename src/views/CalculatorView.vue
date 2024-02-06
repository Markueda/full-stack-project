<script setup>
import Calculator from "@/components/Calculator.vue";
import CalculatorLog from "@/components/CalculatorLog.vue";
</script>

<template>
  <main>
    <div class="flex-container">
      <Calculator/>
      <CalculatorLog log="Hello"/>
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

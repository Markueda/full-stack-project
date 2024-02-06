<script setup>
import { ref, computed } from "vue";

const Input = Object.freeze({
  ZERO: 0,
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
  SEVEN: 7,
  EIGHT: 8,
  NINE: 9,
  DECIMAL: 10,
  ADDITION: 11,
  SUBTRACTION: 12,
  MULTIPLICATION: 13,
  DIVISION: 14,
  RESULT: 15,
  CLEAR: 16,
  ANSWER: 17,
  DELETE: 18,
});

const zeroDisabled = ref(false)

const inputs = ref([
  { value: Input.CLEAR, class: "light", symbol: "AC" },
  { value: Input.ANSWER, class: "light", symbol: "ANS" },
  { value: Input.DELETE, class: "light", symbol: "DEL" },
  { value: Input.DIVISION, class: "orange", symbol: "÷" },
  { value: Input.SEVEN, class: "dark", symbol: "7" },
  { value: Input.EIGHT, class: "dark", symbol: "8" },
  { value: Input.NINE, class: "dark", symbol: "9" },
  { value: Input.MULTIPLICATION, class: "orange", symbol: "×" },
  { value: Input.FOUR, class: "dark", symbol: "4" },
  { value: Input.FIVE, class: "dark", symbol: "5" },
  { value: Input.SIX, class: "dark", symbol: "6" },
  { value: Input.SUBTRACTION, class: "orange", symbol: "-" },
  { value: Input.ONE, class: "dark", symbol: "1" },
  { value: Input.TWO, class: "dark", symbol: "2" },
  { value: Input.THREE, class: "dark", symbol: "3" },
  { value: Input.ADDITION, class: "orange", symbol: "+" },
  { value: Input.ZERO, disabled: zeroDisabled, class: "dark zero", symbol: "0" },
  { value: Input.DECIMAL, class: "dark", symbol: "," },
  { value: Input.RESULT, class: "orange", symbol: "=" },
]);

const register = ref([]);

const displayText = computed(() => {
  if (register.value.length === 0) {
    return "0";
  }
  else {
    let output = "";
    for (let i = 0; i < register.value.length; i++) {
      const input = register.value[i];
      if (input.value >= Input.ADDITION && input.value <= Input.RESULT) {
        output += " ";
      }
      else if (i !== 0) {
        const previousValue = register.value[i - 1].value;
        if (previousValue >= Input.ADDITION && previousValue <= Input.DIVISION) {
          output += " ";
        }
      }

      output += input.symbol;

      if (input.value === Input.RESULT) {
        output += getResult();
      }
    }
    return output;
  }
})

function handleInput(input) {
  switch (input.value) {
    case Input.CLEAR:
      register.value = [];
      break;
    case Input.DELETE:
      register.value.pop();
      break;
    default:
      if (register.value.length === 0) {}
      register.value.push(input);
  }
}

function getResult() {
  function mapValue(input) {
    return input.value;
  }
  const values = register.value.map(mapValue);
  console.log(values)
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
  }

  let result = 0;
  return " " + result;
}
</script>

<template>
  <div class="container">
    <div class="display">{{ displayText }}</div>
    <div class="interface">
      <div v-for="input in inputs"
           :key="input.value"
           @click="handleInput(input)"
           class="input"
           :class="input.class">
        {{ input.symbol }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #1c1c1c;
  padding: 20px;
  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
}

.display {
  color: white;
  text-align: right;
  font-size: 42px;
  text-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
}

.interface {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: 50px 50px 50px 50px 50px;
  margin-top: 10px;
  user-select: none;
  height: 100%;
  width: 100%;
}

.input {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  font-size: 23px;
  transition-duration: 0.25s;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
}
.input:hover {
  cursor: pointer;
}

.disabled:hover {
  background-color: #181818;
  cursor: not-allowed;
}

.light {
  font-size: 18px;
  background-color: #d4d4d2;
  color: #1c1c1c;
}
.light:hover {
  background-color: #e9e9e8;
}

.dark {
  background-color: #505050;
  color: #ffffff;
}
.dark:hover {
  background-color: #a7a7a7;
}

.orange {
  background-color: #ff9500;
  color: #ffffff;
}
.orange:hover {
  background-color: #ffca7f;
}

.zero {
  grid-column: 1 / 3;
  grid-row: 5;
  justify-content: normal;
  padding-left: 19px;
}
</style>
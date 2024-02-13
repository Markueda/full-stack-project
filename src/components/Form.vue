<script setup>
import {ref, computed, defineModel, onMounted} from "vue";
import { useFormInfoStore } from "@/stores/formInfo.js";

const store = useFormInfoStore();

const nameModel = defineModel("Name");
const emailModel = defineModel("Email");
const messageModel = defineModel("Message");

const isValid = computed(() => {
  const nameValid = !!(nameModel.value && nameModel.value.trim());
  const emailValid = !!(emailModel.value && emailModel.value.trim());
  const messageValid = !!(messageModel.value && messageModel.value.trim());
  return nameValid && emailValid && messageValid;
});

function updateName() {
  store.setName(nameModel.value);
}

function updateEmail() {
  store.setEmail(emailModel.value);
}

onMounted(() => {
  nameModel.value = store.getName;
  emailModel.value = store.getEmail;
});

</script>

<template>
  <div>
    <h1>Review calculator</h1>
    <form>
      <h3>Name:</h3>
      <input
          v-model="nameModel"
          type="text"
          placeholder="Name"
          class="field"
          @change="updateName"
      />

      <h3>Email:</h3>
      <input
          v-model="emailModel"
          type="text"
          placeholder="Email"
          class="field"
          @change="updateEmail"
      />

      <h3>Message:</h3>
      <textarea
          v-model="messageModel"
          placeholder="Message"
          class="field"
      />

      <br>

      <button type="submit" :disabled="!isValid">Submit</button>
    </form>
  </div>
</template>
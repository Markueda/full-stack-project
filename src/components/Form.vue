<script setup>
import {ref, computed, defineModel, onMounted} from "vue";
import { useFormInfoStore } from "@/stores/formInfo.js";
import axios from "axios";

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

onMounted(() => {
  nameModel.value = store.getName;
  emailModel.value = store.getEmail;
});

function updateName() {
  store.setName(nameModel.value);
}

function updateEmail() {
  store.setEmail(emailModel.value);
}

function submitForm() {
  console.log("Submitting form")
  axios.post("https://my-json-server.typicode.com/markueda/full-stack-project/reviews",{
    name: nameModel.value,
    email: emailModel.value,
    message: messageModel.value,
  }).then((response) => {
    console.log(response);
    alert("Success!");
  }).catch((error) => {
    console.log(error);
    alert("There was an error.");
  });
}

</script>

<template>
  <div>
    <h1>Review calculator</h1>
    <form>
      <h3>Name:</h3>
      <input
          id="name"
          v-model="nameModel"
          type="text"
          placeholder="Name"
          class="field"
          @change="updateName"
      />

      <h3>Email:</h3>
      <input
          id="email"
          v-model="emailModel"
          type="text"
          placeholder="Email"
          class="field"
          @change="updateEmail"
      />

      <h3>Message:</h3>
      <textarea
          id="message"
          v-model="messageModel"
          placeholder="Message"
          class="field"
      />

      <br>

      <button id="submit" type="submit" :disabled="!isValid" @click.prevent="submitForm">Submit</button>
    </form>
  </div>
</template>
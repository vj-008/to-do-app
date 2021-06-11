<template>
  <form @submit.prevent="submitTask">
    <input v-model="enteredTask" placeholder="Enter Task" type="text" />
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  emits: ["submit-task"],
  data() {
    return {
      enteredTask: "",
    };
  },
  methods: {
    submitTask() {
      this.$emit("submit-task", this.enteredTask);
    },
  },
};
</script>

<style scoped>
form {
  border: 2px solid #ccc;
  padding: 5px;
  margin: auto;
  display: flex;
  justify-content: center;
  max-width: 600px;
  margin-top: 3rem;
  border-radius: 10px;
}
input {
  outline: none;
  border: 0px solid;
  width: 100%;
}
button {
  background-color: #a7bbc7;
  color: #fff;
  border-radius: 15px;
  padding: 7px 20px;
  border: none;
  margin-left: 10px;
}
</style>

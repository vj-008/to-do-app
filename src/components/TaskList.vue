<template>
  <div v-if="taskName">
    <p>{{ taskName }}</p>
    <button @click="deleteTask">Delete</button>
  </div>
</template>

<script>
export default {
  emits: ["delete-task"],
  props: {
    index: {
      type: Number,
      required: true,
    },
    taskName: {
      type: String,
      required: true,
    },
  },
  methods: {
    deleteTask() {
      this.$emit("delete-task", this.index);
    },
  },
};
</script>

<style scoped>
div {
  box-sizing: border-box;
  border: 1px solid #ccc;
  max-width: 500px;
  margin: 2rem auto;
  border-radius: 10px;
  background-color: #a7bbc7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 1.5rem;
}
button {
  background-color: #fff;
  color: #a7bbc7;
  border-radius: 15px;
  padding: 7px 20px;
  border: none;
  margin-left: 10px;
  text-align: center;
}
</style>

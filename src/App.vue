<template>
  <section>
    <to-do @submit-task="submitTask"></to-do>
    <task-list
      v-for="task in taskNames"
      :key="task.taskName"
      :task-name="task.taskName"
      :index="taskNames.indexOf(task)"
      @delete-task="taskDelete"
    ></task-list>
  </section>
</template>

<script>
export default {
  data() {
    return {
      taskNames: [
        {
          taskName: "",
        },
      ],
    };
  },
  methods: {
    submitTask(taskname) {
      if (taskname) {
        const newTask = {
          taskName: taskname,
        };
        this.taskNames.push(newTask);
      }
    },
    taskDelete(index) {
      // this.taskNames = this.taskNames.filter(
      //   (task) => task.taskName !== taskid);
      console.log(index);
      this.taskNames.splice(index, 1);
    },
  },
};
</script>

<style>
#app {
  padding: 0px 2rem;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>

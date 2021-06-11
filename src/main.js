import { createApp } from "vue";
import App from "./App.vue";
import ToDoTask from "./components/ToDoTask.vue";
import TaskList from "./components/TaskList.vue";

const app = createApp(App);
app.component("to-do", ToDoTask);
app.component("task-list", TaskList);

app.mount("#app");

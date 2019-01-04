<template>
  <div class="about">
    <h1>This is the todo detail page</h1>
    <!-- <ToDoComp></ToDoComp> -->
    <CompletedTodos></CompletedTodos>
    <GetTodo></GetTodo>
    <CurrentTodos></CurrentTodos>
  </div>
</template>

<script>
import ToDoComp from '@/components/ToDo.vue'
import GetTodo from '@/components/GetTodo.vue'
import CurrentTodos from '@/components/CurrentTodos.vue'
import CompletedTodos from '@/components/CompletedTodos.vue'
export default {
  name: 'todoEdit',
  components: {
    ToDoComp,
    GetTodo,
    CurrentTodos,
    CompletedTodos
  }
}
</script>
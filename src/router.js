import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import GoalEdit from './views/GoalEdit.vue'
import ToDoEdit from'./views/ToDoEdit.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/GoalEdit',
      name: 'GoalEdit',
      component: GoalEdit
    },
    {
      path: '/ToDoEdit',
      name: 'ToDoEdit',
      component: ToDoEdit
    }
  ]
})

<template>
    <div id="completed-todos">
        <h3 v-if="completed.length > 0">Completed({{completed.length}})</h3>
        <ul>
            <li v-for="todo in completed" v-bind:key=todo.index >
                {{todo.body}}
                <button type="button" @click="remove(todo)" class="btn btn-default btn-sm">
                <span class="glyphicon glyphicon-remove-circle"></span> Remove
                </button>
            </li>
        </ul>

    </div>
</template>

<script>
    export default{
        methods: {
            remove(todo){
                this.$store.dispatch('removeTodo', todo)
            }
        },
        computed: {
            completed(){
                return this.$store.getters.completedTodos
            }
        }
    }
</script>
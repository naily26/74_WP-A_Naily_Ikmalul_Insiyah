<template>
    <div id="todo-list" >
        <div class="list-item" v-for="n in todos" :key="n.id">
            <div class="list-item-holder" v-if="n.location == location" :data-status="n.completed">
                <div class="checkbox-items" :data-status="n.completed">
                    <input type="checkbox" :data-id="n.id" :id="n.id" @click="updateTodo" :checked="n.completed" /> 
                    <label :data-id="n.id" :for="n.id" >{{ n.name }}</label>
                </div>
                <div class="item-options">
                    <div class="delete-item" @click="deleteItem" :data-id="n.id">Delete</div>
                    <div class="archive-item" v-if="n.location !== 'archive'" @click="archiveItem" :data-id="n.id">Archive</div>
                </div>
            </div>
        </div>
        <div id="new-todo-list-item">
            <input type="text" placeholder="Add a new item.." id="new-todo-list-item-input" @keyup="updateItemText" />
            <input type="submit" id="new-todo-list-item-submit" @click="newItem" value="Add To Do List Item" />
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

export default {
    name: "TodoList",
    data() {
        return {
            newTodoItem: ''
        }
    },
    props: {
        location: String
    },
    setup() {
        const store = useStore()
        return {
            todos: store.getters.todos,
        }
    },
    methods: {
        updateItemText: function(e) {
            this.newTodoItem = e.currentTarget.value;

            if(e.keyCode === 13) {
                this.newItem();
            }

            return false;
            
        },
        updateTodo: function(e) {
            let newStatus = e.currentTarget.parentElement.getAttribute('data-status') == "true" ? false : true;
            this.$store.commit('updateTodo', {
                id: e.currentTarget.getAttribute('data-id'),
                completed: newStatus
            })
        },
        deleteItem: function(e) {
            this.$store.commit('deleteTodo', {
                id: e.currentTarget.getAttribute('data-id')
            })
        },
        newItem: function() {
            if(this.newTodoItem !== '') {
                this.$store.commit('addTodo', {
                    id: uuidv4(),
                    name: this.newTodoItem,
                    completed: false
                })
            }
        },
        archiveItem: function(e) {
            this.$store.commit('moveTodoItem', {
                id: e.currentTarget.getAttribute('data-id'),
                location: 'archive'
            })
        }
    }
}
</script>
<style scoped>
#todo-list {
    /* border-radius: 14px; */
    max-width: 400px;
    border: 1px solid #ddd;
    position: relative;
    left: 425px;
}
.list-item-holder {
    display: flex;
    padding: 1rem 1rem;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
}
.item-options, .item-checkbox  {
    display: flex;
}
#new-todo-list-item {
    padding: 1rem;
}
#new-todo-list-item input[type="text"] {
    margin: 0 0 1rem 0;
}

.delete-item, .archive-item {
    font-size: 0.875rem;
    background: #eee;
    margin: 0 0 0 0.5rem;
    height: 1rem;
    border-radius: 100px;
    transition: all 0.1s ease-out;
    color: rgba(0,0,0,0.5);
    cursor: pointer;
    padding: 0.25rem 0.75rem;
}
.checkbox-items {
    display: flex;
    align-items: center;
}
.delete-item:hover, .archive-item:hover {
    background: #ddd;
    color: black;
}
[data-status="false"] label {
    color: #171718;
    font-weight: 600;
}
[data-status="true"] label {
    text-decoration: line-through;
}
</style>
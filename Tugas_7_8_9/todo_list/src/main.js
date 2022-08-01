import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createStore} from 'vuex'

const store = createStore(
    {
        state() {
            return {
                todos: [
                    {id: 'first-element', name:'My first todo item', completed: false, location: 'home'}
                ]
            }
        },
        getters: {
            todos (state) {
                return state.todos;
            }
        },
        mutations: {
            UpdateTodo (state, todoItem) {
                let id = todoItem.id;
                let completed = todoItem.completed;
                let name = todoItem.name;

                let findE1 = state.todos.find((x) => x.id == id);
                if(findE1 !== null) {
                    if(completed !== undefined) {
                        findE1.completed = completed;
                    }
                    if(name !== undefined) {
                        findE1.name = name;
                    }
                } else {
                    console.log(`To do list item ${id} couldn't be found`);
                }
            },
            addTodo (state, todoItem) {
                if(todoItem.id !== undefined && typeof todoItem.name == 'string' && typeof todoItem.completed == 'boolean') {
                    state.todos.push(
                        {
                            id: todoItem.id,
                            name: todoItem.name,
                            completed: todoItem.completed,
                            location: 'home'
                        }
                    )
                }
            },
            deleteTodo (state, todoItem) {
                let id = todoItem.id;
                let removeE1 = state.todos.findIndex((x) => x.id == id);
                if(removeE1 !== null) {
                    state.todos.splice(removeE1, 1);
                }
            },
            moveTodoItem (state, todoItem) {
                let id = todoItem.id;
                let location = todoItem.location;
                let findE1 = state.todos.find((x) => x.id == id);

                if(findE1 !== null ){
                    findE1.location = location;
                }
                else {
                    console.log(`To do list item ${id} couldn;t be found`);
                }
            },
            loadStorage() {
                if(localStorage.getItem('store')) {
                    try {
                        this.replaceState(JSON.parse(localStorage.getItem('store')));
                    }
                    catch(e) {
                        console.log('could not initialize store', e);
                    }
                }
            }
        }
    }
)

store.subscribe((mutations, state) => {
    localStorage.setItem('store', JSON.stringify(state));
})

createApp(App).use(router).use(store).mount('#app')
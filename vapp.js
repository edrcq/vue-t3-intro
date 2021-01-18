Vue.component('list-item', {
    template: `<li>{{ text }}</li>`,

    props: {
        text: { type: String, default: 'test' }
    }
})

const vapp = new Vue({
    el: '#todo-app',

    data() { return {
        newTodo: '',
        title: 'Todo List',
        todos: ['Todo 1', 'Todo 2']
    }},

    computed: {
        maxLenInputStyle() {
            return this.newTodo.length > 8 ? 'color: red;' : 'color: green;'
        }
    }


})


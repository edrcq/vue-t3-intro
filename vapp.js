
Vue.component('list-item', {
    template: `<li>{{ text }}</li>`,

    props: {
        text: { type: String, default: 'test' }
    }
})


// Ceci est une directive custom
Vue.directive('focusa', {
    // Quand l'élément lié est inséré dans le DOM...
    inserted: function (el) {
      // L'élément prend le focus
      el.focus()
    }
})

const vapp = new Vue({

    components: [

    ],

    data() { return {
        newTodo: '',
        title: '<h1>Todo List<h1>',
        todos: [
            { text: 'Todo 1', done: false },
            { text: 'Todo 2', done: false },
        ]
    }},

    computed: {
        maxLenInputStyle() {
            return this.newTodo.length > 8 ? 'color: red;' : 'color: green;'
        }
    },

    methods: {
        addItem() {
            this.todos.push({
                text: this.newTodo,
                done: false
            })
            this.newTodo = ''
        }
    },

    /* Cycles de vie */
    beforeCreate() {
        console.log('before create')
        fetch(url).then(r => r.json()).then(jsonData => this.todos = jsonData)
    },
    created() {
        console.log('created')
    },

    beforeMount() {
        console.log('before mount')
    },
    mounted() {
        console.log('mounted')
    },

    beforeUpdate() {
        console.log('before update', this.title)
    },
    updated() {
        console.log('updated', this.title)
    },

    beforeDestroy() {}


})
vapp.$mount('#todo-app')



setTimeout(() => {
    vapp.title = 'Titre ToDo List'
}, 3000)






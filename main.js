Vue.component('task', {
  template: '<li><slot></slot></li>'
});

Vue.component('task-list', {
  template: `
              <div>
                <task v-for="task in tasks" key="task.id">
                  {{ task.description }}
                </task>
              </div>
            `,

  data() {
    return {
      tasks: [
        { id: 1, description: 'Learn PHP', completed: false },
        { id: 2, description: 'Learn Vue', completed: false },
        { id: 3, description: 'Get job', completed: false },
        { id: 4, description: 'do stuff', completed: true },
        { id: 5, description: 'do more stuff', completed: true }
      ]
    }
  }
})

new Vue({
  el: '#root'
});


const app = new Vue({


    el: '#root',

    data: { 
        newTask: '',
        tasks: [
            'Fare la spesa',
            'Fare la cena',
            'Fare gli esercizzi',
        ],
        error: false,
    },

    methods: { 
        removeTask(x){
            this.tasks.splice(x, 1);
        }
    },

    addTask(){
        if(this.newTask !=''){
            this.tasks.push(this.newTask);
            this.error = false;
        } else{
            this.error = true;
        }
    }
})




/* 
v-model:
stampa i value di elementi
input e output,


v-bind:
ci permette di inserire una variabile
all’interno di un attributo di un tag.
----- v-bind:class=... = :class=... -----


v-on:
----- v-on:click=... = @click=... -----
 */




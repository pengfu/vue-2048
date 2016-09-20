<template>
    <div class="overlay" v-show="show">
        <p class="message">{{contents}}</p>
        <button class="tryAgain" @click="restart" >Try again</button>
    </div>
</template>

<script>

    export default{
        data(){
            return{

            }
        },
        props:{
            board:{
                type:Object,
                required:true
            },
            onrestart:{
                type:Function,
                required:true
            }
        },
        computed:{
            show(){
                return this.board.hasWon() || this.board.hasLost()
            },
            contents(){
                if(this.board.hasWon()){
                    return 'Good Job!'
                }else if(this.board.hasLost()){
                    return 'Game Over'
                }else {
                    return ''
                }
            }
        },

        methods:{
            restart(){
                this.onrestart && this.onrestart()
            }
        },
        components:{

        }
    }
</script>

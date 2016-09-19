<template>
    <div class="overlay">
        <p class="message">{{contents}}</p>
        <button class="tryAgain" @click="onRestart"  >Try again</button>
    </div>
</template>

<script>

    export default{
        data(){
            return{
                contents:'hello vue'
            }
        },

        methods:{
            onRestart(){

            }
        },
        components:{

        }
    }
</script>

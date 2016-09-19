<template>
    <div class="board"  tabIndex="1">

       <game-end-overlay></game-end-overlay>
    </div>
</template>

<script>

    import GameEndOverlay from './GameEndOverlay.vue'
    export default {
        components: {
            GameEndOverlay
        }
    }
</script>

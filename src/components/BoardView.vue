<template>
    <div class="board"  tabIndex="1">

       <GameEndOverlay></GameEndOverlay>
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

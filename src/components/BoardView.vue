<template>
    <div class="board"  tabIndex="1">
        <div v-for="r_item in board.cells">
            <cell v-for="c_item in r_item"></cell>
        </div>
        <tile-view v-for="tile in tiles" :tile=tile>

        </tile-view>
        <game-end-overlay :board=board></game-end-overlay>
    </div>
</template>

<script>
    import Cell from './Cell.vue'
    import TileView from './TileView.vue'
    import GameEndOverlay from './GameEndOverlay.vue'
    export default {
        data(){
          return {
              board:new Board()
          }
        },
        computed:{
          tiles(){
              return this.board.tiles
                      .filter(tile => tile.value != 0)
          }
        },
        components: {
            Cell,
            TileView,
            GameEndOverlay,
        }
    }
</script>

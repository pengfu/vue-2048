<template>
    <div class="board"  tabIndex="1">
        <div v-for="r_item in board.cells">
            <cell v-for="c_item in r_item"></cell>
        </div>
        <tile-view v-for="tile in tiles" :tile="tile">
        </tile-view>
        <game-end-overlay :board="board" :onrestart="onRestart"></game-end-overlay>
    </div>
</template>

<script>
    import Cell from './Cell.vue'
    import TileView from './TileView.vue'
    import GameEndOverlay from './GameEndOverlay.vue'
    import {Board} from '../board'
    export default {
        data(){
          return {
              board:new Board()
          }
        },
        mounted(){
            window.addEventListener('keydown', this.handleKeyDown.bind(this));
        },
        beforeDestroy(){
            window.removeEventListener('keydown', this.handleKeyDown.bind(this));
        },
        computed:{
          tiles(){
              return this.board.tiles
                      .filter(tile => tile.value != 0)
          }
        },
        methods:{
            handleKeyDown(event){
                if (this.board.hasWon()) {
                    return;
                }
                if (event.keyCode >= 37 && event.keyCode <= 40) {
                    event.preventDefault();
                    var direction = event.keyCode - 37;
                    this.board.move(direction)
                }
            },
            onRestart(){
                this.board = new Board()
            }
        },
        components: {
            Cell,
            TileView,
            GameEndOverlay,
        }
    }
</script>

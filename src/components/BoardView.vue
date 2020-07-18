<template>
  <div class="board" tabIndex="1">
    <div v-for="(r_item, r_i) in board.cells" :key="r_i">
      <cell v-for="(c_item, c_i) in r_item" :key="c_i"></cell>
    </div>
    <tile-view v-for="(tile, i) in tiles" :tile="tile" :key="i"> </tile-view>
    <game-end-overlay :board="board" :onrestart="onRestart"></game-end-overlay>
  </div>
</template>

<script>
import Cell from "./Cell.vue";
import TileView from "./TileView.vue";
import GameEndOverlay from "./GameEndOverlay.vue";
import { Board } from "../board";
export default {
  data() {
    return {
      board: new Board(),
    };
  },
  mounted() {
    window.addEventListener("keydown", this.handleKeyDown.bind(this));
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown.bind(this));
  },
  computed: {
    tiles() {
      return this.board.tiles.filter((tile) => tile.value != 0);
    },
  },
  methods: {
    handleKeyDown(event) {
      if (this.board.hasWon()) {
        return;
      }
      if (event.keyCode >= 37 && event.keyCode <= 40) {
        event.preventDefault();
        var direction = event.keyCode - 37;
        this.board.move(direction);
      }
    },
    onRestart() {
      this.board = new Board();
    },
  },
  components: {
    Cell,
    TileView,
    GameEndOverlay,
  },
};
</script>

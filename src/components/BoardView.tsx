
import { defineComponent, onMounted, onBeforeUnmount, computed, reactive, ComputedRef } from "Vue";
import Cell from "./Cell.vue";
import TileView from "./TileView.vue";
import GameEndOverlay from "./GameEndOverlay.vue";
import { Board } from "../board";

export default defineComponent({
  setup() {
    onMounted(() => {
      console.log('onMounted-------------------------');
      window.addEventListener("keydown", handleKeyDown);
    });

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount-------------------------');
      window.removeEventListener("keydown", handleKeyDown);
    })
    let board = new Board();
    // console.log('board----', board);
    const handleKeyDown = (event: any) => {
      if (board.hasWon()) {
        return;
      }
      if (event.keyCode >= 37 && event.keyCode <= 40) {
        event.preventDefault();
        const direction = event.keyCode - 37;
        board.move(direction);
      }
    };
    const onRestart = () => {
      board = new Board();
    };

    const tiles = computed(() => board.tiles.filter((tile: any) => tile.value != 0));

    const CellViewDom = board.cells.map((r_item: any, r_i: number) => {
      return (
        <div key={r_i}>
          {r_item.map((c_item: any, c_i: number) => {
            return (
              <Cell key={c_i}></Cell>
            )
          })}
        </div>
      )
    });
    // console.log('------tiles', tiles);
    // console.log('------CellViewDom', CellViewDom);
    const TileViewDom = tiles.value.map((tile: any, i: number) => {
      return (
        <TileView tile={tile} key={i}></TileView>
      )
    });

    return () => (
      <div class="board">
        {CellViewDom}
        {TileViewDom}
        <GameEndOverlay board={board} onrestart={onRestart}></GameEndOverlay>
      </div >
    );
  },

  // mounted() {
  //   console.log('onMounted-------------------------');
  //   window.addEventListener("keydown", handleKeyDown);  }
});


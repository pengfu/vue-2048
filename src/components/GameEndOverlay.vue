<template>
  <div class="overlay" v-show="show">
    <p class="message">{{ contents }}</p>
    <button class="tryAgain" @click="restart">Try again</button>
  </div>
</template>

<script>
import { toRefs, ref, computed } from "vue";
export default {
  props: {
    board: {
      type: Object,
      required: true,
    },
    onrestart: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const { board } = toRefs(props);
    const show = computed(() => {
      return board.value.hasWon() || board.value.hasLost();
    });
    const contents = computed(() => {
      if (board.value.hasWon()) {
        return "Good Job!";
      } else if (board.value.hasLost()) {
        return "Game Over";
      } else {
        return "";
      }
    });
    const restart = () => {
      props.onrestart && props.onrestart();
    }
    return {
      show,
      contents,
      restart
    }
  },
};
</script>

<template>
  <span :class="classes">{{ tile.value }}</span>
</template>

<script>
import { toRefs, ref, computed } from "vue";
export default {
  props: {
    tile: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { tile } = toRefs(props);
    const classes = computed(() => {
      var classArray = ["tile"];
      classArray.push("tile" + tile.value.value);
      if (!tile.value.mergedInto) {
        classArray.push("position_" + tile.value.row + "_" + tile.value.column);
      }
      if (tile.value.mergedInto) {
        classArray.push("merged");
      }
      if (tile.value.isNew()) {
        classArray.push("new");
      }
      if (tile.value.hasMoved()) {
        classArray.push(
          "row_from_" + tile.value.fromRow() + "_to_" + tile.value.toRow()
        );
        classArray.push(
          "column_from_" +
            tile.value.fromColumn() +
            "_to_" +
            tile.value.toColumn()
        );
        classArray.push("isMoving");
      }

      return classArray.join(" ");
    });
    return {
      classes,
    };
  },
};
</script>

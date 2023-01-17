<template>
  <div
    :class="['tab-select-item', type, active ? 'active' : '']"
    @click="handleItemClick"
  >
    {{ title }}
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "多人入住",
  },
  borderColor: {
    type: String,
    default: "white",
  },
  borderActiveColor: {
    type: String,
    default: "#ff9645",
  },
  borderWidth: {
    type: String,
    default: "1px",
  },
  type: {
    type: String,
    default: "default", // default / primary / pink / gray
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["tagClick"]);
const handleItemClick = () => {
  emit("tagClick", props.title);
};
</script>

<style scoped lang="less">
.tab-select-item {
  position: relative;
  display: inline-block;
  height: 25px;
  line-height: 25px;
  padding: 0 10px;
  margin-left: 10px;
  margin-bottom: 2px;
  margin-top: 2px;

  border-radius: 13px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #666;
  background-color: white;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-top: v-bind("props.borderWidth") solid v-bind("props.borderColor");
    border-right: v-bind("props.borderWidth") solid v-bind("props.borderColor");
    border-bottom: v-bind("props.borderWidth") solid v-bind("props.borderColor");
    border-left: v-bind("props.borderWidth") solid v-bind("props.borderColor");
    box-sizing: border-box;
    width: 200%;
    height: 200%;
    transform: scale(0.5);
    transform-origin: left top;
    border-radius: 26px;
    pointer-events: none;
  }
}
.tab-select-item.active,
.tab-select-item.primary {
  color: var(--primary-color);
  &::before {
    border-top: v-bind("props.borderWidth") solid var(--primary-color);
    border-right: v-bind("props.borderWidth") solid var(--primary-color);
    border-bottom: v-bind("props.borderWidth") solid var(--primary-color);
    border-left: v-bind("props.borderWidth") solid var(--primary-color);
  }
}

.tab-select-item.pink {
  color: #333;
  background-color: #fff4ec;
  padding: 0px 12px;
  margin-bottom: 6px;
  margin-left: 5px;
}
.tab-select-item.gray {
  color: #333;
  background-color: rgb(240, 243, 246);
  padding: 0px 12px;
  margin-bottom: 6px;
  margin-left: 10px;
}
</style>

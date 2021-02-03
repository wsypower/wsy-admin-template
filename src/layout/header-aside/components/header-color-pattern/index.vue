<template>
  <el-tooltip
    class="item"
    effect="dark"
    :content="content"
    placement="bottom"
  >
    <div class="header-color-pattern">
      <label class="dayNight">
        <input
          type="checkbox"
          :checked='checked'
          @change="handleSelectTheme"
        >
        <div></div>
      </label>
    </div>

  </el-tooltip>

</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'w-header-color-pattern',
  data() {
    return {
      checked: false
    }
  },
  created() {
    this.checked = this.activeName === 'lightblue'
  },
  computed: {
    ...mapState('w-admin/theme', ['activeName']),
    thenName() {
      return this.checked ? 'lightblue' : 'chester'
    },
    content() {
      return this.checked ? '切换至暗黑模式' : '切换至淡雅模式'
    }
  },
  methods: {
    ...mapActions('w-admin/theme', ['set']),
    handleSelectTheme() {
      this.checked = !this.checked
      this.set(this.thenName)
    }
  }
}
</script>

<style lang="scss" scoped>
$night: #171c28;
$day: #cccccc;
$nightBtn: #cccccc;
$dayBtn: #fc8a3ecc;
.header-color-pattern {
  height: 46px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dayNight {
  transform: scale(0.5);
  cursor: pointer;
  input {
    display: none;
    & + div {
      border-radius: 50%;
      width: 36px;
      height: 36px;
      position: relative;
      box-shadow: inset 16px -16px 0 0 $nightBtn;
      transform: scale(1) rotate(-2deg);
      transition: box-shadow 0.5s ease 0s, transform 0.4s ease 0.1s;
      &:before {
        content: "";
        width: inherit;
        height: inherit;
        border-radius: inherit;
        position: absolute;
        left: 0;
        top: 0;
        transition: background 0.3s ease;
      }
      &:after {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin: -4px 0 0 -4px;
        position: absolute;
        top: 50%;
        left: 50%;
        box-shadow: 0 -23px 0 $dayBtn, 0 23px 0 $dayBtn, 23px 0 0 $dayBtn,
          -23px 0 0 $dayBtn, 15px 15px 0 $dayBtn, -15px 15px 0 $dayBtn,
          15px -15px 0 $dayBtn, -15px -15px 0 $dayBtn;
        transform: scale(0);
        transition: all 0.3s ease;
      }
    }
    &:checked + div {
      box-shadow: inset 32px -32px 0 0 $nightBtn;
      transform: scale(0.5) rotate(0deg);
      transition: transform 0.3s ease 0.1s, box-shadow 0.2s ease 0s;
      &:before {
        background: $dayBtn;
        transition: background 0.3s ease 0.1s;
      }
      &:after {
        transform: scale(1.5);
        transition: transform 0.5s ease 0.15s;
      }
    }
  }
}
</style>
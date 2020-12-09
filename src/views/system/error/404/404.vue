<template>
  <div class="wscn-http404-container">
    <div class="wscn-http404">
      <div class="pic-404"></div>
      <div class="bullshit">
        <div class="bullshit__oops">404!</div>
        <div class="bullshit__info"></div>
        <div class="bullshit__headline">{{ message }}</div>
        <div class="bullshit__info">
          Please check that the URL you entered is correct, or click the button
          below to return to the homepage.
        </div>
        <el-button
          class="bullshit__return-home"
          @click="$router.replace({ path: '/' })"
        >
          Back to home
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '404',
  computed: {
    message() {
      return 'The webmaster said that you can not enter this page...'
    }
  }
}
</script>

<style lang="scss" scoped>
.wscn-http404-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wscn-http404 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .pic-404 {
    position: relative;
    float: left;
    width: 800px;
    overflow: hidden;
    height: 600px;
    background: url('./images/404.gif') center;
  }
  .bullshit {
    width: 300px;
    padding: 30px 0;
    overflow: hidden;
    &__oops {
      font-size: 80px;
      font-weight: bold;
      line-height: 40px;
      color: #1482f0;
      opacity: 0;
      margin-bottom: 20px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }
    &__headline {
      font-size: 20px;
      line-height: 24px;
      color: #222;
      font-weight: bold;
      opacity: 0;
      margin-bottom: 10px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.1s;
      animation-fill-mode: forwards;
    }
    &__info {
      font-size: 13px;
      line-height: 21px;
      color: grey;
      opacity: 0;
      margin-bottom: 30px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.2s;
      animation-fill-mode: forwards;
    }
    &__return-home {
      display: block;
      float: left;
      background: #1482f0;
      border-radius: 100px;
      color: #ffffff;
      opacity: 0;
      cursor: pointer;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    }
    @keyframes slideUp {
      0% {
        transform: translateY(60px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
}
</style>

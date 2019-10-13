<template>
    <div class="app-layout">
        <div class="app-layout-header">
            <div class="logo-wrap">
                <div class="logo-name">demo</div>
                <div class="divider"></div>
            </div>
            <TopNav />
        </div>
        <div class="app-layout-body">
          <div class="app-main-aside" v-if="false">
            <!-- 左侧树 -->
          </div>
          <div class="app-main-main">
            <!-- 主题渲染位置 -->
            <router-view></router-view>
          </div>
        </div>
    </div>
</template>

<script>
import TopNav from './TopNav.vue'
export default {
  name: 'layout',
  components: {
    TopNav
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/layout.scss';
</style>

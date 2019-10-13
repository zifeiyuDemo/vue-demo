<template>
    <div class="topNav">
        <a-dropdown>
            <a class="ant-dropdown-link" href="#">
                首页
            </a>
        </a-dropdown>
        <a-dropdown v-for="menu in MenuData.system" :key="menu.path">
            <a class="ant-dropdown-link" href="#">
                {{menu.showName}} <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item v-for="child in menu.children" :key="child.path">
                {{child.showName}}
              </a-menu-item>
            </a-menu>
        </a-dropdown>
    </div>
</template>
<script>
import {MenuData} from '@/data/menus.js'
export default {
  name: 'topNav',
  data () {
    return {
      MenuData
    }
  },
  mounted () {
    console.log(JSON.stringify(this.MenuData.system))
  },
  created () {
  }
}
</script>
<style lang="scss">
</style>

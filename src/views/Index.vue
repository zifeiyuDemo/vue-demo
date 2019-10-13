<!-- 搞个首页 -->
<template>
    <!-- 布局 左侧 右侧 -->
  <div class="app-layout">
      <div class="app-content-header app-content-header-flex-row">
      </div>
      <div  class="app-layout-body">
        <a-layout style="text-align: center;">
          <a-layout-sider class="layout-aside" >
            <a-collapse defaultActiveKey="0" @change="changeActivekey">
              <a-collapse-panel header="我的课程" key="0" :showArrow="false">
                <p>我的网络课程</p>
                <p>我的面授课程</p>
                <p>我的海外课程</p>
                <p>我的专题课程</p>
              </a-collapse-panel>
              <a-collapse-panel header="我的收藏" key="1" :showArrow="false">
                  <p>收藏夹1</p>
                  <p>收藏夹2</p>
                  <p>收藏夹3</p>
              </a-collapse-panel>
              <a-collapse-panel header="我的资料" key="2" :showArrow="false">
                <p>修改我的资料</p>
                <p>修改密码</p>
                <p>修改电子邮件</p>
              </a-collapse-panel>
              <a-collapse-panel header="我的论坛" key="3" :showArrow="false">
                  <p>技术讨论组1</p>
              </a-collapse-panel>
            </a-collapse>
          </a-layout-sider>
          <a-layout-content class="app-main-main">
            <p>主体body</p>
          </a-layout-content>
        </a-layout>
    </div>
  </div>
</template>
<script>
export default{
  data () {
    return {
      text: 'AAAA'
    }
  },
  methods: {
    changeActivekey () {
      console.log('change actions ')
    }
  }
}
</script>
<style lang="scss">
</style>

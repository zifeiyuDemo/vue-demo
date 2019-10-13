<template>
  <div class="app-content">
    <div class="app-content-header app-content-header-flex-row">
      <div class="app-content-header-left">
        <a-input-search />
      </div>
      <div class="app-content-header-right">
        <a-button type="primary">高级</a-button>
        <a-dropdown>
            <a-menu slot="overlay">
              <a-menu-item key="1">新建</a-menu-item>
              <a-menu-item key="2">修改</a-menu-item>
              <a-menu-item key="3">删除</a-menu-item>
            </a-menu>
            <a-button shape="circle">
              <a-icon type="ellipsis" />
            </a-button>
          </a-dropdown>
      </div>
    </div>
    <div class="app-content-body">
        <!-- 搞个table -->
        <table>
          <thead>
            <tr>
              <th>column1</th>
              <th>column1</th>
              <th>column1</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>date1</td>
              <td>date2</td>
              <td>date3</td>
            </tr>
            <tr>
              <td>date1</td>
              <td>date2</td>
              <td>date3</td>
            </tr>
            <tr>
              <td>date1</td>
              <td>date2</td>
              <td>date3</td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
@import '@/assets/scss/content.scss'
</style>

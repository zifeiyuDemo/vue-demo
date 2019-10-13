<!-- 注册页面 -->
<template>
  <div class="regist">
    <a-layout>
        <a-layout-header class="regist-header">
        </a-layout-header>
        <a-layout-content class="regist-body">
          <a-card title="Demo.com" style="width: 500px">
            <a-form :form="form">
              <a-form-item
                v-bind="formItemLayout"
                label="用户名"
              >
                <a-input v-decorator="[
                  'username',
                  {rules: [{required: true, message: '请输入账号或者用户名!'}]}]"
                  placeholder="Username"
                  >
                  <a-icon slot="prefix" type="user"></a-icon>
                </a-input>
              </a-form-item>
              <a-form-item
                v-bind="formItemLayout"
                label="密码"
              >
                <a-input v-decorator="[
                  'pwd', {rules: [{required: true, message: '请输入密码!'}]}]"
                   type="password" placeholder="Password">
                    <a-icon slot="prefix" type="lock"></a-icon>
                </a-input>
              </a-form-item>
            </a-form>
            <template class="ant-card-actions" slot="actions">
              <div @click="regist"><a-icon type="smile"></a-icon>注册</div>
              <div> <a-icon type="meh"></a-icon>登录</div>
            </template>
          </a-card>
        </a-layout-content>
      </a-layout>
  </div>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 }
}
export default {
  name: 'regist',
  data () {
    return {
      formItemLayout,
      form: this.$form.createForm(this),
      userName: '',
      pwd: ''
    }
  },
  methods: {
    regist () {
      let tempUser = {}
      this.form.validateFields((err, values) => {
        if (!err) {
          tempUser = values
          this.$store.dispatch('addUserData', {user: tempUser}).then(resp => {
            this.$message.info(resp.username + ' 成功注册！')
          })
        } else {
          this.$message.error('请根据输入用户名或密码!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/regist.scss'
</style>

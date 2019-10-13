import http from '@/axios'

const state = {
  userData: {
    userName: '',
    pwd: ''
  }
}

const getters = {
  getRegistUserData (state) {
    return state.userData
  }
}

const actions = {
  addUserData (context, {user}) {
    return new Promise((resolve, reject) => {
      console.log('store action get data = ' + JSON.stringify(user))
      http.post('/addUser', {user: user}).then((respData) => {
        console.log(respData.data)
        resolve(respData.data)
      }).catch(error => {
        console.log('创建失败啦')
        reject(error)
      })
    })
  }
}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}


const state = {
  menus: []
}

const getters = {
  getMenus: state => {
    return state.menus
  }
}

const actions = {
  updateMenus: (context, menus) => {
    context.commit('loadMenus', menus)
  }
}

const mutations = {
  loadMenus (state, menus) {
    state.menus = menus
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}

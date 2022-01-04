export const state = () => ({
  showImage: false,
  index: null,
  color: 0,
  align: null,
  footer: true,
  name: null,
})

export const getters = {
  showImage: (state) => state.showImage,
  getIndex: (state) => state.index,
  getName: (state) => state.name,
}

export const mutations = {
  showImage(state, value) {
    state.showImage = value
  },
  setIndex(state, index) {
    state.index = index
  },
  setColor(state, color) {
    state.color = color
  },
  setAlign(state, align) {
    state.align = align
  },
  setFooter(state, value) {
    state.footer = value
  },
  setName(state, name) {
    state.name = name
  },
}

export const state = () => ({
  showImage: false,
  index: null,
  color: 0,
  align: null,
  footer: true,
})

export const getters = {
  showImage: (state) => state.showImage,
  getIndex: (state) => state.index,
}

export const mutations = {
  showImage(state, value) {
    // eslint-disable-next-line no-console
    console.log('showImage: ' + value)
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
}

export const state = () => ({
  color: 0,
  align: null,
})

export const mutations = {
  setColor(state, color) {
    state.color = color
  },
  setAlign(state, align) {
    state.align = align
  },
}

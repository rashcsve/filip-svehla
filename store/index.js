export const state = () => ({
  color: 0,
  align: null,
  footer: true,
})

export const mutations = {
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

module.exports = {
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        8: 'repeat(8, minmax(0, 1fr))',
        // Complex site-specific row configuration
        layout: '45% 10% 45%',
      },
    },
  },
}
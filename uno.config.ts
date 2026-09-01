import { defineConfig, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  transformers: [transformerDirectives()],
  theme: {
   colors: {
      main: 'rgba(54, 52, 49, 1)',
      golden: 'rgba(204, 201, 196, 1)'
   },
   fontFamily: {
      sans: '"Inter Variable", "Inter", ui-sans-serif, system-ui, sans-serif',
      display: '"Playfair Display SC", Georgia, serif',
      serif: '"Playfair Display Variable", Georgia, serif',
      mono: '"JetBrains Mono", ui-monospace, monospace'
    }
  }
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'lib') {
    return {
      build: {
        copyPublicDir: false,
        lib: {
          entry: resolve(__dirname, 'src/lib/simple-state/index.ts'),
          formats: ['es'],
          fileName: 'index'
        },
        rollupOptions: {
          external: ['react'],
          output: {
            globals: {
              react: 'React'
            }
          }
        }
      }
    }
  }

  // Default demo app config
  return {
    plugins: [
      react(),
      tailwindcss()
    ],
  }
})

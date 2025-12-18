import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  const sheetsTarget = env.VITE_GOOGLE_SHEETS_ENDPOINT
  const sheetsUrl = sheetsTarget ? new URL(sheetsTarget) : null

  return {
    plugins: [react()],
    server: {
      port: 5173,
      open: true,
      proxy: sheetsUrl
        ? {
            '/api/sheets': {
              target: `${sheetsUrl.protocol}//${sheetsUrl.host}`,
              changeOrigin: true,
              secure: true,
              rewrite: () => `${sheetsUrl.pathname}${sheetsUrl.search}`,
              configure: (proxy) => {
                proxy.on('proxyReq', (proxyReq, req) => {
                  console.log(
                    `[proxy:/api/sheets] ${req.method} ${req.url} -> ${sheetsUrl.protocol}//${sheetsUrl.host}${sheetsUrl.pathname}${sheetsUrl.search}`
                  )
                  console.log(`[proxy:/api/sheets] outbound host`, proxyReq.getHeader('host'))
                })

                proxy.on('proxyRes', (proxyRes, req) => {
                  console.log(`[proxy:/api/sheets] upstream status`, proxyRes.statusCode, req.method, req.url)
                  console.log(`[proxy:/api/sheets] upstream content-type`, proxyRes.headers['content-type'])
                  console.log(`[proxy:/api/sheets] upstream location`, proxyRes.headers.location)
                })

                proxy.on('error', (err, req) => {
                  console.log(`[proxy:/api/sheets] error`, (err as Error).message, req.method, req.url)
                })
              },
            },
          }
        : undefined,
    },
  }
})

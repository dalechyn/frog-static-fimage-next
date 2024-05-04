/** @jsxImportSource frog/jsx */

import { Button, Frog } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame(
    '/',
    (c) => {
      return c.res({
        image: (
          <div tw="flex">
              (clicked) Current time: {new Date().toISOString()}
          </div>
        ),
      })
    },
    {
      initial: {
        refreshing: true,
        image: () => (
          <div tw="flex">
              Current time: {new Date().toISOString()}
          </div>
        ),
        intents: [<Button>Check again</Button>],
      },
    },
  )

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)

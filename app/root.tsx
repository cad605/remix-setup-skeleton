import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import type { LinksFunction, MetaFunction } from 'remix'
import Layout from './components/layout'

/* stlyes */
import indexStyles from '../styles/index.css'
import appStyles from '../styles/app.css'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: indexStyles,
    },
    {
      rel: 'stylesheet',
      href: appStyles,
    },
  ]
}

export const meta: MetaFunction = () => {
  return { title: 'Remix | By Example' }
}

function Document({
  children,
  title = `Remix | By Example`,
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <title>{title}</title>
        <Links />
      </head>
      <body className="">
        <Layout>{children}</Layout>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  )
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}

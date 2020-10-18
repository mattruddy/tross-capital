import React, { ReactNode } from 'react'
import Head from 'next/head'
import MainNav from './MainNav'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Tross Capital' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <MainNav />
    </header>
    <div className="body main-b">
    {children}
    </div>
    <footer className="footer main-b">
      <i>Tross Capital LLC</i>
    </footer>
  </>
)

export default Layout

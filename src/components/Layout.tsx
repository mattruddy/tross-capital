import React, { ReactNode } from 'react'
import Head from 'next/head'
import MainNav from './MainNav'
import { Branding } from '../utils/utils'

type Props = {
  children?: ReactNode
  title?: string
  metaTitle?: string
  description?: string
  image?: string
  url?: string
}

const Layout = ({ children, title = 'Tross Capital', metaTitle, description, image, url }: Props) => {
  const defaultDescription = Branding.defaultDesciption
  const defaultImage = Branding.defaultLogo
  const defaultTitle = Branding.defaultTitle
  const defaultUrl = Branding.defaultUrl

  return (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="apple-touch-icon" sizes="192x192" href="/logo-bg-192.png" />
        <meta name="theme-color" content="#fad961" />
        <meta
          property="og:title"
          content={metaTitle ?? defaultTitle}
          key="og-title"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={description ?? defaultDescription}
          key="og-description"
        />
        <meta
          property="og:image"
          content={image ?? defaultImage}
          key="og-image"
        />
        <meta property="og:url" content={url ?? defaultUrl} key="og-url" />
        <meta
          name="title"
          content={metaTitle ?? "Tross Capital"}
          key="title"
        />
        <meta
          name="description"
          content={description ?? defaultDescription}
          key="description"
        />
        <meta name="image" content={image ?? defaultImage} key="image" />
        <meta name="url" content={url ?? defaultUrl} key="url" />
        <meta name="twitter:card" content="summary" />
        <meta
          property="twitter:title"
          content={title ?? defaultTitle}
          key="twitter-title"
        />
        <meta
          property="twitter:description"
          content={description ?? defaultDescription}
          key="twitter-description"
        />
        <meta
          property="twitter:image:src"
          content={image ?? defaultImage}
          key="twitter-image"
        />
        <meta
          property="twitter:site"
          content="Progressive App Store"
          key="twitter-site"
        />
        <meta
          property="twitter:image:height"
          content="1200"
          key="twitter-height"
        />
        <meta
          property="twitter:image:width"
          content="1200"
          key="twitter-width"
        />
    </Head>
    <header>
      <MainNav />
    </header>
    <div className="body main-b">
    {children}
    </div>
    <footer className="footer">
      <div>
      <i>Tross Capital LLC</i>
      </div>
    </footer>
  </>
  )
}

export default Layout

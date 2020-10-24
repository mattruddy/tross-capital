import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.css"
import "../styles/animations/index.css"
import { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

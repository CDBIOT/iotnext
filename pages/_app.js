import '../styles/globals.css'
import '../styles/Home.module.css'
import MainContainer from '../components/MainContainer'

export default function App({ Component, pageProps }) {
  return (
    <MainContainer>
    <Component {...pageProps} />
    </MainContainer>
  )
}

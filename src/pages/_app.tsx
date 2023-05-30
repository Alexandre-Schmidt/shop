import { globalStyles } from "@/styles/global"
import { AppProps } from "next/app"

import Image from "next/image"
import logoImg from "../assets/logo.svg"

import { Container, Header } from "../styles/pages/app"

globalStyles() //fica fora para não renderizando toda vez, pq não muda

export default function App({ Component, pageProps }: AppProps){
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}

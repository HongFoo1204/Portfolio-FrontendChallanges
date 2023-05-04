import { Container } from '@chakra-ui/react'
import Navbar from './Navbar'
import type { ReactNode } from 'react'

export default function Layout(props: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <Container maxW="container.lg">
        <main>{props.children}</main>
      </Container>
    </>
  )
}

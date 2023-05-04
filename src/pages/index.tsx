import { Box, HStack, Heading, VStack } from '@chakra-ui/react'
import Spline from '@splinetool/react-spline'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <HStack>
      <VStack w="50%" alignItems="flex-start">
        <Heading>Hi 👋,</Heading>
        <Heading display="flex" flexDirection="row">
          I am{' '}
          <Heading
            ml="2.5"
            bgGradient="linear(to-r, #13B0F5, #E70FAA)"
            bgClip="text"
          >
            Hong Zee
          </Heading>
        </Heading>
        <Heading>I build things for web</Heading>
      </VStack>
      <Box w="50%" height="800px">
        <Spline scene="https://prod.spline.design/6ZeBl64Z6UpMXEOx/scene.splinecode" />
      </Box>
    </HStack>
  )
}

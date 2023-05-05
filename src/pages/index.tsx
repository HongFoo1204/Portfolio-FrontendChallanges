import { Box, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import Spline from '@splinetool/react-spline'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HStack>
        <VStack w="50%" alignItems="flex-start">
          <Heading>Hi 👋,</Heading>
          <Heading display="flex" flexDirection="row">
            I am{' '}
            <Text
              ml="2.5"
              bgGradient="linear(to-r, #13B0F5, #E70FAA)"
              bgClip="text"
            >
              Hong Zee
            </Text>
          </Heading>
          <Heading>I build things for web</Heading>
        </VStack>
        <Box w="50%" height="800px">
          <Spline scene="https://prod.spline.design/CW6VddQuRlUr8OnH/scene.splinecode" />
        </Box>
      </HStack>
      <Heading textAlign="center">My Tech Stack</Heading>
      <Text textAlign="center">
        Technologies I’ve been working with recently
      </Text>
    </>
  )
}

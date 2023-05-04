import { Box } from '@chakra-ui/react'
import Spline from '@splinetool/react-spline'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Box w="50%" h="750px" position="absolute" right="0">
      <Spline scene="https://prod.spline.design/6ZeBl64Z6UpMXEOx/scene.splinecode" />
    </Box>
  )
}

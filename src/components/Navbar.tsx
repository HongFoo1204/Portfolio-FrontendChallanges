import NextLink from 'next/link'
import { Button, Container, HStack, IconButton, Image } from '@chakra-ui/react'
import { navLinks, navSocialMediaLinks } from '@/utils/navLinks'

export default function Navbar() {
  return (
    <Container
      maxW="container.lg"
      position="sticky"
      top="40px"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Image
        borderRadius="full"
        boxSize="100px"
        src="/vercel.svg"
        alt="nav-logo"
      />
      <HStack spacing="50px">
        <HStack spacing="50px">
          {navLinks.map((link) => {
            return (
              <Button
                variant="link"
                as={NextLink}
                key={`nav-link-${link.name}`}
                href={link.url}
              >
                {link.name}
              </Button>
            )
          })}
        </HStack>
        <HStack spacing="20px">
          {navSocialMediaLinks.map((link) => (
            <IconButton
              variant="unstyled"
              as={NextLink}
              key={`nav-social-media-${link.name}`}
              aria-label={link.name}
              icon={link.icon}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            />
          ))}
        </HStack>
      </HStack>
    </Container>
  )
}

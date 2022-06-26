import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Image,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = [
  {
    text: 'Top',
    url: '#',
  },
  {
    text: 'About',
    url: 'https://www.spero61.me',
  },
  {
    text: 'Works',
    url: 'https://www.spero61.click/',
  },
  {
    text: 'Contact',
    url: 'https://ffts.spero61.sbs',
  },
];

const NavLink = ({ children, url }) => (
  <Link
    px={2}
    py={1}
    rounded="md"
    color="text06"
    fontSize={['10px', '11px', '12px']}
    _hover={{
      textDecoration: 'none',
      color: 'text05',
    }}
    href={url}
  >
    {children}
  </Link>
);

const MobileLinks = () => (
  <Flex pb={4} display={{ md: 'none' }} minHeight="30vh">
    <Flex as="nav" spacing={5} mt={3} direction="column">
      {Links.map((link) => (
        <NavLink key={`${link.text}-navLink`} url={link.url}>
          <Text
            fontSize="20px"
            fontWeight={700}
            mb={10}
            fontFamily="navText"
          >
            {link.text}
          </Text>
        </NavLink>
      ))}
    </Flex>
  </Flex>
);

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      // bgGradient="linear(to-l, pink.300, yellow.400, pink.200)"
      position="fixed"
      w="100%"
      top="0px"
      sx={{ background: 'transparent', backdropFilter: 'blur(9px)' }}
      px={5}
    >
      <Flex h={20} alignItems="center" justifyContent="space-between">
        <IconButton
          size="lg"
          color="text06"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          sx={{ background: 'transparent' }}
        />
        <Flex spacing={6} alignItems="center">
          {isOpen ? <Image src="../assets/images/logo.png" w="20px" h="20px" /> : null}
          <Flex
            as="nav"
            spacing={6}
            display={{ base: 'none', md: 'flex' }}
            // justifyContent="space-between"
          >
            {Links.map((link) => (
              <NavLink key={`${link.text}-navLink`} url={link.url}>
                <Text
                  mt={7}
                  mx={10}
                  fontSize={['15px', '15px', '15px']}
                  fontWeight={700}
                  fontFamily="navText"
                  mb={10}
                >
                  {link.text}
                </Text>
              </NavLink>
            ))}
          </Flex>
        </Flex>
      </Flex>
      {isOpen ? <MobileLinks /> : null}
    </Box>
  );
}

export default Navbar;

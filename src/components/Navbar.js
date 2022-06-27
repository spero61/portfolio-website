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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Links = [
  {
    text: 'Top',
    url: '/',
  },
  {
    text: 'Works',
    url: 'https://www.spero61.click/',
  },
  {
    text: 'About',
    url: 'https://www.spero61.me',
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
    <Flex as="nav" direction="column" mt={1}>
      {Links.map((link) => (
        <NavLink key={`${link.text}-navLink`} url={link.url}>
          <Text
            className="navbar-text"
            fontSize="2rem"
            fontWeight={700}
            color="text00"
            fontFamily="navText"
            mt={5}
            mb={3}
            ml={2}
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
      bg="bgColor"
      // bgGradient="linear(to-b, pink.300, yellow.200)"
      position="fixed"
      w="98%"
      top="0px"
      sx={{ backdropFilter: 'blur(9px)' }}
      px={5}
      py={1}
    >
      <Flex h={20} alignItems="center">

        {/* mobile only start */}
        <IconButton
          className="navbar-hamburger"
          position="absolute"
          left="18px"
          display={{ md: 'none' }}
          size="lg"
          color="text06"
          icon={isOpen ? <CloseIcon boxSize="2em" /> : <HamburgerIcon boxSize="2.5em" />}
          aria-label="Open Menu"
          onClick={isOpen ? onClose : onOpen}
          sx={{ background: 'transparent' }}
          _hover={{ background: 'transparent' }} // disable inherit "button" feature on hover
        />
        <Link href="/">
          <Image
            className="navbar-logo"
            src="../assets/images/logo.png"
            w="75px"
            h="30px"
            position="absolute"
            top="12px"
            right="20px"
            ml={2}
            display={{ md: 'none' }}
          />
        </Link>
        {/* mobile only end */}

        <Link href="/">
          <Image
            className="navbar-logo"
            src="../assets/images/logo.png"
            w={['75px', '75px', '75px', '90px', '95px', '100px']}
            h={['30px', '30px', '30px', '36px', '38px', '40px']}
            ml={3}
            display={{ base: 'none', md: 'flex' }}
          />
        </Link>
        <Spacer />
        {Links.map((link) => (
          <NavLink key={`${link.text}-navLink`} url={link.url}>
            <Text
              className="navbar-text"
              fontSize={['12px', '12px', '14px', '15px', '16px', '18px']}
              fontWeight={500}
              fontFamily="navText"
              display={{ base: 'none', md: 'flex' }}
              mx={18}
              color="text00"
            >
              {link.text}
            </Text>
          </NavLink>
        ))}
        <Box p={2} borderRadius="full" display={{ base: 'none', md: 'flex' }}>
          <Link href="https://github.com/spero61/" isExternal>
            <FontAwesomeIcon className="github-icon" icon={faGithub} color="#97B4BD" size="2xl" />
          </Link>
        </Box>
        <Box mr={7} />
      </Flex>
      {isOpen ? <MobileLinks /> : null}
    </Box>
  );
}

export default Navbar;

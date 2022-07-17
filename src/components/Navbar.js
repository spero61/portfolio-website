import {
  Box, Flex, Link, IconButton, useDisclosure, Image, Spacer, Text,
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
    text: 'About',
    url: '#about',
  },
  {
    text: 'Works',
    url: '#works',
  },
  {
    text: 'Contact',
    url: 'mailto:yorusung@yahoo.co.jp',
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
  <Flex display={{ md: 'none' }}>
    <Flex as="nav" direction="column" mt={10}>
      {Links.map((link) => (
        <NavLink key={`${link.text}-navLink`} url={link.url}>
          <Text
            className="navbar-text"
            fontSize="1.2rem"
            fontWeight={700}
            color="text00"
            fontFamily="navText"
            mt={2}
            mb={3}
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
      position="fixed"
      w="98%"
      sx={{ backdropFilter: 'blur(9px)' }}
      px={4}
      pt={1}
    >
      <Flex alignItems="center">
        {/* mobile only start */}
        <IconButton
          className="navbar-hamburger"
          position="absolute"
          top="10px"
          left="15px"
          display={{ md: 'none' }}
          size="sm"
          color="text06"
          icon={isOpen ? <CloseIcon boxSize="1.5em" /> : <HamburgerIcon boxSize="1.8em" />}
          aria-label="Open Menu"
          onClick={isOpen ? onClose : onOpen}
          sx={{ background: 'transparent' }}
          _hover={{ background: 'transparent' }} // disable inherit "button" feature on hover
        />
        <Link href="/">
          <Image
            className="navbar-logo"
            src="../assets/images/logo.svg"
            w="75px"
            h="30px"
            position="absolute"
            top="9px"
            right="12px"
            display={{ md: 'none' }}
          />
        </Link>
        {/* mobile only end */}
        <Link href="/">
          <Image
            className="navbar-logo"
            src="../assets/images/logo.svg"
            w={['75px', '75px', '75px', '90px', '95px', '100px']}
            h={['30px', '30px', '30px', '36px', '38px', '40px']}
            display={{ base: 'none', md: 'flex' }}
          />
        </Link>
        <Spacer />
        {Links.map((link) => (
          <NavLink key={`${link.text}-navLink`} url={link.url}>
            <Text
              className="navbar-text"
              fontSize={['11px', '12px', '15px']}
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
        <Box mr={0} />
      </Flex>
      {isOpen ? <MobileLinks /> : null}
    </Box>
  );
}

export default Navbar;

import { Flex, Stack } from '@chakra-ui/react';
import Navbar from './Navbar';
import Hero from './Hero';
import Works from './Works';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

// this option applies to chrome or safari
const customSlideSx = {
  '&::-webkit-scrollbar': { color: 'text05', width: '6px', backgroundColor: 'bgRoot' },
  '&::-webkit-scrollbar-thumb': { borderRadius: '5px', backgroundColor: 'text06' },
  '::-webkit-scrollbar-thumb:hover': { background: 'text01' },
};

function Home() {
  return (
    <Flex h="100vh" bg="bgRoot" direction="column">
      <Navbar />
      <Stack py="70px" alignItems="center" overflowY="scroll" overflowX="hidden" sx={customSlideSx} spacing={10}>
        <Hero />
        <About />
        <Works />
        <Contact />
        <Footer />
      </Stack>
    </Flex>
  );
}

export default Home;

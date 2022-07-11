import { Flex, Stack } from '@chakra-ui/react';
import { motion, useViewportScroll } from 'framer-motion';
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

// framer motion variants

const fadeInUp = {
  initial: {
    x: 10,
    opacity: 0.2,
  },

  animate: {
    x: 0,
    opacity: 1,

    transition: {
      duration: 0.7,
      // delay: 0.2,
      ease: 'easeInOut',
    },
  },
};

function Home() {
  const { scrollYProgress } = useViewportScroll();

  return (
    <Flex h="100vh" bg="bgRoot" direction="column">
      <Navbar />
      <Stack py="70px" alignItems="center" overflowY="scroll" overflowX="hidden" sx={customSlideSx} spacing={10}>
        <motion.div
          initial={{ x: 20, opacity: 0.1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, default: { duration: 0.75 } }}
        >
          <Hero />
        </motion.div>
        <About />
        <Works />
        {/* <Contact /> */}
        <Footer />
      </Stack>
    </Flex>
  );
}

export default Home;

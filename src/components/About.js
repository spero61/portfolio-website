import {
  Text, Heading, Spacer, Stack, Flex, Center,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import SpinCube from './SpinCube';

const onScrollView = {
  hidden: { x: -150, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    rotate: [0, 5, 0],
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

function About() {
  return (
    <Stack my={5}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        transition={{ staggerChildren: 0.4 }}
        variants={onScrollView}
      >
        <motion.div className="about-container" variants={onScrollView}>
          <Flex h="400px" w="85vw" maxWidth="800px" bg="bgBox" borderRadius="40px">
            <Flex direction="column" ml={10} px={10}>
              <Spacer />
              <Heading textAlign="center" size={['xl', 'xl', '2xl']} color="#C1DBE3">Tech Stack</Heading>
              <br />
              <Text fontSize={['1.2rem', '1.6rem', '1.8rem']} textAlign="center" color="text00">JavaScript</Text>
              <Text fontSize={['1.2rem', '1.6rem', '1.8rem']} textAlign="center" color="text01">React, Next.js</Text>
              <Text fontSize={['1.2rem', '1.6rem', '1.8rem']} textAlign="center" color="text02">Python, Flask</Text>
              <Text fontSize={['1.2rem', '1.6rem', '1.8rem']} textAlign="center" color="text03">ChakraUI, TailwindCSS</Text>
              <Text fontSize={['1.2rem', '1.6rem', '1.8rem']} textAlign="center" color="text04">Framer Motion</Text>
              <Spacer />
            </Flex>
            <Spacer />
            <Flex display={{ base: 'none', md: 'flex' }}>
              <SpinCube />
            </Flex>
          </Flex>
        </motion.div>
      </motion.div>
    </Stack>
  );
}

export default About;

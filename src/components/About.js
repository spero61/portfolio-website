import {
  Text, Heading, Spacer, Stack, Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const dummyText = 'This is About section';
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
          <Flex h="400px" w="85vw" maxWidth="800px" direction="column" bg="bgBox" borderRadius="40px">
            <Spacer />
            <Heading textAlign="center" size="3xl" color="#C1DBE3">About</Heading>
            <br />
            <Text fontSize="2rem" textAlign="center" color="text00">{`00${dummyText}`}</Text>
            <Text fontSize="2rem" textAlign="center" color="text01">{`01${dummyText}`}</Text>
            <Text fontSize="2rem" textAlign="center" color="text02">{`02${dummyText}`}</Text>
            <Spacer />
          </Flex>
        </motion.div>
      </motion.div>
      <Spacer />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        transition={{ staggerChildren: 0.4 }}
        variants={onScrollView}
      >
        <motion.div className="about-container" variants={onScrollView}>
          <Flex h="400px" w="85vw" maxWidth="800px" direction="column" bg="bgBox" borderRadius="40px">
            <Spacer />
            <Heading textAlign="center" size="3xl" color="#C1DBE3">About</Heading>
            <br />
            <Text fontSize="2rem" textAlign="center" color="text00">{`00${dummyText}`}</Text>
            <Text fontSize="2rem" textAlign="center" color="text01">{`01${dummyText}`}</Text>
            <Text fontSize="2rem" textAlign="center" color="text02">{`02${dummyText}`}</Text>
            <Spacer />
          </Flex>
        </motion.div>
      </motion.div>
      <Spacer />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        transition={{ staggerChildren: 0.4 }}
        variants={onScrollView}
      >
        <motion.div className="about-container" variants={onScrollView}>
          <Flex h="400px" w="85vw" maxWidth="800px" direction="column" bg="bgBox" borderRadius="40px">
            <Spacer />
            <Heading textAlign="center" size="3xl" color="#C1DBE3">About</Heading>
            <br />
            <Text fontSize="2rem" textAlign="center" color="text00">{`00${dummyText}`}</Text>
            <Text fontSize="2rem" textAlign="center" color="text01">{`01${dummyText}`}</Text>
            <Text fontSize="2rem" textAlign="center" color="text02">{`02${dummyText}`}</Text>
            <Spacer />
          </Flex>
        </motion.div>
      </motion.div>
    </Stack>
  );
}

export default About;

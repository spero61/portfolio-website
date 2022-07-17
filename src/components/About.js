import {
  Text, Heading, Spacer, Stack, Flex, Center,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import SpinCube from './SpinCube';
import ModalButton from './ModalButton';

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
  const aboutText = 'Java, Springを学ぶIT教育を受けてからWEBエンジニアを目指し、プログラミングに必要な基礎を固めるためコンピューター科学(CS)の勉強いたしました。';
  const cs50Text = 'その一環としてCS50というオープンコースを修了いたしました。コースの内容に関しましてはCS50ホームページのSyllabusにてご確認いただければ幸いです。';
  const cs50Link = 'https://cs50.harvard.edu/x/2022/syllabus/';
  const linkButtonText = 'Check CS50 Syllabus';

  return (
    <Stack my={5} id="about">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        transition={{ staggerChildren: 0.4 }}
        variants={onScrollView}
      >
        <motion.div className="about-container" variants={onScrollView}>
          <Flex h={['340px', '370px', '400px']} w="85vw" maxWidth="800px" bg="bgBox" borderRadius="40px">
            <Flex direction="column" ml={['4', '9', '10']} px={10}>
              <Spacer />
              <Heading textAlign="center" size={['xl', 'xl', '2xl']} color="#C1DBE3">Tech Stack</Heading>
              <Text mt={['2', '3', '4']} fontSize={['1.2rem', '1.6rem', '1.6rem']} textAlign="center" color="text04">JavaScript</Text>
              <Text fontSize={['1.2rem', '1.6rem', '1.6rem']} textAlign="center" color="text01">React, Next.js</Text>
              <Text fontSize={['1.2rem', '1.6rem', '1.6rem']} textAlign="center" color="text02">Python, Flask</Text>
              <Text fontSize={['1.2rem', '1.6rem', '1.6rem']} textAlign="center" color="text03">ChakraUI, TailwindCSS</Text>
              <Center mt={3}>
                <ModalButton
                  text={aboutText}
                  text2={cs50Text}
                  url={cs50Link}
                  linkButtonText={linkButtonText}
                />
              </Center>
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

import {
  Text, Heading, Spacer, Stack, Flex, Box, Center, Image, Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ApplicantSvg from './motion/ApplicantSvg';

// note: hero section would be simplified
// after getting an offer, hopefully,
// so as to remove 'applicant' svg

// Chakra-ui responsive display attribute
// display={{ md: 'none' }} // mobile only (max-width: 767px)
// display={{ base: 'none', md: 'flex' }} // desktop only (min-width: 768px)

const loaderVariants = {
  animationOne: {
    x: [-30, 30],
    y: [0, -40],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 1,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut',
      },
    },
  },
};

function Hero() {
  return (
    <Stack mt={['50px', '100px', '45px', '100px', '95px', '170px']} mb={5}>
      <Flex h="400px" w="85vw" maxWidth="950px" mb={['50px', '100px', '200px']}>
        <Box h="100%" w={['100%', '95%', '90%', '85%', '80%', '80%']} p={3}>
          <Box>
            <Text fontSize={['1rem', '1.3rem', '1.2rem']} textAlign="left" color="text01">こんにちは、私は</Text>
            <Flex>
              <Flex direction="column" mt={[3, 4, 5]}>
                <Heading textAlign="left" fontSize={['2rem', '3rem', '2.2rem', '3rem', '3.8rem', '3.5rem']} color="text05">Yeolwoo Sung</Heading>
                <Flex>
                  <Heading textAlign="left" fontSize={['2rem', '3rem', '2.2rem', '3rem', '3.8rem', '3.5rem']} color="text06" mt={[5, 6, 7, 8, 8, 8]} lineHeight="1">Web developer</Heading>
                  {/* mobile only applicant-svg */}
                  <Image
                    display={{ md: 'none' }}
                    ml={2}
                    className="applicant-svg"
                    w="25%"
                    src="../assets/images/applicant.svg"
                    opacity={0.95}
                    alt="handwriting applicant svg"
                  />
                </Flex>
              </Flex>

              {/* desktop & tablet applicant-svg: start */}
              <motion.div
                initial={{ y: '-50vh' }}
                animate={{ x: [7, -5, 0], y: 0, rotate: [-10, 8, 0] }}
                transition={{
                  y: {
                    type: 'spring', stiffness: 120, damping: 9, mass: 1.9,
                  },
                  default: { duration: 1.5 },
                  delay: 0.3,
                }}
                // whileHover={{ scale: 1.15, rotate: [7, -7], transition: { duration: 0.15 } }}
                whileHover={{
                  x: [5, -5, 5],
                  rotate: [-5, 5, -5],
                  transition: { duration: 2, repeat: 7 },
                }}
              >
                <Center display={{ base: 'none', md: 'flex' }} mt={[null, null, 3, 4, 5, 8]}>
                  {/* applicant-svg with spring motion */}
                  <ApplicantSvg />
                </Center>
              </motion.div>
              {/* desktop & tablet applicant-svg: end */}

            </Flex>
            <Flex mt={[5, 7, 7]}>
              <Text fontSize={['0.9rem', '1.1rem', '1.2rem']} textAlign="left" color="text06">Webエンジニアをめざしております。</Text>
            </Flex>
          </Box>
          <Box py={3} />
          <Link href="https://github.com/spero61" _hover={{ textDecoration: 'none' }} isExternal>
            <Center w="110px" h="35px" border="1px solid" borderColor="text00" _hover={{ bg: 'bgBox', filter: 'brightness(1.2)' }}>
              <Text fontSize="0.9rem" textAlign="center" color="text01" mb={1}>GitHub page</Text>
            </Center>
          </Link>
        </Box>

        {/* logo symbol is only displayed on desktop screen */}
        <Center w="250px" h="300px" display={{ base: 'none', md: 'flex' }}>
          <Image
            className="logo-symbol"
            w={[null, null, '85%', '90%', '95%', '100%']}
            src="../assets/images/logo-symbol.svg"
            transform="rotate(3deg)"
            opacity={0.8}
            alt="logo symbol on hero"
          />
        </Center>
      </Flex>
    </Stack>
  );
}

export default Hero;

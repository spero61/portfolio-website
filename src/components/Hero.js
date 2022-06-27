import {
  Text, Heading, Spacer, Stack, Flex, Box, Center, Image, Link,
} from '@chakra-ui/react';

// note: hero section would be simplified
// after getting an offer, hopefully,
// so as to remove 'applicant' svg

// Chakra-ui responsive display attribute
// display={{ md: 'none' }} // mobile only
// display={{ base: 'none', md: 'flex' }} // desktop only

function Hero() {
  return (
    <Stack mt={['50px', '100px', '45px', '100px', '120px', '170px']} mb={5}>
      <Flex h="400px" w="85vw" maxWidth="950px" mb={['50px', '100px', '200px']}>
        <Box h="100%" w={['100%', '95%', '90%', '85%', '80%', '80%']} p={3}>
          <Box>
            <Text fontSize={['1.6rem', '1.7rem', '1.8rem']} textAlign="left" color="text01">こんにちは、私は</Text>
            <Flex>
              <Flex direction="column" mt={[5, 5, 6]}>
                <Heading textAlign="left" fontSize={['3rem', '3.2rem', '3.5rem', '3.7rem', '5rem', '6rem']} color="text05">Yeolwoo Sung</Heading>
                <Flex>
                  <Heading textAlign="left" fontSize={['3rem', '3.2rem', '3.5rem', '3.7rem', '5rem', '6rem']} color="text06" mt={[6, 9, 12]} lineHeight="1.2">Web developer</Heading>
                  {/* desktop only applicant svg */}
                  <Image
                    display={{ md: 'none' }}
                    ml={3}
                    className="applicant-svg"
                    w="25%"
                    src="../assets/images/applicant.svg"
                    opacity={0.95}
                    alt="handwriting applicant svg"
                  />
                </Flex>
              </Flex>
              {/* mobile only applicant svg */}
              <Center display={{ base: 'none', md: 'flex' }}>
                <Image
                  className="applicant-svg"
                  w={['0%', '50%', '75%', '90%', '50%', '100%']}
                  src="../assets/images/applicant.svg"
                  opacity={0.95}
                  alt="handwriting applicant svg"
                />
              </Center>
            </Flex>
            <Flex mt={[8, 7, 10]}>
              <Text fontSize={['1.5rem', '1.8rem', '2rem']} textAlign="left" color="text06">Webエンジニアをめざしております。</Text>
            </Flex>
          </Box>
          <Box py={5} />
          <Link href="https://github.com/spero61/portfolio-website" _hover={{ textDecoration: 'none' }} isExternal>
            <Center w="115px" h="38px" border="1px solid" borderColor="text00" _hover={{ bg: 'bgBox', filter: 'brightness(1.2)' }}>
              <Text fontSize="1.5rem" textAlign="center" color="text01">view works</Text>
            </Center>
          </Link>
        </Box>

        {/* logo symbol is only displayed on desktop screen */}
        <Center w="250px" h="300px" display={{ base: 'none', md: 'flex' }}>
          <Image
            className="logo-symbol"
            w={['0%', '50%', '75%', '80%', '90%', '100%']}
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

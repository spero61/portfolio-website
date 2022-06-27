import {
  Text, Heading, Spacer, Stack, Flex,
} from '@chakra-ui/react';

const dummyText = 'This is Hero section';

function Hero() {
  return (
    <Stack my={5}>
      <Flex h="500px" w="85vw" direction="column" bg="bgBox" borderRadius="40px">
        <Spacer />
        <Heading textAlign="center" size="3xl" color="#C1DBE3">Hero</Heading>
        <br />
        <Text fontSize="2rem" textAlign="center" color="text00">{`00${dummyText}`}</Text>
        <Text fontSize="2rem" textAlign="center" color="text01">{`01${dummyText}`}</Text>
        <Text fontSize="2rem" textAlign="center" color="text02">{`02${dummyText}`}</Text>
        <Spacer />
      </Flex>
    </Stack>
  );
}

export default Hero;

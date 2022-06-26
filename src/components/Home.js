import {
  Center, Flex, Text, Heading, Spacer,
} from '@chakra-ui/react';

function Home() {
  return (
    <Center h="100vh" bg="#123556">
      <Flex h="300px" w="300px" bg="#F6C7A2" direction="column">
        <Spacer />
        <Heading textAlign="center" size="3xl" color="teal.700">heading</Heading>
        <Spacer />
        <Text fontSize="3rem" textAlign="center">テキスト</Text>
        <Spacer />
      </Flex>
    </Center>
  );
}

export default Home;

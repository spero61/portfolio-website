import {
  Center, Flex, Text, Heading, Spacer, Stack,
} from '@chakra-ui/react';
import Navbar from './Navbar';
import Dummy from './Dummy';

function Home() {
  return (
    <Flex h="100vh" bg="bgRoot" direction="column" overflow="scroll">
      <Navbar />
      <Stack alignItems="center">
        <Dummy id="section1" />
        <Dummy id="section2" />
        <Dummy id="section3" />
        <Dummy id="section4" />
        <Dummy id="section5" />
        <Dummy id="section6" />
        <Dummy id="section7" />
      </Stack>
    </Flex>
  );
}

export default Home;

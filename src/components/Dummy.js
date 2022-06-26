import {
  Text, Heading, Spacer, Stack, Flex,
} from '@chakra-ui/react';

const dummyText = '「トップガン」興行収入10億ドル迫る';

function Dummy() {
  return (
    <Stack my={5}>
      <Flex h="450px" w="450px" direction="column" bg="bgBox" borderRadius="40px">
        <Spacer />
        <Heading textAlign="center" size="3xl" color="#C1DBE3">heading</Heading>
        <br />
        <Text fontSize="2rem" textAlign="center" color="text00">{`00${dummyText}`}</Text>
        <Text fontSize="2rem" textAlign="center" color="text01">{`01${dummyText}`}</Text>
        <Text fontSize="2rem" textAlign="center" color="text02">{`02${dummyText}`}</Text>
        <Text fontSize="2rem" textAlign="center" color="text03">{`03${dummyText}`}</Text>
        <Text fontSize="2rem" textAlign="center" color="text04">{`04${dummyText}`}</Text>
        <Text fontSize="2rem" textAlign="center" color="text05">{`05${dummyText}`}</Text>
        <Text fontSize="2rem" textAlign="center" color="text06">{`06${dummyText}`}</Text>
        <Text fontSize="2rem" textAlign="center" color="text07">{`07${dummyText}`}</Text>
        <Spacer />
      </Flex>
    </Stack>
  );
}

export default Dummy;

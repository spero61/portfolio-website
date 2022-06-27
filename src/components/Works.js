import {
  Text, Heading, Spacer, Stack, Flex, SimpleGrid, Box, Image, Center,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const dummyText = 'This is Works section';

function Works() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Box w="85vw" maxWidth="1000px">
      <SimpleGrid minChildWidth="300px" spacingX="35px" spacingY="35px">
        <motion.div
          className="block"
          onClick={() => setIsActive(!isActive)}
          animate={{
            rotate: isActive ? 180 : 0,
            scale: 1.2,
          }}
          transition={{ duration: 1 }}
        >
          <Center bg="bgBox" height="300px" borderRadius="10px" flexDirection="column">
            <Box h="90%" w="90%" p={5} bgImage="../assets/images/chatapp01.png" borderRadius="15px" />
          </Center>
        </motion.div>
        <motion.div
          animate={{ rotate: [0, 90, 180, 270], x: [0, 300, 0, -300, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <Box bg="text01" height="300px" borderRadius="10px" />
        </motion.div>
        <Box bg="bgBox" height="300px" borderRadius="10px" />
        <Box bg="bgBox" height="300px" borderRadius="10px" />
        <Box bg="bgBox" width="600px" height="300px" borderRadius="10px" />
        <Box bg="bgBox" height="300px" borderRadius="10px" />
        <Box bg="bgBox" width="600px" height="300px" borderRadius="10px" />
        <Box bg="bgBox" height="300px" borderRadius="10px" />
        <Box bg="bgBox" height="300px" borderRadius="10px" />
      </SimpleGrid>
    </Box>
  );
}

export default Works;

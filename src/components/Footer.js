import { Text, Center } from '@chakra-ui/react';

const text = '© 2022 Design & Developed by Sung';

function Footer() {
  return (
    <Center>
      <Text fontSize="1rem" color="text06">{text}</Text>
    </Center>
  );
}

export default Footer;

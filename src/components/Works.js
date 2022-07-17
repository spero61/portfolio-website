import {
  Text, Heading, Spacer, Stack, Flex, SimpleGrid, Box, Image, Center, Button,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import worksData from './data/works.json';

const onScrollView = {
  hidden: { x: -150, opacity: 0 },
  hiddenImage: { y: -50, opacity: 0 },
  bouncingImage: {
    y: [50, -25, 0],
    opacity: 1,
    rotate: [15, 10, 15],
    transition: {
      type: 'spring',
      bounce: 1,
      duration: 0.7,
    },
  },
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

const renderPortfolio = (portfolio) => (
  <>
    {portfolio.map((elem, index) => (
      <Box
        as={motion.div}
        bg="bgBox"
        height={['200px', '230px', '280px']}
        borderRadius="10px"
        key={`${index}${elem.title}`}
        className="work-content"
      >
        <Flex
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ staggerChildren: 0.2 }}
          alignItems="end"
        >
          <Image
            w={['80px', '110px', '140px']}
            h={['150px', '200px', '250px']}
            ml={[2, 7, 7]}
            mb={[3, 4, 4]}
            borderRadius={7}
            as={motion.img}
            src={`${process.env.PUBLIC_URL}${elem.cover}`}
            alt={`${elem.title}-image`}
            initial="hiddenImage"
            whileInView="bouncingImage"
            viewport={{ once: true, amount: 0.8 }}
            variants={onScrollView}
          />
          <Spacer />
          <Flex
            as={motion.div}
            mr={5}
            initial="hidden"
            whileInView="visible"
            direction="column"
            viewport={{ once: true, amount: 0.7 }}
            transition={{ staggerChildren: 0.2 }}
            alignItems="end"
          >
            <Text mt={1} fontSize={['1.2rem', '1.4rem', '2rem']} as={motion.p} color="text05" fontWeight={700} variants={onScrollView}>
              {elem.title}
            </Text>
            <Text mb={1} as={motion.p} fontSize={['0.8rem', '0.9rem', '1rem']} color="text02" variants={onScrollView}>
              {elem.description}
            </Text>
            <Button
              as={motion.button}
              my={1}
              bg="green.100"
              fontSize={['0.8rem', '0.9rem', '1rem']}
              type="button"
              onClick={() => window.open(elem.url)}
              variants={onScrollView}
              _hover={{
                background: 'green.300',
                color: 'gray.700',
              }}
            >
              View
            </Button>
          </Flex>
        </Flex>
      </Box>
    ))}
  </>
);

function Works() {
  return (
    <Box id="works" w="85vw" maxWidth="1200px">
      <SimpleGrid
        minChildWidth={['300px', '300px', '450px']}
        spacingX="40px"
        spacingY={['50px', '60px', '80px']}
        mt={10}
      >
        {renderPortfolio(worksData.portfolio)}
      </SimpleGrid>
    </Box>
  );
}

export default Works;

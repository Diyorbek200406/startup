import { Box, Button, Card, CardBody, Input, Stack } from '@chakra-ui/react';
import SectionTitle from '../section-title/section-title';
import { color } from 'framer-motion';

const NewsLetter = () => {
  return (
    <Card mt={10}>
      <CardBody
        minH={'50vh'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Stack spacing={3}>
          <SectionTitle
            textAlign={'center'}
            maxW={'container.sm'}
            title="Subscribe our Newsletter &"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, atque suscipit? Ducimus itaque vitae iste nemo maxime dicta repellendus! Et."
          />
          <Box pos={'relative'}>
            <Input
              h={14}
              w={'full'}
              bg={'white'}
              color={'gray.900'}
              placeholder="Your Email..."
              _placeholder={{ color: 'gray.500' }}
            />
            <Button
              pos={'absolute'}
              zIndex={999}
              right={2}
              top={2}
              colorScheme="facebook"
            >
              Submit
            </Button>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default NewsLetter;

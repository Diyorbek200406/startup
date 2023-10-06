import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import SectionTitle from '../section-title/section-title';
import { FaUserGraduate } from 'react-icons/fa';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import Link from 'next/link';

const Instructors = () => {
  return (
    <>
      <SectionTitle
        title="Learn from the best instructors"
        subtitle="All our mentor with high experienced"
      />

      <Grid
        gap={3}
        gridTemplateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          xl: 'repeat(4, 1fr)',
        }}
        mt={5}
      >
        {data.map((e, i) => (
          <GridItem key={i}>
            <Stack spacing={3}>
              <Image
                src={e.avatar}
                alt={e.firstName}
                borderRadius={'lg'}
                h={'330px'}
                objectFit={'cover'}
              />

              <Heading fontSize={'xl'}>
                {e.firstName} {e.lastName}
              </Heading>

              <Text color={'gray.500'}>{e.job}</Text>

              <HStack opacity={'.6'}>
                <Flex align={'center'} gap={1}>
                  <Icon as={FaUserGraduate} />

                  <Text>{e.students} students</Text>
                </Flex>

                <Flex align={'center'} gap={1}>
                  <Icon as={AiOutlinePlayCircle} />

                  <Text>{e.courses} courses</Text>
                </Flex>
              </HStack>
            </Stack>
          </GridItem>
        ))}
      </Grid>

      <Text>
        Want to help people learn, grow and achieve more in life?{' '}
        <Box
          as={'span'}
          color={'teal'}
          _hover={{ textDecoration: 'underline' }}
        >
          <Link href="/become-instructor">Become an instructor</Link>
        </Box>
      </Text>
    </>
  );
};

export default Instructors;

const data = [
  {
    firstName: 'Samar',
    lastName: 'Badrddinov',
    job: 'Software Engineer',
    students: 230,
    courses: 20,
    avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
  },
  {
    firstName: 'Samar',
    lastName: 'Badrddinov',
    job: 'Software Engineer',
    students: 230,
    courses: 20,
    avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
  },
  {
    firstName: 'Samar',
    lastName: 'Badrddinov',
    job: 'Software Engineer',
    students: 230,
    courses: 20,
    avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
  },
  {
    firstName: 'Samar',
    lastName: 'Badrddinov',
    job: 'Software Engineer',
    students: 230,
    courses: 20,
    avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
  },
];

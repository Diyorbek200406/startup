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
import { useTranslation } from 'react-i18next';

const Instructors = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle
        title={t('instructor_title', { ns: 'home' })}
        subtitle={t('instructor_description', { ns: 'home' })}
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

      <Text textAlign={'center'}>
        {t('instructor_link_title', { ns: 'home' })}{' '}
        <Box
          as={'span'}
          color={'teal'}
          _hover={{ textDecoration: 'underline' }}
        >
          <Link href="/become-instructor">
            {t('instructor_link_router', { ns: 'home' })}
          </Link>
        </Box>
      </Text>
    </>
  );
};

export default Instructors;

const data = [
  {
    firstName: 'Diyorbek',
    lastName: 'Erkinov',
    job: 'Software Engineer',
    students: 230,
    courses: 20,
    avatar: 'https://picsum.photos/200',
  },
  {
    firstName: 'Diyorbek',
    lastName: 'Erkinov',
    job: 'Software Engineer',
    students: 230,
    courses: 20,
    avatar: 'https://picsum.photos/seed/picsum/200/300',
  },
  {
    firstName: 'Diyorbek',
    lastName: 'Erkinov',
    job: 'Software Engineer',
    students: 230,
    courses: 20,
    avatar: 'https://picsum.photos/200/300?grayscale',
  },
  {
    firstName: 'Diyorbek',
    lastName: 'Erkinov',
    job: 'Software Engineer',
    students: 230,
    courses: 20,
    avatar: 'https://picsum.photos/200/300/?blur',
  },
];

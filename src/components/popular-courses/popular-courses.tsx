import { CourseType } from '@/interfaces/course.interface';
import SectionTitle from '../section-title/section-title';
import Carousel from 'react-multi-carousel';
import {
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { courseCarousel } from '@/config/carusel';
import ReactStars from 'react-stars';
import { CiViewList } from 'react-icons/ci';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { SiGoogleanalytics } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

const PopularCourses = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle
        title={t('popular_courses_title', { ns: 'home' })}
        subtitle={t('popular_courses_description', { ns: 'home' })}
      />
      <Carousel
        responsive={courseCarousel}
        showDots={false}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite
      >
        {data.map((course, index) => {
          return (
            <Stack key={index} spacing={3} p={3} cursor={'pointer'}>
              <Image
                src={course.image}
                alt={course.title}
                objectFit={'cover'}
                w={'full'}
                h={'210px'}
                borderRadius={'lg'}
              />
              <HStack>
                <Text color={'#e59819'}>{course.reviewAvarage.toFixed(1)}</Text>

                <ReactStars
                  edit={false}
                  value={course.reviewAvarage}
                  color2="#e59819"
                />

                <Text opacity={'.8'}>({course.reviewCount})</Text>
              </HStack>

              <Heading fontSize={'xl'}>{course.title}</Heading>

              <HStack>
                <Flex align={'center'} gap={2}>
                  <Icon as={CiViewList} />
                  <Text>{course.lessonCount} Lesson</Text>
                </Flex>

                <Flex align={'center'} gap={2}>
                  <Icon as={AiOutlineClockCircle} />
                  <Text>{course.totalHour} Hour</Text>
                </Flex>

                <Flex align={'center'} gap={2}>
                  <Icon as={SiGoogleanalytics} />
                  <Text>{course.level}</Text>
                </Flex>
              </HStack>

              <Divider />

              <Flex justify={'space-between'} align={'center'}>
                <HStack justify={'space-between'} align={'center'}>
                  <Image
                    src={course.author.avatar}
                    alt={course.author.firstName}
                    w={50}
                    h={50}
                    borderRadius={'full'}
                  />
                  <Text>
                    {course.author.firstName} {course.author.lastName[0]}.
                  </Text>
                </HStack>
                <Text>
                  {course.price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </Text>
              </Flex>
            </Stack>
          );
        })}
      </Carousel>
    </>
  );
};

export default PopularCourses;

const data: CourseType[] = [
  {
    image: 'https://media.graphassets.com/3gf746AKRbWNjB8OCoEB',
    title: 'JavaScript full course',
    lessonCount: 96,
    totalHour: 13.6,
    level: 'Beginner',
    price: 20,
    reviewAvarage: 4.5,
    reviewCount: 200,
    author: {
      firstName: 'Diyorbek',
      lastName: 'Erkinov',
      avatar: 'https://picsum.photos/200',
    },
  },
  {
    image: 'https://media.graphassets.com/54vR0DStGoFuZBVkFwWQ',
    title: 'VueJS full course',
    lessonCount: 30,
    totalHour: 10.6,
    level: 'Beginner',
    price: 20,
    reviewAvarage: 4.5,
    reviewCount: 250,
    author: {
      firstName: 'Diyorbek',
      lastName: 'Erkinov',
      avatar: 'https://picsum.photos/200',
    },
  },
  {
    image: 'https://media.graphassets.com/65rcPxsLT9ysJDisXF80',
    title: 'ReactJS full course',
    lessonCount: 70,
    totalHour: 19,
    level: 'Beginner',
    price: 20,
    reviewAvarage: 4.5,
    reviewCount: 150,
    author: {
      firstName: 'Diyorbek',
      lastName: 'Erkinov',
      avatar: 'https://picsum.photos/200',
    },
  },
  {
    image: 'https://media.graphassets.com/xactyo8TtyTIkAcMWvSm',
    title: 'VueX full course',
    lessonCount: 120,
    totalHour: 24.6,
    level: 'Beginner',
    price: 20,
    reviewAvarage: 5,
    reviewCount: 250,
    author: {
      firstName: 'Diyorbek',
      lastName: 'Erkinov',
      avatar: 'https://picsum.photos/200',
    },
  },
  {
    image: 'https://media.graphassets.com/Ql2hDpJhQsaBT3inNuZ4',
    title: 'Redux full course',
    lessonCount: 39,
    totalHour: 8.2,
    level: 'Beginner',
    price: 20,
    reviewAvarage: 4.9,
    reviewCount: 120,
    author: {
      firstName: 'Diyorbek',
      lastName: 'Erkinov',
      avatar: 'https://picsum.photos/200',
    },
  },
  {
    image: 'https://media.graphassets.com/mDcwhbguQpyM74jb18M5',
    title: 'NodeJS full course',
    lessonCount: 56,
    totalHour: 20.6,
    level: 'Beginner',
    price: 20,
    reviewAvarage: 5,
    reviewCount: 250,
    author: {
      firstName: 'Diyorbek',
      lastName: 'Erkinov',
      avatar: 'https://picsum.photos/200',
    },
  },
];

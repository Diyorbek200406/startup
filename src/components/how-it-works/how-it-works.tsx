import {
  FinishRightIcon,
  OnlineCourseIcon,
  OnlineLearningIcon,
  OnlineStudentIcon,
  RightLineIcon,
} from '@/icons';
import SectionTitle from '../section-title/section-title';
import {
  Box,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Fragment } from 'react';

const HowItWorks = () => {
  const backgroundColor = useColorModeValue('gray.200', 'gray.700');
  return (
    <>
      <SectionTitle
        textAlign={'center'}
        title="How It Works?"
        subtitle="10,000+ unique online course list designs"
      />
      <SimpleGrid mt={10} columns={5} spacing={10} alignItems={'center'}>
        {data.map((e, i) => {
          const odd = i % 2;
          return (
            <Fragment key={i}>
              {!odd ? (
                <Stack justify={'center'} align={'center'}>
                  <Flex
                    w={100}
                    h={100}
                    justify={'center'}
                    align={'center'}
                    backgroundColor={backgroundColor}
                    borderRadius={'full'}
                  >
                    {e.icon}
                  </Flex>
                  <Text textAlign={'center'}>{e.title}</Text>
                </Stack>
              ) : (
                <Stack justify={'center'}>{e.icon}</Stack>
              )}
            </Fragment>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default HowItWorks;

const data = [
  { title: 'Signup Platform', icon: <OnlineCourseIcon /> },
  { icon: <RightLineIcon /> },
  { title: 'Find Courses', icon: <OnlineLearningIcon /> },
  { icon: <FinishRightIcon /> },
  { title: 'Learn Relaxing', icon: <OnlineStudentIcon /> },
];

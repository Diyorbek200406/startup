import { PopularCoursesCardProps } from "./popular-courses-card.props";
import { Stack, Image, HStack, Text, Heading, Flex, Icon, Divider } from "@chakra-ui/react";
import ReactStars from "react-stars";
import { CiViewList } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";
import { SiGoogleanalytics } from "react-icons/si";
const PopularCoursesCard = ({ course, index }: PopularCoursesCardProps) => (
  <Stack key={index} spacing={3} p={3} cursor={"pointer"}>
    <Image src={course.image} alt={course.title} objectFit={"cover"} w={"full"} h={"210px"} borderRadius={"lg"} />
    <HStack>
      <Text color={"#e59819"}>{course.reviewAvarage.toFixed(1)}</Text>
      <ReactStars edit={false} value={course.reviewAvarage} color2="#e59819" />
      <Text opacity={".8"}>({course.reviewCount})</Text>
    </HStack>
    <Heading fontSize={"xl"}>{course.title}</Heading>
    <HStack>
      <Flex align={"center"} gap={2}>
        <Icon as={CiViewList} /> <Text>{course.lessonCount} Lesson</Text>
      </Flex>
      <Flex align={"center"} gap={2}>
        <Icon as={AiOutlineClockCircle} /> <Text>{course.totalHour} Hour</Text>
      </Flex>
      <Flex align={"center"} gap={2}>
        <Icon as={SiGoogleanalytics} /> <Text>{course.level}</Text>
      </Flex>
    </HStack>
    <Divider />
    <Flex justify={"space-between"} align={"center"}>
      <HStack justify={"space-between"} align={"center"}>
        <Image src={course.author.avatar} alt={course.author.firstName} w={50} h={50} borderRadius={"full"} />
        <Text>
          {course.author.firstName} {course.author.lastName[0]}.
        </Text>
      </HStack>
      <Text>{course.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</Text>
    </Flex>
  </Stack>
);

export default PopularCoursesCard;

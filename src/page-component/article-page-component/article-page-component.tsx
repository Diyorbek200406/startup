import { Avatar, Box, Card, CardBody, Divider, Grid, HStack, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { ArticlePageComponentProps } from "./article-page-component.props";
import Carousel from "react-multi-carousel";
import { testimonialsCarousel } from "@/config/carusel";
import { format } from "date-fns";
import { calculateEstimatedReadingTime } from "@/helpers/time.helper";
import { useTranslation } from "react-i18next";
import Link from "next/link";
const ArticlePageComponent = ({ articles }: ArticlePageComponentProps) => {
  const cardBackgroundColor = useColorModeValue("white", "gray.900");
  const { t } = useTranslation();
  return (
    <>
      <Card my={10}>
        <CardBody>
          <Carousel responsive={testimonialsCarousel} showDots={true}>
            {articles.map((article, index) => (
              <Box
                key={index}
                w={"full"}
                h={{ base: "40vh", lg: "60vh" }}
                backgroundImage={`url(${article.image.url})`}
                backgroundPosition={"center"}
                backgroundSize={"cover"}
                backgroundRepeat={"no-repeat"}
                pos={"relative"}
              >
                <Link href={`articles/${article.slug}`}>
                  <Box pos={"absolute"} top={0} left={0} right={0} bottom={0} bg={"rgba(0, 0, 0, .7)"} />
                  <Stack justify={"center"} spacing={3} w={{ base: "100%", lg: "70%" }} pl={{ base: 2, lg: 10 }} pos={"relative"} h={"full"}>
                    <Heading color={"white"}>{article.title}</Heading>
                    <Text color={"gray.200"}>{article.excerpt}</Text>
                    <HStack>
                      <Avatar src={`${article.author.avatar.url}`} />
                      <Text color={"white"}>{article.author.name}</Text>
                    </HStack>
                  </Stack>
                </Link>
              </Box>
            ))}
          </Carousel>
        </CardBody>
      </Card>
      <Grid gridTemplateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }} gap={4}>
        {articles.map((article, index) => {
          return (
            <Box key={index} w={"full"} bg={cardBackgroundColor} boxShadow={"2xl"} rounded={"md"} p={6} cursor={"pointer"}>
              <Link href={`articles/${article.slug}`}>
                <Image src={article.image.url} alt={article.title} w={"full"} h={"250px"} borderRadius={"lg"} mb={5} objectFit={"cover"} />
                <Stack>
                  <Heading fontSize={"2xl"} fontFamily={"body"}>
                    {article.title}
                  </Heading>
                  <Text color={"gray.500"}>{article.excerpt}</Text>
                </Stack>
                <Divider my={5} />
                <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                  <Avatar src={article.author.avatar.url} />

                  <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                    <Text fontWeight={600}>{article.author.name}</Text>

                    <Text color={"gray.500"}>
                      {format(new Date(article.createdAt), "dd MMM, yyyy")} {calculateEstimatedReadingTime(article.description.text)}
                      {t("read_article", { ns: "layout" })}
                    </Text>
                  </Stack>
                </Stack>
              </Link>
            </Box>
          );
        })}
      </Grid>
    </>
  );
};
export default ArticlePageComponent;

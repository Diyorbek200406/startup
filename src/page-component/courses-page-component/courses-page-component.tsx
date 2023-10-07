import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/section-title/section-title";
import { coursesFilter, courses } from "@/config/constants";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Input, Radio, RadioGroup, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { AllCoursesCard } from "@/components";
import ReactStars from "react-stars";
import { FilterItemProps } from "./courses-page-component.props";
const CoursesPageComponent = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle title={t("title", { ns: "courses" })} subtitle={t("description", { ns: "courses" })} />
      <Box pos={"relative"} mt={5}>
        <Input h={14} w={"full"} bg={"white"} color={"gray.900"} placeholder={t("search_input_placeholder", { ns: "courses" })} _placeholder={{ color: "gray.500" }} />
        <Button pos={"absolute"} zIndex={999} right={2} top={2} colorScheme="facebook">
          {t("search_input_btn", { ns: "courses" })}
        </Button>
      </Box>
      <Flex mt={5} gap={5} direction={{ base: "column", lg: "row" }}>
        <Box w={{ base: "100%", lg: "30%" }} height={"fit-content"} p={5} border={"1px"} borderRadius={"lg"} borderColor={useColorModeValue("gray.200", "gray.700")}>
          {coursesFilter.map((item, index) => (
            <FilterItem item={item} index={index} key={index} />
          ))}
        </Box>
        <Box w={{ base: "100%", lg: "70%" }}>
          {courses.map((item, index) => (
            <AllCoursesCard key={index} course={item} />
          ))}
        </Box>
      </Flex>
    </>
  );
};
export default CoursesPageComponent;
const FilterItem = ({ item, index }: { item: FilterItemProps; index: number }) => {
  const { t } = useTranslation();
  const renderFilterItem = () => (
    <>
      {item.categoryList.map((c, i) => (
        <Radio key={i} value={c.id} colorScheme="facebook">
          <Flex gap={2}>
            {item.id === "rating" && <ReactStars value={Number(c.id)} edit={false} color2="#e59819" />}
            {t(c.name, { ns: "courses" })}
          </Flex>
        </Radio>
      ))}
    </>
  );
  return (
    <Accordion allowToggle key={index} defaultIndex={index === 0 ? 0 : index}>
      <AccordionItem borderTop={"none"}>
        <AccordionButton>
          <Text fontSize={"xl"} flex="1" textAlign="left">
            {t(item.title, { ns: "courses" })}
          </Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <RadioGroup>
            <Stack>{renderFilterItem()}</Stack>
          </RadioGroup>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

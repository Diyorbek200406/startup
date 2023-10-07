import { Categories, Hero, HowItWorks, Instructors, NewsLetter, PopularCourses, Sponsor, Testimonials } from "@/components";
import { Stack } from "@chakra-ui/react";

const HomePageComponent = () => {
  return (
    <Stack spacing={10}>
      <Hero />
      <Categories />
      <PopularCourses />
      <HowItWorks />
      <Instructors />
      <Testimonials />
      <NewsLetter />
      <Sponsor />
    </Stack>
  );
};

export default HomePageComponent;

import { useTranslation } from "react-i18next";
import SectionTitle from "../section-title/section-title";
import Carousel from "react-multi-carousel";
import { courseCarousel } from "@/config/carusel";
import { courses } from "@/config/constants";
import PopularCoursesCard from "../popular-courses-card/popular-courses-card";
const PopularCourses = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle title={t("popular_courses_title", { ns: "home" })} subtitle={t("popular_courses_description", { ns: "home" })} />
      <Carousel responsive={courseCarousel} showDots={false} arrows={true} autoPlay={true} autoPlaySpeed={5000} infinite>
        {courses.map((course, index) => (
          <PopularCoursesCard key={index} course={course} index={index} />
        ))}
      </Carousel>
    </>
  );
};
export default PopularCourses;

import Carousel from 'react-multi-carousel';
import SectionTitle from '../section-title/section-title';
import { sponsorshipCarousel } from '@/config/carusel';
import { Box, Icon } from '@chakra-ui/react';
import { trustedCompeny } from '@/config/constants';

const Sponsor = () => {
  return (
    <>
      <SectionTitle
        title=""
        subtitle="Trusted by the world's best"
        textAlign={'center'}
        mb={5}
      />

      <Carousel
        responsive={sponsorshipCarousel}
        arrows={false}
        showDots={false}
        autoPlay={true}
        autoPlaySpeed={1000}
        infinite
      >
        {trustedCompeny.map((item, index) => {
          return <Icon key={index} as={item} fontSize={60} mb={5} />;
        })}
      </Carousel>
    </>
  );
};

export default Sponsor;

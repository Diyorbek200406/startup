import Carousel from 'react-multi-carousel';
import SectionTitle from '../section-title/section-title';
import { sponsorshipCarousel } from '@/config/carusel';
import { Box, Icon } from '@chakra-ui/react';
import { trustedCompeny } from '@/config/constants';
import { useTranslation } from 'react-i18next';

const Sponsor = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle
        title=""
        subtitle={t('sponsor_title', { ns: 'home' })}
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

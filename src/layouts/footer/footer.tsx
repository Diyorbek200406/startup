import {
  Box,
  Flex,
  IconButton,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { format } from 'date-fns';
import { FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      pl={{ base: 0, lg: '320px' }}
      mt={10}
      w={'full'}
      borderTop={'1px'}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      borderTopColor={useColorModeValue('gray.200', 'gray.700')}
      h={'10vh'}
    >
      <Flex justify={'space-between'} align={'center'} h={'full'}>
        <Text>
          © {format(new Date(), 'yyyy')} Erkinov Diyorbek. All Right Reserved.
        </Text>
        <Flex gap={4} mr={10}>
          <IconButton
            aria-label="telegram"
            icon={<FaTelegram />}
            colorScheme="facebook"
            variant={'outline'}
          />
          <IconButton
            aria-label="instagram"
            icon={<FaInstagram />}
            colorScheme="facebook"
            variant={'outline'}
          />
          <IconButton
            aria-label="youtube"
            icon={<FaYoutube />}
            colorScheme="facebook"
            variant={'outline'}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;

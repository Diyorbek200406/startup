import { DarkLogo, LightLogo } from '@/icons';
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { BiMenuAltLeft, BiUserCircle } from 'react-icons/bi';
import { MdContactSupport } from 'react-icons/md';
import { HeaderProps } from './header.props';
import { language } from '@/config/constants';
import { useTranslation } from 'react-i18next';
import { TbWorld } from 'react-icons/tb';

const Header = ({ onToggle }: HeaderProps): JSX.Element => {
  const { toggleColorMode, colorMode } = useColorMode();
  const { t, i18n } = useTranslation();

  const onLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box
      zIndex={1001}
      w={'full'}
      h={'10vh'}
      px={10}
      pos={'fixed'}
      top={0}
      left={0}
      right={0}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      borderBottom={'1px'}
      borderBottomColor={useColorModeValue('gray.200', 'gray.900')}
    >
      <Flex h={'full'} justify={'space-between'} align={'center'}>
        <HStack>
          <Icon
            as={BiMenuAltLeft}
            onClick={onToggle}
            w={6}
            h={6}
            cursor={'pointer'}
          />
          <Link href="/">
            {colorMode == 'light' ? <DarkLogo /> : <LightLogo />}
          </Link>
        </HStack>

        <HStack>
          <IconButton
            aria-label="support"
            icon={<MdContactSupport />}
            colorScheme="facebook"
            variant={'outline'}
          />

          <Menu placement="bottom">
            <MenuButton
              as={Button}
              rightIcon={<TbWorld />}
              colorScheme="facebook"
              variant={'solid'}
              textTransform={'capitalize'}
            >
              {i18n.resolvedLanguage}
            </MenuButton>

            <MenuList p={0}>
              {language.map((e) => (
                <MenuItem
                  key={e.lng}
                  onClick={() => onLanguage(e.lng)}
                  icon={<e.icon />}
                  backgroundColor={
                    i18n.resolvedLanguage === e.lng ? 'facebook.500' : ''
                  }
                >
                  {e.nativeLng}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          <IconButton
            aria-label="color-mode"
            icon={colorMode == 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
            colorScheme="facebook"
            variant={'outline'}
            onClick={toggleColorMode}
          />

          <Button rightIcon={<BiUserCircle />} colorScheme="facebook">
            {t('login', { ns: 'layout' })}
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;

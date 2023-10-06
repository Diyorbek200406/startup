import { DarkLogo, EngIcons, LightLogo, UzbIcons } from '@/icons';
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
import { BsFillMoonFill, BsFillSunFill, BsTranslate } from 'react-icons/bs';
import { BiMenuAltLeft, BiUserCircle } from 'react-icons/bi';
import { MdContactSupport } from 'react-icons/md';
import RusIcon from '@/icons/rus';
import { HeaderProps } from './header.props';

const Header = ({ onToggle }: HeaderProps): JSX.Element => {
  const { toggleColorMode, colorMode } = useColorMode();
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

          <Menu>
            <MenuButton
              as={IconButton}
              icon={<BsTranslate />}
              colorScheme="facebook"
              variant={'solid'}
            />
            <MenuList>
              <MenuItem icon={<UzbIcons />}>UZB</MenuItem>
              <MenuItem icon={<EngIcons />}>ENG</MenuItem>
              <MenuItem icon={<RusIcon />}>RUS</MenuItem>
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
            Login
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;

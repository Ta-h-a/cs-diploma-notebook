'use client'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link,
  Image,
} from '@chakra-ui/react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CategoryNavItem from './CategoryNavItem';
import {
  IconButton,
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  useColorMode,
  Container
} from '@chakra-ui/react'
import { Component, useState } from 'react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiSun,
  FiMoon,
  FiArrowDown,
} from 'react-icons/fi'

import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from '@chakra-ui/react'

const LinkItems = [
  { name: 'Home', icon: FiHome },
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
]

const SidebarContent = ({ onClose, ...rest }) => {
  const {toggleColorMode, colorMode,setColorMode}  = useColorMode();

  return (
    <Box
      bg={useColorModeValue('', '#1b1b1d')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 72}}
      pos="fixed"
      h="full"
      {...rest}>
      
      {/* 
      
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      
       */}

      <HStack display={{base:'flex',md:'none'}} h={16} p={2} justifyContent={'space-between'}>
      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="xl"
        // fontFamily="montserrat"
        fontWeight="semibold"
        letterSpacing={1}
        ml={2}
        >
        Computer Science
      </Text>
      <IconButton size="md" variant="ghost" aria-label='open menu' display={{'base':"flex","md":"none"}}  icon={ colorMode == "dark" ? <FiSun /> : <FiMoon /> } onClick={toggleColorMode} />
      </HStack>

       

      <VStack m={'2'} mr={1} gap={1} align='stretch' >
      {/* <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      </Link> */}
        <Accordion defaultIndex={[0]} allowMultiple >
            {/* <AccordionItem border={'none'} borderRadius={5}>
            
                <AccordionButton p={0}>
                  <Box as="span" flex='1' textAlign='left' p={1} >
                    Semester 1
                  </Box>
                  <AccordionIcon w={10}/>


                </AccordionButton>
              
              <AccordionPanel p={0} pb={4}>
                <NavItem itemName={'IT Skills'} itemContent={['']} />
                <NavItem itemName={'FEEE'} itemContent={['']} />
              </AccordionPanel>
            </AccordionItem> */}

            {/* Use childrens to insert items into items */}
            <CategoryNavItem itemName={"Semester 1"}>
              <CategoryNavItem itemName={"IT Skills"} />
              <CategoryNavItem itemName={"FEEE"} />
            </CategoryNavItem>

            <CategoryNavItem itemName={"Semester 2"}>
              <CategoryNavItem itemName={"Statistics And Analytics"} />
              <CategoryNavItem itemName={"Communication Skills"} />
              <CategoryNavItem itemName={"CAD"} />
              <CategoryNavItem itemName={"Multimedia And Animation."} />
            </CategoryNavItem>
            
          </Accordion>

      </VStack>

    </Box>
  )
}

const MobileNav = ({ onOpen, ...rest }) => {
  const {toggleColorMode, colorMode,setColorMode}  = useColorMode();
  return (
    <Flex
      ml={{ base: 0, md: 0 }}
      px={{ base: 4, md: 4 }}
      height="16"
      alignItems="center"
      bg={useColorModeValue('white', '#1b1b1d')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      
      <HStack w={{base: '100%',md: '0'}}>
        <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onOpen}
            variant="outline"
            aria-label="open menu"
            icon={<FiMenu />}
        />
      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="xl"
        // fontFamily="montserrat"
        fontWeight="semibold"
        letterSpacing={1}
        ml={2}
        textAlign={{base : 'center',md:'left'}}
        >
        CS Textbook
      </Text>
      </HStack>

      <Text
        display={{ base: 'none', md: 'flex' }}
        fontSize="xl"
        // fontFamily="montserrat"
        fontWeight="semibold"
        letterSpacing={1}
        ml={4}
        position={'absolute'}
        left={0}
        >
        CS Textbook
      </Text>



      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton size="lg" variant="ghost" aria-label='open menu' display={{'base':"none","md":"flex"}} icon={ colorMode == "dark" ? <FiSun /> : <FiMoon /> } onClick={toggleColorMode} />
      </HStack>
    </Flex>
  )
}

const SidebarWithHeader = ({children}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', '#161617')}>
      <MobileNav onOpen={onOpen} />
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 72 }} pt={4} >
        {/* Content */}
        <HStack justify={'stretch'} spacing={0} textAlign={"left"}>
          <Container maxWidth={{"base":"100%","md":'75%'}} >
            <VStack textAlign={"left"} alignItems={'flex-start'}>
            <Container maxW={'container.xl'} p={0}>
            {children}
            </Container>
            {/* <Tag>Sample Tag</Tag> */}


            </VStack>
          </Container>
          <Container maxWidth={'25%'} display={{"base": "none","md":"flex"}} >
          {/* {children} */}
          </Container>
        </HStack>
      </Box>
    </Box>
  )
}

export default SidebarWithHeader
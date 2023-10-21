import {
  Accordion, Link,
} from '@chakra-ui/react'
import CategoryNavItem from './CategoryNavItem';
import {
  IconButton,
  Box,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  useColorMode,
  Container
} from '@chakra-ui/react'
import {
  FiMenu,
  FiSun,
  FiMoon,
} from 'react-icons/fi'

import FooterBar from './FooterBar'

import PageNavItem from './PageNavItem';

const SidebarContent = ({ load,items, onClose, ...rest }) => {

  const {toggleColorMode, colorMode,setColorMode}  = useColorMode();
  const colorValue = useColorModeValue("black","light");
  return (
    <Box
      bg={useColorModeValue('', '#1b1b1d')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 72}}
      pos="fixed"
      h="full"
      color={colorValue}
      overflowY={'auto'}
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

       

      <VStack m={'2'} mr={0} gap={1} align='stretch' >
      {/* <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      </Link> */}
        <Accordion textColor={colorValue} mb={50} defaultIndex={[0]} allowMultiple pr={2}>

            <CategoryNavItem urlPath="semester/1" type={"semester"} load={load} itemName={"Semester 1"}>
              <CategoryNavItem urlPath={"practical/information-technology"} load={load} type={"subject"} itemName={"IT Skills"}>
                  {items.filter((item)=>{
                    return item.title == "IT Skills"
                  })[0].experiments.map((experiment)=>{
                    return (
                      <CategoryNavItem urlPath={"practical/information-technology"} type={"subject"} load={load}  itemName={experiment.title}>
                        {experiment.sections.map((section)=>{
                          return (
                            <PageNavItem itemName={section.tag} type={"experiment"} load={load} urlPath={section.URL} />
                          )
                        })}
                      </CategoryNavItem>
                    )
                  })}
                </CategoryNavItem>
            </CategoryNavItem>

            {/* <CategoryNavItem type={"semester"} load={load} itemName={"Semester 2"}>
              <CategoryNavItem type={"subject"} load={load} itemName={"Statistics And Analytics"} />
              <CategoryNavItem type={"subject"} load={load} itemName={"Communication Skills"} />
              <CategoryNavItem type={"subject"} load={load} itemName={"CAD"} />
              <CategoryNavItem type={"subject"} load={load} itemName={"Multimedia And Animation."} />
            </CategoryNavItem> */}


            <CategoryNavItem urlPath={"semester/2"} load={load} type={"semester"} itemName={"Semester 2"}>
              <CategoryNavItem urlPath={"practical/statistics-and-analytics"} load={load} type={"subject"} itemName={"Statistics And Analytics"}>
                {items.filter((item)=>{
                  return item.title == "Statistics And Analytics"
                })[0].experiments.map((experiment)=>{
                  return (
                    <CategoryNavItem urlPath={"practical/statistics-and-analytics"} type={"subject"} load={load}  itemName={experiment.title}>
                      {experiment.sections.map((section)=>{
                        return (
                          <PageNavItem itemName={section.tag} type={"experiment"} load={load} urlPath={section.URL} />
                        )
                      })}
                    </CategoryNavItem>
                  )
                })}
              </CategoryNavItem>
            </CategoryNavItem>


            {/* <CategoryNavItem type={"semester"} itemName={"Semester 3"}>
              <CategoryNavItem type={"subject"} itemName={"Statistics And Analytics"} />
              <CategoryNavItem type={"subject"} itemName={"Communication Skills"} />
              <CategoryNavItem type={"subject"} itemName={"CAD"} />
              <CategoryNavItem type={"subject"} itemName={"Multimedia And Animation."} />
            </CategoryNavItem> */}

            <CategoryNavItem urlPath={"semester/3"} load={load} type={"semester"} itemName={"Semester 3"}>
              <CategoryNavItem urlPath={"practical/python-programming"} load={load} type={"subject"} itemName={"Python Programming"}>
                {items.filter((item)=>{
                  return item.title == "Python Programming"
                })[0].experiments.map((experiment)=>{
                  return (
                    <CategoryNavItem urlPath={"practical/python"} type={"subject"} load={load}  itemName={experiment.title}>
                      {experiment.sections.map((section)=>{
                        return (
                          <PageNavItem itemName={section.tag} type={"experiment"} load={load} urlPath={section.URL} />
                        )
                      })}
                    </CategoryNavItem>
                  )
                })}
              </CategoryNavItem>
            </CategoryNavItem>




            <CategoryNavItem urlPath={"semester/4"} load={load} type={"semester"} itemName={"Semester 4"}>
              <CategoryNavItem urlPath={"practical/data-structures-and-algorithms-with-python"} load={load} type={"subject"} itemName={"DSA with Python"}>
                {items.filter((item)=>{
                  return item.title == "DSA with Python"
                })[0].experiments.map((experiment)=>{
                  return (
                    <CategoryNavItem urlPath={"practical/data-structures-and-algorithms-with-python"} type={"subject"} load={load}  itemName={experiment.title}>
                      {experiment.sections.map((section)=>{
                        return (
                          <PageNavItem itemName={section.tag} type={"experiment"} load={load} urlPath={section.URL} />
                        )
                      })}
                    </CategoryNavItem>
                  )
                })}
              </CategoryNavItem>
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
    zIndex={1}
      position={'sticky'}
      top={0}
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
          // _focus={{WebkitTapHighlightColor: 'transparent' }}
            display={{ base: 'flex', md: 'none' }}
            _focus={{
              WebkitTapHighlightColor: 'transparent'
              }}
            onClick={onOpen}
            variant="outline"
            aria-label="open menu"
            icon={<FiMenu />}
        />
      <Link 
        display={{ base: 'flex', md: 'none' }}
        href='/'
        _hover={
          {
            textDecoration: 'none'
          }
        }
        fontSize="xl"
        // fontFamily="montserrat"
        fontWeight="semibold"
        letterSpacing={1}
        ml={2}
        textAlign={{base : 'center',md:'left'}}
      >
        CS Textbook
      </Link>
      </HStack>

      <Link
      href='/'
        display={{ base: 'none', md: 'flex' }}
        _hover={
          {
            textDecoration: 'none'
          }
        }
        fontSize="xl"
        // fontFamily="montserrat"
        fontWeight="semibold"
        letterSpacing={1}
        ml={4}
        position={'absolute'}
        left={0}
      >
        CS Textbook
      </Link>



      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton size="lg" variant="ghost" aria-label='open menu' display={{'base':"none","md":"flex"}} icon={ colorMode == "dark" ? <FiSun /> : <FiMoon /> } onClick={toggleColorMode} />
      </HStack>
    </Flex>
  )
}

const SidebarWithHeader = ({children,items, load}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(items);


  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', '#161617')} >
      <MobileNav onOpen={onOpen} />
      <SidebarContent items={items} load={load} onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs">
        <DrawerContent>
          <SidebarContent items={items} load={load} onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 72 }} pt={4}>
        {/* Content */}
        <HStack justify={'stretch'} spacing={0} textAlign={"left"} mb={10}>
          <Container maxWidth={{"base":"100%","lg":'75%'}}>
            <VStack textAlign={"left"} alignItems={'flex-start'}>
            <Container maxW={'container.xl'} p={0}>
            {children}
            </Container>
            {/* <Tag>Sample Tag</Tag> */}


            </VStack>
          </Container>
          <Container maxWidth={'25%'} display={{"base": "none","lg":"flex"}} >
          {/* {children} */}
          </Container>
        </HStack>
      <FooterBar />
      </Box>
    </Box>
    
  )
}

export default SidebarWithHeader
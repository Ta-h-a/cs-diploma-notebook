import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Link,
  useColorModeValue
} from '@chakra-ui/react'




const NavItem = ({itemName,children})=>{
  const colorValue = useColorModeValue("red.500","red.400");
    return (
      // <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
        <AccordionItem border={'none'} m={2} mr={0} borderRadius={5} >
                <AccordionButton borderRadius={10} p={0}  _focus={{'bgColor':colorValue}} >
                  <Box as="span" flex='1' ml={2} textAlign='left' p={1.5} pl={'7px'} >
                    {itemName}
                  </Box>
                  {/* <IconButton onClick={onToggle} icon={isOpen ? <KeyboardArrowRightIcon /> : <KeyboardArrowDownIcon />} variant='outline' size={'sm'} /> */}
                  <AccordionIcon w={10}/>

                </AccordionButton>
              
              <AccordionPanel  pb={4}>
                {children}
              </AccordionPanel>
            </AccordionItem>
      // </Link>

    )
}

export default NavItem;
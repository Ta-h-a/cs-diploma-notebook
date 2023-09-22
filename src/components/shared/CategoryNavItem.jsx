import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Link
} from '@chakra-ui/react'




const NavItem = ({itemName,children})=>{
    return (
      // <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
        <AccordionItem border={'none'} m={2} mr={0} borderRadius={5} >
                <AccordionButton p={0} >
                  <Box as="span" flex='1' ml={2} textAlign='left' p={3} pl={'7px'} >
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
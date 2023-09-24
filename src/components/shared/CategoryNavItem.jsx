import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  useColorModeValue
} from '@chakra-ui/react'
import { useState } from 'react';




const NavItem = ({itemName,children, load, type, urlPath})=>{
  const colorValue = useColorModeValue("cyan.200","cyan.800");
  const borderColorValue = useColorModeValue("teal.400","teal.500");
  const [currentSection, setCurrentSection] = useState(false);
    return (
      // <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
        <AccordionItem  border={'none'} m={2} mr={0} borderRadius={5}>
                <AccordionButton onClick={()=>{setCurrentSection(type==="semester"||"subject" ?true:false)}} _expanded={currentSection? { borderColor: borderColorValue, borderWidth: 2} : null} borderRadius={10} p={0}  _focus={{'bgColor':colorValue,
                borderColor: 'teal',
                borderWidth: 1,
                WebkitTapHighlightColor: 'transparent' }} >
                  <Box as="span" urlpath={urlPath} type={type} onClick={load} flex='1' ml={2} textAlign='left' p={1.5} pr={0} pl={'7px'} >
                    {itemName}
                  </Box>
                  {/* <IconButton onClick={onToggle} icon={isOpen ? <KeyboardArrowRightIcon /> : <KeyboardArrowDownIcon />} variant='outline' size={'sm'} /> */}
                  {/* <AccordionIcon display={type === "experiment" ? "none" : "flex"} w={10}/> */}
                  <AccordionIcon w={10}/>


                </AccordionButton>

              <AccordionPanel  pr={0}  pb={4}>
                {children}
              </AccordionPanel>
            </AccordionItem>
      // </Link>

    )
}

export default NavItem;
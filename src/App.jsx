import { Box, Container, Heading, Image, Text, VStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import SidebarWithHeader from './components/shared/SideBar'
import axios from 'axios';


function App() {
  const [data,setData] = useState();

  const getData = async()=>{
    try{
      const d = await axios.get("http://localhost:3000/");
      // d.then((res)=>{
      //   console.log(res.data);
      // })
      console.log(d);
      setData(d.data);
    }catch(e){
      console.log("Gadbad hai");
      console.log(e);
    }
  }

  useEffect(()=>{
    getData();
  },[])

  if (data){
    // console.log(data.description);
    return (
      <SidebarWithHeader>
        <Heading as='h1' size='2xl' mt={4} mb={4}  maxW={{base:"100%",md:"heading.md"}}>
        {data.title}
        </Heading>
        <Text mt={8}>
        Hey Computer Science students!
        </Text>
        <Image borderRadius={10} _hover={{
          opacity: "0.7"
        }} mt={8} mb={8} src='https://4.bp.blogspot.com/-7SDpQHKWosE/Vnrrvtfp3LI/AAAAAAABid8/T94Jfq9Iog4/s1600/funny-cat-gifs-186-06.gif' />
        {data.description.map((d,index)=>{
          return (
            <Text key={index} mt={5} mb={2}>
              {d}
            </Text>
          )
        })}
      </SidebarWithHeader>
    )
  }

  return (
    <SidebarWithHeader>
      sdfsad
    </SidebarWithHeader>
  )
}

export default App

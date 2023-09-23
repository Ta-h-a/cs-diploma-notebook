import { Box, Card, CardBody, CardHeader, Container, Heading, Image, Link, Skeleton, SkeletonText, Spinner, Text, VStack, Wrap, WrapItem, textDecoration, useColorModeValue } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import SidebarWithHeader from './components/shared/SideBar'
// import CategoryPage from './components/CategoryPage';
import axios from 'axios';

function App() {
  const [data,setData] = useState();
  const [loadCategory, setLoadCategory] = useState(
    {
      urlPath: "",
      isCategory: false
    }
  );

  const getData = async(url)=>{
    try{
      const d = await axios.get(`http://localhost:3000/${url}`);
      setData(d.data);
    }catch(e){
      console.log("Gadbad hai");
      console.log(e);
    }
  }

  useEffect(()=>{
    // getData("");
    getData(loadCategory.urlPath)
  },[loadCategory])

  function loadComponent(event){
    // if (event.target.)
    console.log(event.target);
    // console.log(event.target.getAttribute("urlpath"));
    if (event.target.getAttribute("type") === "category"){
      // setLoadCategory(true);
      setLoadCategory(
        ()=>{
          return {
            urlPath: event.target.getAttribute("urlpath"),
            isCategory: true
          }
        }
      )
    }
  }

  if (!loadCategory.isCategory && data){
      return (
        <SidebarWithHeader load={loadComponent} >
          <WelcomePage />
        </SidebarWithHeader>
      )
  }
  
  if(loadCategory.isCategory && data.practical){
    // console.log(data);
    return (
        <SidebarWithHeader load={loadComponent} >
          <CategoryPage />
        </SidebarWithHeader>
    )
  }

  function CategoryPage(){
    // console.log(data);
    return (
      <VStack align={'stretch'}>
        <Container maxW={'100%'} my={3}>
            <Heading size={'2xl'}>{data.semester}</Heading>
        </Container>
            <Text my={4}>
                {data.description}
            </Text>
            <Wrap>
                {data.practical.map((sub, index)=>{
                      return (
                      <WrapItem flexGrow={{base: '1'}}>
                          <Link p={4} w={'100%'} key={index}
                          href={sub.URL}
                          _hover={
                            {
                              textDecoration: 'none',
                            }
                          }
                          >
                            <Card borderWidth={2} bgColor={'transparent'} key={index}
                            transition='border-color 0.3s ease-in-out'
                            opacity='0.8'
                            _hover={
                              
                              {
                                borderColor: 'teal',
                                transition: 'border-color 0.3s ease-in-out',
                                opacity: 1
                              }
                            } variant={'outline'} size={'md'}>
                                <CardHeader>
                                    <Heading>{sub.title}</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>
                                    {sub.name}
                                    </Text>
                                </CardBody>
                            </Card>
                          </Link>
                </WrapItem>
                      )
                  })}
            </Wrap>
      </VStack>
    )
  }


  function WelcomePage(){
    return (
      <div>
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
      </div>
    )
  }

  return (
    <SidebarWithHeader>
      <Spinner size={'xl'} color='red.500' />
    </SidebarWithHeader>
  )
}

export default App

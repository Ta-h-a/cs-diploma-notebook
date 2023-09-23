import { Box, Card, CardBody, CardHeader, Container, Heading, Image, Link, Skeleton, SkeletonText, Spinner, Text, VStack, Wrap, WrapItem, textDecoration, useColorModeValue } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import SidebarWithHeader from './components/shared/SideBar'
// import SemesterCategoryPage from './components/SemesterCategoryPage';
import axios from 'axios';
import SubjectPage from './components/shared/SubjectCategoryPage';
import SemesterCategoryPage from './components/shared/SemesterCategoryPage';
import Page from './components/shared/Page';

function App() {
  const [data,setData] = useState();
  const [loadCategory, setLoadCategory] = useState(
    {
      urlPath: "",
      isSemester: false,
      isSubject: false,
      isExperiment: false
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
    console.log(event.target);
    const type = event.target.getAttribute("type");
    // console.log(event.target.getAttribute("urlpath"));
    if (type === "semester"){
      setLoadCategory(
        ()=>{
          return {
            urlPath: event.target.getAttribute("urlpath"),
            isSemester: true
          }
        }
      )
    }else if((type === "subject")){
      setLoadCategory(
        ()=>{
          return {
            urlPath: event.target.getAttribute('urlpath'),
            isSemester: false,
            isSubject: true
          }
        }
      )
    }else if(type === "experiment"){
      setLoadCategory(
        ()=>{
          return{
            urlPath: event.target.getAttribute('urlpath'),
            isSemester: false,
            isSubject: false,
            isExperiment: true
          }
        }
      )
    }
  }

  if (!loadCategory.isSemester && !loadCategory.isSubject && !loadCategory.isExperiment && data){
      return (
        <SidebarWithHeader load={loadComponent} >
          <WelcomePage />
        </SidebarWithHeader>
      )
  }
  
  if(loadCategory.isSemester && data.practical){
    // console.log(data);
    return (
        <SidebarWithHeader load={loadComponent} >
          {/* <SemesterCategoryPage /> */}
          <SemesterCategoryPage 
            title={data.title}
            description={data.description}
            practical={data.practical}
            loadComponent={loadComponent}
          />
        </SidebarWithHeader>
    )
  }

  if(loadCategory.isSubject && data.experiments){
    console.log(data);
    return (
      <SidebarWithHeader load={loadComponent} >
      <SubjectPage title={data.title} loadComponent={loadComponent} description={data.description} code={data.code} experiments={data.experiments} sections={data.sections} />
    </SidebarWithHeader>
    )
  }

  if (loadCategory.isExperiment && data.explanation){
    return(
      <SidebarWithHeader load={loadComponent} >
        <Page name={data.title} description={data.description} explanation={data.explanation} />
      </SidebarWithHeader>
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

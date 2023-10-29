import { Skeleton, VStack, useColorMode} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import SidebarWithHeader from './components/shared/SideBar'
// import SemesterCategoryPage from './components/SemesterCategoryPage';
import axios from 'axios';
import SubjectPage from './components/shared/SubjectCategoryPage';
import SemesterCategoryPage from './components/shared/SemesterCategoryPage';
import Page from './components/shared/Page';
import WelcomePage from './components/shared/Welcome';
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [data,setData] = useState();
  const [experiments, setExperiments] = useState();
  const [loadCategory, setLoadCategory] = useState(
    {
      urlPath: "",
      isSemester: false,
      isSubject: false,
      isExperiment: false
    }
  );
  const [isLocked, setIsLocked] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const {toggleColorMode, colorMode}  = useColorMode();

  const getData = async(url)=>{
    // setLoading(true);
    setProgress(40);
    try{
      // const d = await axios.get(`http://localhost:3000/${url}`);
      const d = await axios.get(`https://cs-diploma-notebook-api.vercel.app/${url}`);
      if(d.data.isLocked){
        console.log("Website is locked");
        setIsLocked(true);
      }else{
        setData(d.data);
      }
    }catch(e){
      console.log("Something went wrong !");
      console.log(e);
    }finally{
      // setLoading(false);
      setProgress(100);
    }
  }

  const getNavBarData = async()=>{
    try{
      // const d = await axios.get(`http://localhost:3000/practical/all`);
      const d = await axios.get("https://cs-diploma-notebook-api.vercel.app/practical/all");
      setExperiments(d.data);
    }catch (e){
      setExperiments([]);
    }
  }

  useEffect(()=>{
    getNavBarData()
  },[])

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

  if (experiments && !loadCategory.isSemester && !loadCategory.isSubject && !loadCategory.isExperiment && data){
      return (
        <SidebarWithHeader items={experiments} load={loadComponent} >
          <LoadingBar color={colorMode == "dark" ? "#47A992" : "red"} shadow={true} progress={progress} onLoaderFinished={() => setProgress(0)} />
          <WelcomePage title={data.title} link={data.link} description={data.description} />
        </SidebarWithHeader>
      )
  }
  
  if(experiments && loadCategory.isSemester && data.practical){
    // console.log(data);
    return (
        <SidebarWithHeader items={experiments} load={loadComponent} >
          {/* <SemesterCategoryPage /> */}
          <LoadingBar color={colorMode == "dark" ? "#47A992" : "red"} shadow={true} progress={progress} onLoaderFinished={() => setProgress(0)} />
          <SemesterCategoryPage 
            title={data.title}
            description={data.description}
            practical={data.practical}
            loadComponent={loadComponent}
          />
        </SidebarWithHeader>
    )
  }

  if(experiments && loadCategory.isSubject && data.experiments){
    return (
      <SidebarWithHeader items={experiments}  load={loadComponent} >
        <LoadingBar color={colorMode == "dark" ? "#47A992" : "red"} shadow={true} progress={progress} onLoaderFinished={() => setProgress(0)} />
        <SubjectPage title={data.title} loadComponent={loadComponent} description={data.description} code={data.code} experiments={data.experiments}  />
      </SidebarWithHeader>
    )
  }

  if (experiments && loadCategory.isExperiment && data.explanation){
    return(
      <SidebarWithHeader items={experiments}  load={loadComponent} >
        <LoadingBar color={colorMode == "dark" ? "#47A992" : "red"} shadow={true} progress={progress} onLoaderFinished={() => setProgress(0)} />
        <Page language={data.language} name={data.title} images={data.images} description={data.description} code={data.code} type={data.type} explanation={data.explanation} ytLink={data.ytLink} sources={data.sources} />
      </SidebarWithHeader>
    )
  }

  if(isLocked){
    return (
      "Website is Locked by College Authorities"
    )
  }

  if(experiments){
    return (
      <SidebarWithHeader items={experiments}>
        {/* <Spinner size={'xl'} color='red.500' /> */}
        <Skeleton borderRadius={5} ml={4} mr={4} mt={5} mb={4} height={16}/>
        <Skeleton borderRadius={5} ml={4} mr={4} height={8}/>
        <VStack m={4} mb={40}>
          <Skeleton borderRadius={5} w={'100%'} mt={4} height={32} />
          <Skeleton borderRadius={5} w={'100%'} mt={4} height={32} />
        </VStack>
    </SidebarWithHeader>
    )

  }
}

export default App

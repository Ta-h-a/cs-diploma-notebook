import { Card, CardBody, CardHeader, Container, Heading, Link, Text, VStack, Wrap, WrapItem, useColorModeValue } from "@chakra-ui/react";
import Footer from "./NextAndPrevious";



function SemesterCategoryPage(
    {
        title,
        description,
        practical,
        loadComponent
    }
){
  const colorValue = useColorModeValue("whiteAlpha.600", "blackAlpha.500");
    // console.log(data);
    return (
      <VStack align={'stretch'}>
        <Container p={{base: 0,md:4}} maxW={'100%'} my={3}>
            <Heading size={'2xl'}>{title}</Heading>
        </Container>
            <Text pl={{base: 0, md: 4}} my={4}>
                {description}
            </Text>
            <Wrap>
                {practical.map((sub, index)=>{
                      return (
                      <Container pr={{base: 0, md: 4}}  maxW={'100%'} pl={0}>
                      <WrapItem flexGrow={{base: '1'}}>
                          <Link p={0} maxW={'100%'} flexGrow={'1'} key={index}
                          onClick={loadComponent}
                          _hover={
                            {
                              textDecoration: 'none',
                            }
                          }
                          >
                            <Card  type="subject" urlpath={sub.URL} borderWidth={2} bgColor={colorValue} key={index}
                            transition='border-color 0.3s ease-in-out'
                            opacity='0.8'
                            borderColor={'teal.800'}
                            _hover={
                              
                              {
                                borderColor: 'teal.400',
                                transition: 'border-color 0.3s ease-in-out',
                                opacity: 1
                              }
                            } variant={'outline'} size={'md'}>
                                <CardHeader type="subject" urlpath={sub.URL}>
                                    <Heading type="subject" urlpath={sub.URL}>{sub.title}</Heading>
                                </CardHeader>
                                <CardBody type="subject" urlpath={sub.URL}>
                                    <Text type="subject" urlpath={sub.URL}>
                                    {sub.description}
                                    </Text>
                                </CardBody>
                            </Card>
                          </Link>
                </WrapItem>
                      </Container>
                      )
                  })}
            </Wrap>
            <Footer />
      </VStack>
    )
  }

export default SemesterCategoryPage;
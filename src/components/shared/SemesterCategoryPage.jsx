import { Card, CardBody, CardHeader, Container, Heading, Link, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import Footer from "./Footer";



function SemesterCategoryPage(
    {
        title,
        description,
        practical,
        loadComponent
    }
){
    // console.log(data);
    return (
      <VStack align={'stretch'}>
        <Container maxW={'100%'} my={3}>
            <Heading size={'2xl'}>{title}</Heading>
        </Container>
            <Text pl={4} my={4}>
                {description}
            </Text>
            <Wrap>
                {practical.map((sub, index)=>{
                      return (
                      <Container maxW={'100%'} pl={0}>
                      <WrapItem flexGrow={{base: '1'}}>
                          <Link p={4} w={'100%'} key={index}
                          onClick={loadComponent}
                          _hover={
                            {
                              textDecoration: 'none',
                            }
                          }
                          >
                            <Card  type="subject" urlpath={sub.URL} borderWidth={2} bgColor={'transparent'} key={index}
                            transition='border-color 0.3s ease-in-out'
                            opacity='0.8'
                            _hover={
                              
                              {
                                borderColor: 'teal',
                                transition: 'border-color 0.3s ease-in-out',
                                opacity: 1
                              }
                            } variant={'outline'} size={'md'}>
                                <CardHeader type="subject" urlpath={sub.URL}>
                                    <Heading type="subject" urlpath={sub.URL}>{sub.title}</Heading>
                                </CardHeader>
                                <CardBody type="subject" urlpath={sub.URL}>
                                    <Text type="subject" urlpath={sub.URL}>
                                    {sub.name}
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
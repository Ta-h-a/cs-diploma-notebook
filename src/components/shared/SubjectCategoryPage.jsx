import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Link,
  Tag,
  Text,
  VStack,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
import Footer from "./Footer";

const SubjectPage = ({ title,description, code, experiments, loadComponent }) => {
  const colorValue = useColorModeValue("whiteAlpha.100", "blackAlpha.500");
  return (
    <VStack align={"stretch"}>
        <Container maxW={"100%"} my={3}>
        <Tag>
            {code}
        </Tag>
        </Container>
      <Container maxW={"100%"} my={3}>
        <Heading size={"2xl"} >{title}</Heading>
      </Container>
      <Text my={4} pl={4} fontSize={'1.5ch'}>{description}</Text>
      <Wrap>
        {experiments.map((exp, index) => {
          return (
            <Container  maxW={'100%'} pl={0}>
              <Heading pl={4}>{exp.title}</Heading>
              {exp.sections.map((e) => {
                return (
                  <WrapItem flexGrow={{ base: "1" }}>
                    <Link
                      p={4}
                      w={"100%"}
                      key={index}
                      onClick={loadComponent}
                      _hover={{
                        textDecoration: "none",
                      }}
                    >
                      <Card
                        type="experiment"
                        urlpath={e.URL}
                        borderWidth={2}
                        bgColor={colorValue}
                        key={index}
                        transition="border-color 0.3s ease-in-out"
                        opacity="0.8"
                        _hover={{
                          borderColor: "teal",
                          transition: "border-color 0.3s ease-in-out",
                          opacity: 1,
                        }}
                        variant={"outline"}
                        size={"md"}
                      >
                        <CardHeader type="experiment" urlpath={e.URL}>
                          <Tag type="experiment" urlpath={e.URL} variant={'outline'}>
                          <Heading type="experiment" urlpath={e.URL}>
                            {e.tag}
                          </Heading>
                          </Tag>
                        </CardHeader>
                        <CardBody type="experiment" urlpath={e.URL}>
                          <Text type="experiment" urlpath={e.URL}>
                            {e.name}
                          </Text>
                        </CardBody>
                      </Card>
                    </Link>
                  </WrapItem>
                );
              })}
            </Container>
          );
        })}
      </Wrap>
      <Footer />
    </VStack>
  );
};

export default SubjectPage;

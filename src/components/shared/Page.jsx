import { AspectRatio, Box, Code, Container, Heading, Link, List, ListItem, Tag, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Footer from "./Footer";

const Page = ({name, description, explanation, ytLink, type, sources})=>{
    const code = `
    # Program 1 A [i] 
    x = 8.0 
    y = 4.0 
    sum = x + y 
    print(x+y) 
    sub = x - y 
    print(x - y) 
    multi = x * y 
    print(x * y) 
    div = x/y 
    print(x/y) 
    print(abs(x)) 
    print(x**y) 

    # ---------------------------------------------
    # String Program - Program 1 A [ii] 
    string1 = "Hello" print("initial string: ") 
    print(string1) 
    string1 = "Welcome" 
    print("Updated String: ") 
    print(string1) 
    text = 'welcome to mlbp' 
    text2 = "good morning students" 
    print("converted string") 
    print(text.upper()) 
    print(text2.upper()) 
    print(text.title()) 
    print("original string") 
    print(text) 

    # ---------------------------------------------
    # List Program - Program 1 A [iii] 
    list1=[1,2,3,4,"Python"] 
    print(list1) list1.append(2) 
    print(list1) a = list1.pop(4) 
    print(a) print(list1[:]) 
    print(list1[0:2]) 
    print(list1[-1:-3]) 

    # ----------------------------------------------
    # Dictionary Program - Program 1 A [iv] 
    dict1 = {1: 'Java Script', 2: 'xml ', 3: 'oops', 4: 'html'} 
    print(dict1) 
    dict1[1] = 'python' 
    print(dict1) 
    dict1[5] = 'Shambhavi ' 
    print(dict1) 
    del dict1[1] 
    print(dict1) 
    print(dict1.popitem()) 
    print(dict1) 
    print(dict1.keys()) 
    print(dict1.values()) 
    # ----------------------------------------------
    `
    return(
        <Container maxW={'100%'} fontSize={15} letterSpacing={0.4}>
        <Container maxW={'100%'} pl={0}>
            <Tag>
                {type}
            </Tag>
        </Container>
            <Heading mt={5} mb={10}>
                {name}
            </Heading>
            <Text my={5}>
                {description}
            </Text>
            <Box my={25}>
                <Text bgColor={'gray.700'} color={'whiteAlpha.600'} borderTopRadius={10} p={3}>
                    Code :
                </Text>
                <SyntaxHighlighter language="python" style={atomOneDark} customStyle={{
                    padding:10,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                }}
                wrapLongLines={true}
                >
                    {code}
                </SyntaxHighlighter>
            </Box>
            <Heading my={14}>
                Explanation
            </Heading>
            <List spacing={4}>
            {explanation.map((e)=>{
                return (
                    <ListItem listStyleType={'initial'}>
                        {e}
                    </ListItem>
                )
            })}
            </List>
            <AspectRatio my={35} ratio={2} zIndex={0}>
                <iframe
                    title={name}
                    src={ytLink}
                    allowFullScreen
                />
            </AspectRatio>
            <Heading>
            Sources :
            </Heading>
            {sources.map((r,index)=>{
                return (
                    <Tag variant={'outline'} mr={2} borderRadius={6} mt={4}>
                    <Link target="_blank" href={r} >
                        Link {index + 1}
                    </Link>
                    </Tag>
                )
            })}
        </Container>
    )
}

export default Page;
import { AspectRatio, Box, Code, Container, Heading, Image, Link, List, ListItem, Tag, Text } from "@chakra-ui/react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Page = ({name, description, explanation, ytLink, type, sources, images, code})=>{
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
            {images === undefined ? null : 
            <Box>
            <Heading my={14}>
                Images
            </Heading>
            {images.map((url)=>{
                return <Image  borderRadius={10} _hover={{
            opacity: "0.7"
          }} mt={8} mb={8} src={url} />
            })}
            </Box>
            }
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
            {sources.map((r)=>{
                return (
                    <Tag variant={'outline'} mr={2} borderRadius={6} mt={4}>
                    <Link target="_blank" href={r.url} >
                        {r.name}
                    </Link>
                    </Tag>
                )
            })}
        </Container>
    )
}

export default Page;
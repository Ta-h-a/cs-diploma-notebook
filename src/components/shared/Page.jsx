import { Container, Heading, List, ListItem, Text } from "@chakra-ui/react";

const Page = ({name, description, explanation})=>{
    return(
        <Container maxW={'100%'}>
            <Heading>
                {name}
            </Heading>
            <Text my={5}>
                {description}
            </Text>
            <List>
            {explanation.map((e)=>{
                return (
                    <ListItem>
                        {e}
                    </ListItem>
                )
            })}
            </List>
        </Container>
    )
}

export default Page;
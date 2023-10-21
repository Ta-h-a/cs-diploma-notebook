import { Card, CardBody, Container, HStack, Text } from "@chakra-ui/react";

function Footer(){
    return (
        <Container maxW={'100%'} p={0}>
        <HStack m={0} mt={20} mb={10}>
            <Card flexGrow={'1'} borderWidth={2} bgColor={'transparent'}
            transition='border-color 0.3s ease-in-out'
            opacity='0.8'
            _hover={
                {
                borderColor: 'teal.400',
                transition: 'border-color 0.3s ease-in-out',
                opacity: 1
                }
            } variant={'outline'} size={'md'}>
                <CardBody>
                    <Text fontWeight={'medium'} letterSpacing={1}>Previous</Text>
                    <Text>Content</Text>
                </CardBody>
            </Card>

            <Card flexGrow={'1'} borderWidth={2} bgColor={'transparent'}
            transition='border-color 0.3s ease-in-out'
            opacity='0.8'
            _hover={
                {
                borderColor: 'teal',
                transition: 'border-color 0.3s ease-in-out',
                opacity: 1
                }
            } variant={'outline'} size={'md'}>
                <CardBody textAlign={'right'}>
                    <Text fontWeight={'medium'} letterSpacing={1}>Next</Text>
                    <Text>Content</Text>
                </CardBody>
            </Card>
        </HStack>
        </Container>
    )
}

export default Footer;
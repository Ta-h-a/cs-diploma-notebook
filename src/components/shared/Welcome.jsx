import { Heading, Image, Text } from "@chakra-ui/react";

function WelcomePage(
    {
        title, description
    }
){
    return (
        <div>
          <Heading as='h1' size='2xl' mt={4} mb={4}  maxW={{base:"100%",md:"heading.md"}}>
          {title}
          </Heading>
          <Text mt={8}>
          Hey Computer Science students!
          </Text>
          <Image borderRadius={10} _hover={{
            opacity: "0.7"
          }} mt={8} mb={8} src='https://4.bp.blogspot.com/-7SDpQHKWosE/Vnrrvtfp3LI/AAAAAAABid8/T94Jfq9Iog4/s1600/funny-cat-gifs-186-06.gif' />
          {description.map((d,index)=>{
            return (
              <Text key={index} mt={5} mb={2}>
                {d}
              </Text>
            )
          })}
        </div>
      )
    }

export default WelcomePage;
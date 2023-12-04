import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  AspectRatio,
  Divider,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function WelcomePage({ title, description, link }) {
  return (
    <div>
      <Heading
        as="h1"
        size="2xl"
        mt={4}
        mb={4}
        maxW={{ base: "100%", md: "heading.md" }}
      >
        {title} 🐨
      </Heading>
      <Text mt={8}>Hey Computer Science students!</Text>
      <br />
      <Alert status="info">
        <AlertIcon />
        <AlertTitle>A new version is out 🥳 : <Link to={"https://csd-textbook.vercel.app"} style={{textDecoration: "underline"}}>Revamped CSD</Link></AlertTitle> 
      </Alert>

      <Image
        borderRadius={10}
        w={400}
        h={400}
        ml={{ base: 0, md: 5 }}
        // src="https://4.bp.blogspot.com/-7SDpQHKWosE/Vnrrvtfp3LI/AAAAAAABid8/T94Jfq9Iog4/s1600/funny-cat-gifs-186-06.gif"
        // src="https://i.pinimg.com/originals/38/d3/0e/38d30ecfe41c21551c043443d330d637.gif"
        src="/undraw_programming_re_kg9v.svg"
      />
      {description.map((d, index) => {
        return (
          <Text key={index} mt={5} mb={6}>
            {d}
          </Text>
        );
      })}
      <Divider />
      <Heading mt={7} size={"xl"}>
        Overview
      </Heading>
      <Text mt={7} mb={6}>
        Checkout this vide to get an overview of this website.
      </Text>
      <AspectRatio my={35} ratio={2} zIndex={0}>
        <iframe
          title={"HEyy"}
          src={link}
          style={{ borderRadius: "10px" }}
          allowFullScreen
        />
      </AspectRatio>
      <Divider />
      <Heading mt={7} size={"xl"}>
        Structure & Navigation
      </Heading>
      <Text mt={7} mb={6}>
        Here you will find the practical experiments of some of the semesters
        for Computer Science Diploma students studying in Karnataka. They are
        organized by semesters and subjects. Use the menu to the left to choose
        a subject by semester.
        <br />
        <br />
        These are listed in approximately the same order that they appear in the
        manual of your college. If you have trouble finding content an a
        specific topic, you can contact the developer
        <br /> <br /> - the socials are mentioned in the footer.
      </Text>
      <Divider />
      <Heading mt={7} size={"xl"}>
        What is it for ?
      </Heading>
      <Text mt={7}>
        These notes are intended to be used as a reference tool to complement
        some of the material covered in the C20 syllabus
      </Text>
    </div>
  );
}

export default WelcomePage;

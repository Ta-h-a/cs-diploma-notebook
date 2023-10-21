import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "@chakra-ui/react";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function FooterBar() {
  const year = new Date();
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      paddingBottom={{ base: "8", md: "2" }}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={{ base: "6xl", md: "5xl" }}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
        pt={{base: "8", md: "3"}}
      >
        <Text>Made with ❤️ by {<Link href={"https://taha-sindoli.vercel.app/"} isExternal>Taha Sindoli</Link>} © {year.getFullYear()}</Text>
        <Stack direction={"row"} spacing={6} mt={{ base: "0.7rem", md: "3"}}>
          <SocialButton
            label={"Twitter"}
            href={"https://twitter.com/Taha_Sindoli"}
          >
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"Github"} href={"https://github.com/Ta-h-a/"}>
            <FaGithub />
          </SocialButton>
          <SocialButton
            label={"Instagram"}
            href={"https://www.instagram.com/tahasindoli/"}
          >
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}

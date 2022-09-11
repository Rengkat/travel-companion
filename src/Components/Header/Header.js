import { Box, Heading, Flex, Image, Center, Input } from "@chakra-ui/react";
// import logo from "../../Asset/logo.png";
import { IoMdSearch } from "react-icons/io";
import { Autocomplete } from "@react-google-maps/api";
const Header = () => {
  return (
    <Box bg="brand.bgColor" h="12vh" w="100%">
      <Flex justify="space-between" w="90%" m="auto" py={7}>
        <Center>
          <Flex justify="start" alignItems="center">
            {/* <Image src={logo} alt="Logo" boxSize={12} fit="contain" /> */}
            <Heading color="white" as="h2">
              Travel Companion
            </Heading>
          </Flex>
        </Center>
        <Box>
          <Center rounded="lg" bg="white" w="22rem">
            {/* <Autocomplete> */}
            <IoMdSearch fontSize={35} />
            <Input
              _placeholder={{ color: "brand.bgColor" }}
              placeholder="Search places..."
              border="none"
              focusBorderColor="none"
            />
            {/* </Autocomplete> */}
          </Center>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;

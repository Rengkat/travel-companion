import { Box, Heading, Flex, Image, Center, Input } from "@chakra-ui/react";
// import logo from "../../Asset/logo.png";
import { IoMdSearch } from "react-icons/io";
import { Autocomplete } from "@react-google-maps/api";
import { useState } from "react";
const Header = ({ setCoordinates }) => {
  const [autoComplete, setAutoComplete] = useState(null);
  // onload and placeChanged from the map for auto search
  // const onLoa = (autoC) => setAutoComplete(autoC);
  // const onPlaceChanged = () => {
  //   const lat = autoComplete.getPlace().geometry.location.lat();
  //   const lng = autoComplete.getPlace().geometry.location.lng();
  //   setCoordinates(lat, lng);
  // };
  return (
    <Box bg="brand.bgColor" h="12vh" w="100%">
      <Flex justify="space-between" w="90%" m="auto" py={5}>
        <Center>
          <Flex justify="start" alignItems="center">
            {/* <Image src={logo} alt="Logo" boxSize={12} fit="contain" /> */}
            <Heading
              color="white"
              as="h2"
              fontSize={{ base: "1.5rem", lg: "2.5rem" }}>
              Travel Companion
            </Heading>
          </Flex>
        </Center>
        <Box>
          <Center
            rounded="lg"
            bg="white"
            w={{ base: "10rem", md: "16rem", lg: "22rem" }}>
            {/* <Autocomplete onLoad={onLoa} onPlaceChanged={onPlaceChanged}> */}
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

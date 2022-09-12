import {
  Box,
  Heading,
  Select,
  Flex,
  Text,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";
import { createRef, useEffect, useState } from "react";
import PlaceDetails from "../Map/PlaceDetails/PlaceDetails";
const List = ({ places, childClick, isLoading, type, setType, setRating }) => {
  const [elRefs, setElRefs] = useState([]);
  // creating a new reff to target the element
  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());
    // set the reff
    setElRefs(refs);
    // console.log(refs);
  }, [places]);
  return (
    <Box h="90vh" overflowY="scroll">
      <Heading
        fontSize="3xl"
        as="h5"
        pt={8}
        pl={7}
        textAlign={{ base: "center" }}>
        Resturants & Hotels around you
      </Heading>

      <Text pl={{ base: "6.5rem", lg: 7 }} py={2}>
        Type:
      </Text>
      <Flex pl={7} justify={{ base: "center", lg: "left" }}>
        <Select onChange={(e) => setType(e.target.value)} w="12rem">
          <option value="restaurants">Restaurants</option>
          <option value="hotels">Hotels</option>
          <option value="attractions">Attractions</option>
        </Select>
        <Select w="12rem" onChange={(e) => setRating(e.target.value)} ml={3}>
          <option value={0}>All</option>
          <option value={3}>Above 3.0</option>
          <option value={4}>Above 4.0</option>
          <option value={4.5}>Above 4.5</option>
        </Select>
      </Flex>
      <Grid p={{ base: "1rem", lg: "2rem" }} mt={5}>
        {isLoading ? (
          <Center>
            <Heading>Loading...</Heading>
          </Center>
        ) : (
          <>
            {places?.map((place, index) => {
              return (
                <GridItem key={index} my="1rem">
                  <PlaceDetails
                    place={place}
                    selected={Number(childClick) === index}
                    refProp={elRefs[index]}
                  />
                </GridItem>
              );
            })}
          </>
        )}
      </Grid>
    </Box>
  );
};

export default List;
// `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary?bl_latitude=${sw.lat}&tr_latitude=${ne.lat}&bl_longitude=${sw.lng}&tr_longitude=${ne.lng}`;

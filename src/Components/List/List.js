import {
  Box,
  Heading,
  Select,
  Flex,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { createRef, useEffect, useState } from "react";
import PlaceDetails from "../Map/PlaceDetails/PlaceDetails";
const List = ({ places, childClick }) => {
  const [elRefs, setElRefs] = useState([]);
  // creating a new reff to target the element
  useEffect(() => {
    const refs = Array(places.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());
    // set the reff
    setElRefs(refs);
    // console.log(refs);
  }, [places]);
  return (
    <Box h="90vh" overflowY="scroll">
      <Heading fontSize="3xl" as="h5" pt={8} pl={7}>
        Resturants & Hotels around you
      </Heading>

      <Text pl={7} py={2}>
        Type:
      </Text>
      <Flex pl={7}>
        <Select w="12rem">
          <option>Resturants</option>
          <option>Hotels</option>
          <option>Attractions</option>
          <option>Filling Station</option>
        </Select>
        <Select w="12rem" ml={3}>
          <option>All</option>
          <option>Above 4.5</option>
          <option>Above 4.0</option>
          <option>Above 3.0</option>
        </Select>
      </Flex>
      <Grid ml={7} mt={5}>
        {places?.map((place, index) => {
          return (
            <GridItem key={index} my="1rem">
              <PlaceDetails
                place={place}
                selected={(childClick) => childClick === index}
                refProp={elRefs[index]}
              />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default List;
// `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary?bl_latitude=${sw.lat}&tr_latitude=${ne.lat}&bl_longitude=${sw.lng}&tr_longitude=${ne.lng}`;

import {
  Box,
  Heading,
  Image,
  Text,
  Badge,
  Flex,
  Button,
} from "@chakra-ui/react";

const PlaceDetails = ({ place, refProp, selected }) => {
  // console.log(place);
  if (selected) {
    refProp?.curren?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <Box border="1px solid black" p={3} fontSize="xl">
      <Image
        src={
          place?.photo?.images?.original?.url
            ? place?.photo?.images?.original?.url
            : "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt="image"
        // boxSize={200}
        w="100%"
        h="40vh"
        objectFit="cover"
      />
      <Heading as="h3" fontSize="2xl" py={2}>
        {place?.name}
      </Heading>
      <Text>Address: {place?.address}</Text>
      <Text>Category: {place?.category?.name}</Text>
      <Text>Phone: {place?.phone}</Text>
      <Text>Email: {place?.email}</Text>
      <Text>Ranking: {place?.ranking}</Text>
      <Text>Distance: {place?.distance_string}</Text>
      <Text>Rating: {place?.rating}</Text>
      <Text>
        Avialability:
        {place?.open_now_text ? (
          <Badge colorScheme="green" fontSize="0.8em" pl={2}>
            {place?.open_now_text}
          </Badge>
        ) : (
          <Badge colorScheme="red" fontSize="0.8em" pl={2}>
            Close now
          </Badge>
        )}
      </Text>
      <Box>
        <Text>Cuisine:</Text>
        {place?.cuisine?.map((type, index) => {
          return (
            <Badge m={1} colorScheme="blue" key={type.key}>
              {type.name}
            </Badge>
          );
        })}
      </Box>
      <Text my={1}>
        Official site:{" "}
        <Button>
          <a href={place?.website} target="_blank">
            Check More
          </a>
        </Button>
      </Text>
    </Box>
  );
};

export default PlaceDetails;

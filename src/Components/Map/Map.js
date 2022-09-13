import {
  Box,
  Text,
  Image,
  IconProps,
  IconButton,
  Center,
} from "@chakra-ui/react";
import { ImLocation2 } from "react-icons/im";
import GoogleMapReact from "google-map-react";
import mapStyles from "./mapStyle";
const Map = ({
  setBounds,
  bounds,
  coordinate,
  setCoordinates,
  places,
  setChildClick,
}) => {
  const coordinates = { lat: 6.4242, lng: 3.4143 };
  return (
    <Box h="90vh">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClick(child)}
        margin={[50, 50, 50, 50]}
        defaultZoom={14}>
        {places?.map((place, index) => {
          return (
            <Box
              p={2}
              bg="white"
              w="5rem"
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={index}>
              <Image
                src={
                  place?.photo?.images?.original?.url
                    ? place?.photo?.images?.original?.url
                    : "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt="image"
                boxSize={50}
                w="100%"
                // h="40vh"
                objectFit="cover"
              />
              {/* <Center> */}
              {/* <IconButton>
                <ImLocation2 fontSize={35} />
              </IconButton> */}
              <Text
                // rounded="xl"
                // p={1}
                // fontSize="13px"
                // bg="white"
                // ml="-20px"
                textAlign="center"
                // w="5.5rem"
              >
                {place?.name}
              </Text>
            </Box>
          );
        })}
      </GoogleMapReact>
    </Box>
  );
};

export default Map;

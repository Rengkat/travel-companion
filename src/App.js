import { Grid, GridItem, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import GetPlacesData from "./Api/Index";

import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Map from "./Components/Map/Map";

function App() {
  const [places, setPlaces] = useState([]);
  const [bounds, setBounds] = useState({});
  const [coordinates, setCoordinates] = useState({});
  const [childClick, setChildClick] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  useEffect(() => {
    setIsLoading(true);
    GetPlacesData(bounds)
      .then((data) => data.json())
      .then((response) => {
        const { data } = response;
        setPlaces(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [coordinates, bounds]);
  return (
    <Box>
      <Grid templateColumns="repeat(3, 1fr)">
        <GridItem colSpan={4}>
          <Header />
        </GridItem>
        <GridItem>
          <List
            places={places}
            childClick={childClick}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </GridItem>
        <GridItem colStart={2} colEnd={4}>
          <Map
            setChildClick={setChildClick}
            places={places}
            setBounds={setBounds}
            bounds={bounds}
            coordinates={coordinates}
            setCoordinates={setCoordinates}
          />
        </GridItem>
        {/* <GetPlacesData setPlaces={setPlaces} /> */}
      </Grid>
      <Box border="solid 1px black" h="20vh" bg="brand.bgColor"></Box>
    </Box>
  );
}

export default App;

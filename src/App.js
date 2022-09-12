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
  const [type, setType] = useState("restaurants");
  const [filtered, setFiltered] = useState([]);
  const [rating, setRating] = useState("");
  // to get current position (logitude and latitude)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
    console.log(rating);
  }, []);
  // rerender to get filtered places for rating
  useEffect(() => {
    const filterPlace = places?.map((data) => data.rating > rating);
    setFiltered(filterPlace);
  }, [rating]);
  // for complety fetching data from api
  useEffect(() => {
    setIsLoading(true);
    GetPlacesData(type, bounds)
      .then((data) => data.json())
      .then((response) => {
        const { data } = response;
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [coordinates, bounds, type]);
  return (
    <Box>
      <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}>
        <GridItem colSpan={{ lg: 4 }}>
          <Header setCoordinates={setCoordinates} />
        </GridItem>
        <GridItem>
          <List
            places={filtered.length ? filtered : places}
            childClick={childClick}
            isLoading={isLoading}
            type={type}
            setType={setType}
            // rating={rating}
            setRating={setRating}
          />
        </GridItem>
        <GridItem colStart={{ lg: 2 }} colEnd={{ lg: 4 }}>
          <Map
            setChildClick={setChildClick}
            places={filtered.length ? filtered : places}
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

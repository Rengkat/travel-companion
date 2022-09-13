const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};
const GetPlacesData = async (type, bounds) => {
  try {
    const data = await fetch(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary?bl_latitude=${bounds?.sw?.lat}&tr_latitude=${bounds?.ne?.lat}&bl_longitude=${bounds?.sw?.lng}&tr_longitude=${bounds?.ne.lat}`,
      options
    );
    return data;
  } catch (error) {
    // error
  }
};

export default GetPlacesData;

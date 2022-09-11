const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f2b61ddf9amsh044b8119dc8f760p1b5349jsnf7c3f287d931",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};
const GetPlacesData = async (bounds) => {
  try {
    const data = await fetch(
      `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary?bl_latitude=${bounds?.sw?.lat}&tr_latitude=${bounds?.ne?.lat}&bl_longitude=${bounds?.sw?.lng}&tr_longitude=${bounds?.ne.lat}`,
      options
    );
    return data;
  } catch (error) {
    // error
  }
};

export default GetPlacesData;

export async function getLocationFromGoogle(address) {
  const city = address.city;
  const canton = address.canton;
  const requestOptions = {
    method: "POST",
    "Access-Control-Allow-Origin": "*",
  };
  try {
    const postOperation = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${city},${canton}&key=AIzaSyCNarCo43NIR2MB-OsYx0gpajAjcunvw-M`,
      requestOptions
    );
    const productLocation = await postOperation.json();
    return productLocation;
  } catch (error) {
    console.log("Get location from google map failed: " + error);
  }
}

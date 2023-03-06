
// fetch data, parse response json and return an object
export async function getFeed(endpoint) {
  try {
    let response = await fetch(endpoint);

    // we want to throw an error if unsuccessful request.
    if (!response.ok) {
      throw new Error("error");
    }
    let data = await response.json();
    return data;
  } catch (error) {
    alert(error);
  }
}

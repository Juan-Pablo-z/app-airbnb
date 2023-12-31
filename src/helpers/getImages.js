
export const getImages = async () => {

  // const apiKey = '41335151-0bab1865ea7343429dad0fdff'
  // const url = `https://pixabay.com/api/?key=${apiKey}&q=houses`

  const apiKey = `cGBmUa6LUFXWlkll38ZXz6eq7yu81lvhfL8BLA_NWDo`
  const url = `https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=hauses`
  const resp = await fetch(url)
  const { results } = await resp.json();

  const images = results.map(img => ({
    id: img.id,
    title: img.user.location,
    url: img.urls.raw,
    price: img.width,
    description:img.alt_description,
  }))

  console.log(images)
  return images;
}



// https://api.unsplash.com/search/photos/?client_id=cGBmUa6LUFXWlkll38ZXz6eq7yu81lvhfL8BLA_NWDo&query=hauses
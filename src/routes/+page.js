export const load = async ({ fetch }) => {

    const fetchNasaImage = async () => {   
        const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=QbLJB5GRyev0ct8LyF6qeoJPf7V33b4z6GAoAHzi')
        
        const resData = await res.json()
        return resData
    }

    return {
       
        nasa: fetchNasaImage(),
    }
}
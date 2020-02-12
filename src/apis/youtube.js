import axios from 'axios'

const KEY = 'AIzaSyAYyvi1QypDrV6oggVl_2k3r_F8ASIUjoY'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10 ,
        key: KEY
    }
})


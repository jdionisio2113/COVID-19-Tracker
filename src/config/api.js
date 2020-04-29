import axios from 'axios';

// axios.get("https://covid19.mathdro.id/api/daily").then(res => {
//     console.log(res)
// })

export default axios.create({
    baseURL: "https://covid19.mathdro.id/api"
});
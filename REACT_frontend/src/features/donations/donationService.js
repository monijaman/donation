import axios from 'axios'

const API_URL = 'https://ovibason.herokuapp.com/api/donations/'


// Get user goals
const getDonations = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.get(API_URL, config)
    return response.data
}


const goalService = {

    getDonations,

}

export default goalService

import axios from "axios";

export const postRequest = async (url, data) => {
    try {
        const respons = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (respons.statusText === "OK") {
            return {
                data: respons.data,
                status: respons.status,
                message: respons.statusText
            };
        }
    } catch (err) {
        return {
            status: err.response.status,
            message: err.response.data.message
        };
    }

} 
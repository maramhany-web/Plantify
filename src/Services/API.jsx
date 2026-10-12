import axios from "axios";

const API_KEY = import.meta.env.VITE_PERENUAL_API_KEY;

export async function getPlants() {
    let allPlants = [];

    for (let page = 1; page <= 2; page++) {
        let { data } = await axios.get("https://perenual.com/api/v2/species-list",{
                params: {key:API_KEY, page: page}
            }
        );
        allPlants = [...allPlants, ...data.data];
    }
    return allPlants;
}

/* API for Details*/

export async function getPlantDetails(id) {
    let { data } = await axios.get(`https://perenual.com/api/v2/species/details/${id}`,{
            params: {key:API_KEY}
        }
    );

    return data;
}

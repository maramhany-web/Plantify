import "./Plants.css";
import { useEffect, useState } from "react";
import { getPlants } from "../../Services/API";
import Loader from "../../Components/Loader/Loader";
import { Link } from "react-router-dom";

export default function Plants() {
    const [plants, setPlants] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getPlantsData();
    }, []);

    async function getPlantsData() {
        try {
            let data = await getPlants();
            setPlants(data);
        } catch (error) {
            console.log("Error:", error);
        } 
    }

    let filteredPlants = plants.filter((plant) => {
        let name = plant.common_name ;

        let scientificName = Array.isArray(plant.scientific_name)? plant.scientific_name.join(" ") : plant.scientific_name || "";

        return (
            name.toLowerCase().includes(searchTerm.toLowerCase()) || scientificName.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    return (
        <section className="plantsSection">
            <div className="container py-5">
                <h1 className="text-center my-4"> A Little More Green 🍃</h1>

                <div className="row justify-content-center mb-5">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Find your plant𓂃⚘" value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {isLoading ? (<Loader />) : filteredPlants.length > 0 ? (
                    <div className="row g-4">
                        {filteredPlants.map((plant) => (<PlantCard key={plant.id} plant={plant} />))}
                    </div>
                ) : (<p className="text-center text-secondary">No plants found.</p>)}
            </div>
        </section>
    );
}

function PlantCard({ plant }) {
    return (
        <div className="col-md-4 col-lg-3">
            <div className="card h-100 border-0 shadow-sm">
                <img src={plant.default_image.medium_url} className="card-img-top" alt={plant.common_name || "Plant"} style={{height: "230px", objectFit: "cover"}}/>
                
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{plant.common_name || "Unknown Plant"}</h5>

                    <p className="card-text text-secondary">
                        {Array.isArray(plant.scientific_name)? plant.scientific_name[0] : plant.scientific_name}
                    </p>

                    <Link to={`/details/${plant.id}`} className="btn btn-outline-success w-100 mt-auto">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}

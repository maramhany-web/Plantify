import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPlantDetails } from "../../Services/API";
import Loader from "../../Components/Loader/Loader";

export default function Details() {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getPlantData();
    }, [id]);

    async function getPlantData() {
        try {
            let data = await getPlantDetails(id);
            setPlant(data);
        } catch (error) {
            console.log("Error:", error);
        } finally {
            setIsLoading(false);
        }
    }

    if (isLoading) {return <Loader />;}

    if (!plant) {
        return (
            <div className="container py-5 text-center">
                <h2>Plant details not available</h2>
                <Link to="/plants" className="btn btn-success">Back to Plants</Link>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <Link to="/plants" className="btn btn-outline-success mb-4">Back to Plants</Link>

            <div className="row g-4">
                <div className="col-md-5">
                    <img src={plant.default_image?.medium_url} alt={plant.common_name || "Plant"} className="img-fluid rounded w-100" style={{ height: "400px", objectFit: "cover" }}/>
                </div>

                <div className="col-md-7">
                    <h1>{plant.common_name || "Unknown Plant"}</h1>

                    <p className="text-secondary fst-italic">
                        {Array.isArray(plant.scientific_name)
                            ? plant.scientific_name[0]
                            : plant.scientific_name}
                    </p>

                    <hr />

                    {plant.family && <p><strong>Family:</strong> {plant.family}</p>}

                    {plant.origin && (
                        <p>
                            <strong>Origin:</strong>{" "}
                            {Array.isArray(plant.origin)
                                ? plant.origin.join(", ")
                                : plant.origin}
                        </p>
                    )}

                    {plant.type && <p><strong>Type:</strong> {plant.type}</p>}

                    {plant.cycle && <p><strong>Cycle:</strong> {plant.cycle}</p>}

                    {plant.watering && (
                        <p><strong>Watering:</strong> {plant.watering}</p>
                    )}

                    {plant.sunlight && (
                        <p>
                            <strong>Sunlight:</strong>{" "}
                            {Array.isArray(plant.sunlight)
                                ? plant.sunlight.join(", ")
                                : plant.sunlight}
                        </p>
                    )}

                    {plant.description && (
                        <>
                            <h4>About this plant</h4>
                            <p>{plant.description}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

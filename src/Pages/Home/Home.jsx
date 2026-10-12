
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="hero">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 heroText">
                        <p className="heroDes1">⚘𓂃EXPLORE THE NATURAL WORLD𓂃⚘</p>
                        <h1>Every Leaf Has a Story...</h1>
                        <p className="heroDes2"> Discover plant species, explore their unique features,and learn more about the beauty of nature.</p>
                        <Link className="heroBtn" to="/plants">Explore Plants</Link>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="heroImage"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
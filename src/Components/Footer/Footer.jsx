import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row align-items-center gy-3">
                    <div className="col-md-6">
                        <h4>🌿 Plantify</h4>
                        <p>Discover plants, explore their details, and learn about their origins, sunlight, watering needs, and more..</p>
                        <p>Powered by Perenual API.</p>
                    </div>

                    <div className="col-md-6 text-md-end">
                        <Link to="/">Home</Link>
                        <Link to="/plants">Explore Plants</Link>
                    </div>
                </div>
                <hr />

                <p className="copyright">
                    © 2026 Plantify. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

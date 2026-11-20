import CarBadge from "./CarBadge.jsx";

function CarCard({ brand, model, year, price, fuel, mileage, image, isAvailable }) {
    return (
        <article className="car-card">
            <div className="car-image">
                <img src={image} alt={`${brand} ${model}`} />
                <CarBadge isAvailable={isAvailable} price={price} />
            </div>

            <div className="car-info">
                <div className="car-title">
                    <h3>{brand} {model}</h3>
                    <strong>${price.toLocaleString("en-US")}</strong>
                </div>

                <div className="car-details">
                    <span>▣ {year}</span>
                    <span>⛽ {fuel}</span>
                    <span>◉ {mileage.toLocaleString("en-US")} km</span>
                </div>

                <button className="details-button">View Details</button>
            </div>
        </article>
    );
}

export default CarCard;

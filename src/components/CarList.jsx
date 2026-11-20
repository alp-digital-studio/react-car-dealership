import CarCard from "./CarCard.jsx";

function CarList({ cars }) {
    return (
        <section className="cars-section" id="cars">
            <div className="section-heading">
                <span></span>
                <h2>Our Cars</h2>
            </div>

            <div className="car-grid">
                {cars.map(car => (
                    <CarCard
                        key={car.id}
                        brand={car.brand}
                        model={car.model}
                        year={car.year}
                        price={car.price}
                        fuel={car.fuel}
                        mileage={car.mileage}
                        image={car.image}
                        isAvailable={car.isAvailable}
                    />
                ))}
            </div>
        </section>
    );
}

export default CarList;

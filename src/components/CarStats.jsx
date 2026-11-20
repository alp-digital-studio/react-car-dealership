function CarStats({ cars }) {
    const totalCars = cars.length;
    const availableCars = cars.filter(car => car.isAvailable).length;
    const soldCars = totalCars - availableCars;

    return (
        <section className="stats">
            <div className="stat-card">
                <span className="stat-icon red">🚘</span>
                <div>
                    <h2>{totalCars}</h2>
                    <p>Total Cars</p>
                </div>
            </div>

            <div className="stat-card">
                <span className="stat-icon green">✓</span>
                <div>
                    <h2>{availableCars}</h2>
                    <p>Available Cars</p>
                </div>
            </div>

            <div className="stat-card">
                <span className="stat-icon red">×</span>
                <div>
                    <h2>{soldCars}</h2>
                    <p>Not Available Cars</p>
                </div>
            </div>
        </section>
    );
}

export default CarStats;

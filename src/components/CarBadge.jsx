function CarBadge({ isAvailable, price }) {
    return (
        <div className="badges">
            <span className={isAvailable ? "badge available" : "badge sold"}>
                {isAvailable ? "Available" : "Sold"}
            </span>

            {price > 50000 && (
                <span className="badge luxury">Luxury</span>
            )}
        </div>
    );
}

export default CarBadge;

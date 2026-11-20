import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import CarStats from "./components/CarStats.jsx";
import CarList from "./components/CarList.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

const cars = [
    {
        id: 1,
        brand: "BMW",
        model: "M4",
        year: 2023,
        price: 75000,
        fuel: "Petrol",
        mileage: 12000,
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
        isAvailable: true
    },
    {
        id: 2,
        brand: "Mercedes-Benz",
        model: "C-Class",
        year: 2022,
        price: 48000,
        fuel: "Petrol",
        mileage: 25000,
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
        isAvailable: true
    },
    {
        id: 3,
        brand: "Audi",
        model: "A6",
        year: 2021,
        price: 42000,
        fuel: "Diesel",
        mileage: 38000,
        image: "https://images.unsplash.com/photo-1600705722908-4d0d9d4a7e5d?w=800",
        isAvailable: false
    },
    {
        id: 4,
        brand: "Porsche",
        model: "911",
        year: 2024,
        price: 135000,
        fuel: "Petrol",
        mileage: 5000,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
        isAvailable: true
    },
    {
        id: 5,
        brand: "Tesla",
        model: "Model 3",
        year: 2023,
        price: 39000,
        fuel: "Electric",
        mileage: 18000,
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800",
        isAvailable: true
    },
    {
        id: 6,
        brand: "Toyota",
        model: "Camry",
        year: 2022,
        price: 29000,
        fuel: "Hybrid",
        mileage: 32000,
        image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800",
        isAvailable: false
    }
];

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <main>
                <CarStats cars={cars} />
                <CarList cars={cars} />
            </main>
            <Footer />
        </>
    );
}

export default App;

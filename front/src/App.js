/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import './App.css';
import CardHotel from './components/cardHotel/CardHotel';
import FilterHotel from './components/filter/FilterHotel';
import Header from './components/header/Header';
import useFetch from './hooks/useFetch';

function App () {
    const [hotels, setHotels] = useState(null);
    const { data, isLoading, isError } = useFetch('http://localhost:4000/hotel');
    const ref = useRef(null);

    useEffect(() => {
        setHotels(data);
    }, [data]);
    // filter hotels by category
    const handleFilterCategory = (category) => {
        console.log(category);
        if (category.length === 0) {
            setHotels(data);
        } else {
            const newHotels = data.filter(hotel => category.includes(hotel.category));
            setHotels(newHotels);
        }
    };
    // filter hotels by price
    const handleFilterPrice = (price) => {
        // const max = Math.max(...price);
        if (price.length === 0) {
            setHotels(data);
        } else {
            const newHotel = data.filter(hotel => price.includes(hotel.price));
            setHotels(newHotel);
        }
    };

    if (isError) {
        return <h1>Error</h1>;
    }

    return (
        <div className="App">
            <Header refFilter={ref}/>
            <div className="container-hotel">
                {isLoading ? <h1>...Cargando</h1> : <CardHotel hotels={hotels} />}
                <FilterHotel ref={ref} handleFilterCategory={handleFilterCategory} handleFilterPrice={handleFilterPrice}/>
            </div>
        </div>
    );
}

export default App;

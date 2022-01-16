/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import './App.css';
import CardHotel from './components/cardHotel/CardHotel';
import FilterHotel from './components/filter/FilterHotel';
import Header from './components/header/Header';
import useFetch from './hooks/useFetch';

function App () {
    const [hotels, setHotels] = useState(null);
    const { data, isLoading, isError, setData } = useFetch('http://localhost:4000/hotel');

    useEffect(() => {
        setHotels(data);
    }, [data]);

    const handleFilterCategory = (category) => {
        console.log(category);
        if (category.length === 0) {
            setHotels(data);
        } else {
            const newHotels = data.filter(hotel => category.includes(hotel.category));
            setHotels(newHotels);
        }
    };

    if (isError) {
        return <div>Error</div>;
    }

    return (
        <div className="App">
            <Header />
            <div className="container-hotel">
                {isLoading ? <h1>...Cargando</h1> : <CardHotel hotel={hotels} />}
                <FilterHotel handleFilterCategory={handleFilterCategory}/>
            </div>
        </div>
    );
}

export default App;

import { useState, useEffect } from "react";
import "./App.css";
import CardHotel from "./components/cardHotel/CardHotel";
import Header from "./components/header/Header";


function App() {
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    getHotel()
     .then(res => setHotel(res))
  }, []);

  const getHotel = async() => {
    const resData = await fetch("http://localhost:4000/hotel");
    const data = resData.json();
    return data;
  };

  return (
    <div className="App">
      <Header/>
      {
        hotel.map(h => <CardHotel key={h.hotel_id} {...h}/>)
      }
    </div>
  );
}

export default App;

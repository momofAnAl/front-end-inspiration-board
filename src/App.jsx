import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import CardList from './components/CardList'


const kbaseURL = 'http://127.0.0.1:5000';


const getAllCardsApi = () => {
  return axios.get(`${kbaseURL}/cards`)
  .then( response => {
    const apiCards = response.data;
    console.log('API Response:', apiCards);
    const newCards = apiCards;
    return newCards;
  })
  .catch(error => {
    console.log(error);
  });
};


function App() {
  const [cardData, setCardData] = useState([]);

  const getAllCards = () => {
    getAllCardsApi()
    .then((cards) => {
      setCardData(cards);
    });
  };

  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <div className="App">
      <h2>Card For Pick-Me-Up Quotes</h2>
      <CardList cards={cardData} />
      </div>
    );
  }

export default App;
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import CardList from './components/CardList'
import NewCardForm from './components/NewCardForm'


const kbaseURL = 'http://127.0.0.1:5000';

// function that makes the API call to get all cards
const getAllCardsApi = () => {
  return axios.get(`${kbaseURL}/cards`)
  .then( response => {
    const apiCards = response.data;
    console.log('API Response:', apiCards);
    const newCards = apiCards;
    return newCards;
    // return apiCards;
  })
  .catch(error => {
    console.log(error);
  });
};


function App() {
  const [cardData, setCardData] = useState([]);

  //function to call the API and get all cards
  const getAllCards = () => {
    getAllCardsApi()
    .then((cards) => {
      setCardData(cards);
    });
  };
  // useEffect to call the function to get all cards
  useEffect(() => {
    getAllCards();
  }, []);

  const handleSubmit = (data) => {
    axios.put(`${kbaseURL}/cards`, data)
    .then((result) => {
      setCardData((prevData) => [...prevData, result.data]);
      console.log(result.data);
    })
    .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <NewCardForm handleSubmit={handleSubmit}/>
      <CardList cards={cardData} />
      </div>
    );
  }

export default App;
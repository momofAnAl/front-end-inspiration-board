import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import CardList from './components/CardList';
import NewCardForm from './components/NewCardForm';
import NewBoardForm from './components/NewBoardForm';

const kBaseURL = 'http://127.0.0.1:5000';

function App() {
    const [boardData, setBoardData] = useState([]);
    const [selectedBoardId, setSelectedBoardId] = useState(null);
    const [cardData, setCardData] = useState([]);

    // Fetch all boards
    useEffect(() => {
        axios.get(`${kBaseURL}/boards`)
            .then((response) => {
                console.log('Boards', response.data);
                setBoardData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching boards:', error);
            });
    }, []);

    // Add New Board
    const handleAddBoard = (board) => {
      axios.post(`${kBaseURL}/boards`, board)
          .then((response) => {
              console.log('New Board Added:', response.data);
              setBoardData((prevData) => [...prevData, response.data]);
          })
          .catch((error) => {
              console.error('Error adding board:', error);
          });
    };

    // Select Board
    const handleSelectBoard = (boardId) => {
      setSelectedBoardId(boardId);
    };


    // Fetch cards for selected board
    useEffect(() => {
        if (selectedBoardId) {
            axios.get(`${kBaseURL}/boards/${selectedBoardId}/cards`)
                .then((response) => {
                    console.log('Cards', response.data);
                    setCardData(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching cards:', error);
                });
        }
    }, [selectedBoardId]);

    // Add New Card
    const handleAddCard = (card) => {
        if (!selectedBoardId) {
            alert('Please select a board before adding a card.');
            return;
        }
        axios.post(`${kBaseURL}/boards/${selectedBoardId}/cards`, card)
            .then((response) => {
                console.log('New Card Added:', response.data);
                setCardData((prevData) => [...prevData, response.data]);
            })
            .catch((error) => {
                console.error('Error adding card:', error);
            });
    };

    // Delete a Card
    const handleDeleteCard = (id) => {
        axios.delete(`${kBaseURL}/cards/${id}`)
            .then(() => {
                console.log(`Card with id ${id} deleted.`);
                setCardData((prevData) => prevData.filter((card) => card.id !== id));
            })
            .catch((error) => {
                console.error('Error deleting card:', error);
            });
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Inspiration Board</h1>
            </header>
            <main>
                <div className="page-container">
                    {/* Board List */}
                    <div className="board-container">
                        <h2>Boards</h2>
                        <div className="boards-list">
                            {boardData.map((board) => (
                              <li key={board.id}>
                                <button
                                    key={board.id}
                                    onClick={() => handleSelectBoard(board.id)}
                                    className={`board-button ${
                                        selectedBoardId === board.id ? 'selected' : ''
                                    }`}
                                >
                                    {board.title} - {board.owner}
                                </button>
                              </li>    
                            ))};
                        </div>
                        <h2>Cards for Board {selectedBoardId || 'None Selected'}</h2>
                        <div className="cards-container">
                            <CardList cards={cardData} onDelete={handleDeleteCard} />
                        </div>
                    </div>

                    {/* Forms Section */}
                    <div className="form__row">
                        <div className="new-board-form-container">
                            <h2>Add a New Board</h2>
                            <NewBoardForm onBoardAdd={handleAddBoard} />
                        </div>

                        <div className="new-card-form-container">
                            <h2>Add a New Card</h2>
                            <NewCardForm boardId={selectedBoardId}
                            onCardAdd={handleAddCard} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
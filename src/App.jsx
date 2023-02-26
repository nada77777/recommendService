import './App.css';
import Button from './components/button/button';
import Select from './components/select/select';
import MainPage from './page/main_page/main_page';
import SelectPage from './page/select_page.jsx/select_page';

function App() {
  const genre = [
    'Action',
    'Comedy',
    'Drama',
    'Fantasy',
    'Horror',
    'Mystery',
    'Romance',
    'Thrille',
  ];
  const music = [
    'pop',
    'rock',
    'alternative',
    'R&B',
    'hip-hop',
    'classical',
  ];

  const country = [
    'Korea',
    'China',
    'Japan',
    'America',
    'France',
  ];
  return (
    <MainPage />
  );
}

export default App;

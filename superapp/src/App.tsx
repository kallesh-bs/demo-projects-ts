import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './components/apps/Index';
import BankDetails from './components/apps/BankDetails';
import GithubAccountFinder from './components/apps/GithubAccountFinder';
import MovieFinder from './components/apps/MovieFinder';
import TodoApp from './components/apps/TodoApp';
import WeatherDetails from './components/apps/WeatherDetails';
import Error404 from './components/apps/Error404';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index title={"Home"} />} />
        <Route path="/bank-details" element={<BankDetails title={'Bank Details'} />} />
        <Route path="/github-account-finder" element={<GithubAccountFinder title={'Github Account Finder'} />} />
        <Route path="/movie-finder" element={<MovieFinder />} />
        <Route path="/todo-app" element={<TodoApp title={'Todo App'} />} />
        <Route path="/weather-details" element={<WeatherDetails title={'Weather Details App'} />} />
        <Route path="*" element={<Error404 title={'Error'} />} />
      </Routes>
    </Router>
  );
}

export default App;
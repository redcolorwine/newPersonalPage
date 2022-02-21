
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/about';
import Blog from './components/blog/blog';
import Contacts from './components/contacts/contacts';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import MainPage from './components/mainPage/mainPage';

function App() {
  return (
    <div className="App">
      <div className='app-wrapper'>
        <Header/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/header/Header';
import TravelCards from './components/travel-cards/TravelCards';
import travelsData from "./data.js";
import Footer from './components/footer/Footer';

function App() {
  const travels = travelsData.map(item => {
    return (
      <TravelCards
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className='travel--page'>
      <Header />,
      <section className='travel--section'>
        {travels}
      </section>
      <Footer />
    </div>
  )
}

export default App;

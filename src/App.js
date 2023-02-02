import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import dataFile from "./data"


function App() {

  const data = dataFile
  const cards = data.map(item => {
    return <Card
      key={data.id}
      {...item}

      
      // item={item}
      // img={data.coverImg}
      // rating={data.stats.rating}
      // country={data.location}
      // reviewCount={data.stats.reviewCount}
      // title={data.title}
      // price={data.price}
      // openSpots={data.openSpots}
    />
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards--list'>
        {cards}
      </section>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import data from './data';
import './styles/menu.css';

function App() {

  const [category, setCategory] = useState('all');

  return (
    <div className="menu">
      <h1 className='title'>Our Menu</h1>
      <nav>
        <p onClick={()=>setCategory('all')}>All</p>
        <p onClick={()=>setCategory('breakfast')}>Breakfast</p>
        <p onClick={()=>setCategory('lunch')}>Lunch</p>
        <p onClick={()=>setCategory('shakes')}>Shakes</p>
      </nav>
      <main>
        {
          data.map(item=>{
            return(
              (category === 'all' || item.category === category) ? 
                <div key={item.id} className='item'>
                  <img src={item.img} alt={item.title} />
                  <div className='info'>
                    <div>
                      <h4>{item.title.split(' ').map(word=>word = word.split('')[0].toUpperCase() + word.slice(1)).reduce((accum, curr) => `${accum} ${curr}`)}</h4>
                      <h4>${item.price}</h4>
                    </div>
                    <p>{item.desc}</p>
                  </div>
                </div>
              : null
            )
          })
        }
      </main>
    </div>
  );
}

export default App;

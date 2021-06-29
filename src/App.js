import React, {useState} from 'react';
import './App.css';
import Data from './CardsData';



function App() {

const [items, setItems] = useState(Data);
 

const filterItem = (categoryItem) => {
  const updatedItem = Data.filter((val) => {
    return val.category === categoryItem;
  })

  setItems(updatedItem)
}

  return (
    <div>
      <div className="headingContener">

      <h3 className='head'>Photo Images Gallery </h3>
      </div>
      <div className=' allbuttons'>
            <button className='btn1' onClick={() => filterItem('MensCloth') }>Mens Cloth</button>
            <button className='btn1' onClick={() => filterItem('WomensCloth') }>Womens Cloth</button>
            <button className='btn1' onClick={() => filterItem('BabyCloth') }>Boys Cloth</button>
            <button className='btn1' onClick={() => filterItem('BoysCloth') }>Babys Cloth</button>
            <button className='btn1' onClick={() => setItems(Data) }>All</button>
            {/* <button className='btn1'>Mens Cloth</button> */}
            
        </div>
    <div className="MainCards">

      {
        items.map((val) => {
          return(
            <div className="card mb-3" key={val.id} >
            <div className="row g-0">
              <div className="col-md-4">
                <img src={val.images} className="img-fluid rounded-start" id='imagess' alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{val.title}</h5>
                  <p className="card-text">{val.desc}.</p>
                  <p>Price : {val.price}</p>
                </div>
              </div>
            </div>
          </div>
          )
        })
      }



       

    </div>
    </div>
  );
}

export default App;

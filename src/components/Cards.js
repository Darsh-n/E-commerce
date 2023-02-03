import { border } from '@mui/system';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CardsData from './CardsData';
import './style.css'
import { ADD } from '../redux/Action/action';


const Cards = () => {

  const [data, setData] = useState(CardsData);
  // console.log(data)

  const dispatch = useDispatch()

  const send = (e) =>{
    // console.log(e);
    dispatch(ADD(e));
  }

  return (

    <div className='container mt-3'>
      <h2 className='text-center'>Buy What you Want</h2>
      <div className='row d-flex justify-content-center align-item-center'>
      {
        data.map((element, id) => {
          return (
            <>
              
                <div className='card mx-2 mt-4' style={{ "width": '22rem', border:'none' }}>
                  <img className="card-img-top imaged" src={element.imgdata} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a onClick={() => send(element)} 
                    class="btn btn-primary">Add to Cart</a>
                  </div>
                

              </div>
            </>
          )
        })
        
      }
      
      </div>
    </div>


  );
}

export default Cards;

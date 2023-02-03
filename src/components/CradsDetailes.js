import React from 'react';
import './style.css';

const CradsDetailes = () => {
  return (
    <div className='container mt-2'>
      <h2 className='text-center'>Items Details Page</h2>
      <section className='container mt-3 detailbody'>
        <div className='itemsdetailes align-item-center'>
          <div className='items_img'>
          <img className='imgCD' src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt=''/>
          </div>
          <div className='detail'>
            <table className='tbl'>
              <tr>
                <td>
                  <p><strong>Restorant</strong> : Pizza Roti</p>
                  <p><strong>Price</strong> : Pizza Roti</p>
                  <p><strong>Dish</strong> : Pizza Roti</p>
                  <p><strong>Total</strong> : Pizza Roti</p>
                </td>
                <td>
                  <p><strong>Restorant</strong> : Pizza Roti</p>
                  <p><strong>Price</strong> : Pizza Roti</p>
                  <p><strong>Dish</strong> : Pizza Roti</p>
                  <p><strong>Total</strong> : Pizza Roti</p>
                </td>
              </tr>
            </table>

          </div>
        </div>

      </section>
    </div>
  );
}

export default CradsDetailes;

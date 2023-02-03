import React, {useState} from 'react';
import './style.css'
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'
import { useSelector } from 'react-redux';
import { Table } from '@mui/material';


const Header = () => {

    const getdata = useSelector((state)=> state.cartreducer.carts);
    console.log(getdata);



    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid mx-5">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">

                            </li>

                        </ul>


                    </div>
                    <Badge badgeContent={getdata.length
                    } color="primary"
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: 'pointer' }}></i>
                    </Badge>

                </div>
                <Menu
                    className='menuP'
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    {
                        getdata.length ?
                        <div className='card_detail' style={{width:'24rem', padding:10}}>
                            <Table>
                                <thead>
                                    <tr>Photo</tr>
                                    <tr>Restorant Name</tr>
                                </thead>
                            </Table>
                        </div> :
                          <div className='card_detail d-flex justify-content-center align-item-center popup'>
                          <i onClick={handleClose} className='fas fa-close smallclose closetag' ></i>
                          <p className='p'>Your cart is empty</p>
                          <img className='image' src='https://media1.giphy.com/media/kG3EDN0eXqq4V1Pd6W/200w.webp?cid=ecf05e473shstoe92x8p5u4vry88wl0jwoiwlj2a83e0b0mv&rid=200w.webp&ct=g' alt='cart'/>
                         </div>
                    }
                 
                </Menu>
            </nav>


        </>
    );
}

export default Header;

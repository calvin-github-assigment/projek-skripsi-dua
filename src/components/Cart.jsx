import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {delItem} from '../redux/actions/index'
import { NavLink } from 'react-router-dom'
import { formatter } from './utils/formatNumber'

const Cart = () => {
    const state = useSelector((state)=> state.addItem)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delItem(item))
    }

    const cartItems = (cartItem) => {
        return(
 
            <div className="modal-body">
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button onClick={()=>handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.img} alt={cartItem.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className="lead fw-bold">Rp. {formatter.format(cartItem.price)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Keranjang Kamu Kosong</h3>
                    </div>
                    </div>
                </div>
        );
    }

    const button = () => {
        return(
            <div className="container">
                <div className="row">
                {/* <NavLink className="nav-link" to="/data"><button type="button" class="btn btn-outline-primary">Tambah Product</button></NavLink> */}
                <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Order</NavLink>
                </div>
            </div>
        );
    }

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    )
}

export default Cart

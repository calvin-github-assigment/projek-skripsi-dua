import React from 'react'
import { NavLink } from 'react-router-dom';
import DATA from '../Data'
import { formatter } from '../components/utils/formatNumber'

const Barang = () => {

    const cardItem = (item) => {
        return (
            <div class="card my-5 py-4" key={item.id} style={{width: "18rem"}}>
                <img src={item.img} class="card-img-top" alt={item.title}/>
                    <div class="card-body text-center">
                        <h5 class="card-title">{item.title}</h5>
                        <p className="lead">Rp. {formatter.format(item.price)}</p>
                        <NavLink to={`/products/${item.id}`} class="btn btn-primary">Detail Product</NavLink>
                    </div>
</div>
                );
    }

                return (
                // <div>
                //     <div className="container py-5">
                //         <div className="row">
                //             <div className="col-12 text-center">
                //                 <h1>Barang</h1>
                //                 <hr />
                //             </div>
                //         </div>
                //     </div>

                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/assets/images/1953336.jpg" class="d-block w-100" alt="peti jenazah bagus" height="1100px"/>
                    </div>

                    
                    {/* <center>
                    <NavLink className="nav-link" to="/tambahproduct"><button type="button" class="btn btn-outline-success">Tambah Barang</button></NavLink>
                    </center> */}

                    <div className="container">
                        <div className="row justify-content-around">
                            {DATA.map(cardItem)}
                        </div>
                    </div>
                </div>
            // </div>
                )
}

                export default Barang

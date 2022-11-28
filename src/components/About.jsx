import React from 'react'
// import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-black fw-bold mb-4">Toko Kembang Deisy</h1>
                        <p className="lead mb-4">
                            Kembang Deisy adalah Toko yang menjual atau menyewakan perlengkapan rumah duka. 
                            Toko Kembang Deisy ini berada di Airmadidi Minahasa Utara. Di toko ini terdapat 
                            berbagai peralatan atau barang untuk kedukaan, ada peti jenazah, bunga krans dan 
                            mobil ambulance. Jika para konsumen mempunyai pertanyaan, silakan menghubungi 
                            kami di nomor WA yang ada di bawa ini atau jiks ingin mengetahui lokasi 
                            Toko Kembang Deisy, bisa klik link www.KembangDeisy.com.
                        </p>
                        <nav className='side menu'>
                            <ul>
                            <font size="10"> 081244008888 </font>
                            <img src="/assets/images/WhatsApp.png" type="button" height="60px" align="left" />
                            </ul>
                        </nav>
                        {/* <NavLink to="/contact" className="btn btn-outline-primary px-3">Hubungi Kami</NavLink> */}
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/mawar hitam.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

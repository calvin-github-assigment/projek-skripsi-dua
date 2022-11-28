import {useState} from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { formatter } from '../components/utils/formatNumber'
// import { useStateContext } from './utils/StateContext';
// import { AiOutlineMinus, AiOutlinePlus, } from 'react-icons/ai';
import axios from 'axios';

const Checkout = ({ props }) => {

    // form states
    // const [nama, setNama]=useState('');
    const [alamat, setAlamat]=useState('');
    const [nomortelepon, setNomorTelepon]=useState('');
    const [metodepembayaran, setMetodePembayaran]=useState('');
    const [namabarang, setNamaBarang]=useState('');
    const [hargabarang, setHargaBarang]=useState('');

  // submit event
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(alamat,nomortelepon,metodepembayaran,namabarang,hargabarang);
const data={
    // Nama:nama,
    Alamat:alamat,
    NomorTelepon:nomortelepon,
    MetodePembayaran:metodepembayaran,
    NamaBarang:namabarang,
    HargaBarang:hargabarang
    }
    axios.post('https://sheet.best/api/sheets/39e32afc-ede6-4aa3-8c04-62783293ab63',data).then((response)=>{
        console.log(response);
        // clearing form fields
        // setNama('');
        setAlamat('');
        setNomorTelepon('');
        setMetodePembayaran('');
        setNamaBarang('');
        setHargaBarang('');
    })
}

    const state = useSelector((state) => state.addItem)

    var total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <><span className="text-muted" >Rp. {formatter.format(item.price)}</span></>
            </li>
        );
    }

    const { _user } = props;

    const pesan = async() => {
        const req = await fetch(`http://localhost:4000/api/pesan`, {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({
            pemesan: _user._id, // ID dari pemesan (diambil waktu login. jadi waktu login backend mo kirim _id pengguna. _id itu yang m dipake dsni)
            alamat: alamat, // alamat (string)
            noTelepon: nomortelepon, // nomor telepon / wa (string. string karena tu nomor telepon nd m pake for b hitung. klo m dipake for b hitung2, baru tu 'string' ganti jadi 'Number' di backend)
            jenisPembayaran: metodepembayaran, // jenisPembayaran (string)
            namaBarang: namabarang, // nama barang (string)
            hargaBarang: hargabarang, // harga barang (string. mar klo m ganti jadi number, ganti jo di backend. di folder models > file Pesanan.js > di baris 21 itu 'String' ganti jadi 'Number')
          }),
        });
      
        const res = await req.json();
      
        console.log(res);
      
        if(res.status === 'success') {
            // code jika berhasil tambah pesanan
        }
        else {
          // code jika gagal tambah pesanan
        }
    };

    return (
        <>

    <div class="carousel-inner">
          <div class="carousel-item active">
      <img src="/assets/images/depositphotos_209883116-stock-photo-roses-on-a-stone-surface.jpg" class="d-block w-100" alt="peti jenazah bagus" height="700px"/>
    </div>

    <div className="modal-header">
      <div className="modal-body">
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Harga Barang</span>
                            <span className="badge bg-primary rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {state.map(itemList)}

                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total</span>
                                <strong>Rp. {formatter.format(total)}</strong>
                            </li>
                        </ul>

                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="text-light">Alamat Tagihan</h4>
                        <form autoComplete='off' className='form-group'onSubmit={handleSubmit}>
                        <div className="row g-3">


                                {/* <div className="col-12">
                                    <label htmlFor="exampleInputNama1" className="form-label">Nama</label>
                                    <input type="text" className="form-control" id="exampleInputNama1" placeholder="nama anda" 
                                    onChange={(e)=>setNama(e.target.value)} value={nama}/>
                                </div> */}

                                <div className="col-12">
                                    <label htmlFor="exampleInputAlamat1" className="text-light">Alamat</label>
                                    <input type="address" className="form-control" id="exampleInputAlamat1" placeholder="alamat lengkap anda" 
                                    onChange={(e)=>setAlamat(e.target.value)} value={alamat}/>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="exampleInputNomorTelepon1" className="text-light">Nomor Telepon / WA</label>
                                    <input type="text" className="form-control" id="exampleInputNomorTelepon1" placeholder="nomor telepon atau nomor Wa anda" 
                                    onChange={(e)=>setNomorTelepon(e.target.value)} value={nomortelepon} />
                                </div>

                                <div className="col-md-7">
                                    <label htmlFor="country" className="text-light">Metode Pembayaran</label>
                                    <select type="payment" className="form-select" id="exampleInputPembayaran1"
                                    onChange={(e)=>setMetodePembayaran(e.target.value)} value={metodepembayaran}>
                                        <option value="">Pilih...</option>
                                        <option>Internet Banking (NoRek : 531702030494554)</option>
                                        <option>Aplikasi Dana (NoDana : 082398080544)</option>
                                        <option>COD (Bayar Ditempat)</option>
                                    </select>
                                </div>

                                {/* <div className="col-12">
                                    <label htmlFor="exampleInputPembayaran1" className="form-label">Jenis Pembayaran</label>
                                    <input type="payment" className="form-control" id="exampleInputPembayaran1" placeholder="silakan masukkan jenis pembayaran yang anda inginkan" 
                                    onChange={(e)=>setMetodePembayaran(e.target.value)} value={metodepembayaran} />
                                    <div id="emailHelp" className="form-text">1. Transfer bank ( NoRek : 521601020394539 )</div>
                                    <div id="emailHelp" className="form-text">2. Dana ( NoDana : 082293090547 )</div>
                                    <div id="emailHelp" className="form-text">3. COD ( Bayar Ditempat )</div>
                                </div> */}

                                <div className="col-12">
                                    <label htmlFor="exampleInputNamaBarang1" className="text-light">Nama Barang</label>
                                    <input type="item-name" className="form-control" id="exampleInputNamaBarang1" placeholder="masukkan nama barang yang anda pesan" 
                                    onChange={(e)=>setNamaBarang(e.target.value)} value={namabarang}/>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="exampleInputHargaBarang1" className="text-light">Harga Barang</label>
                                    <input type="item-price" className="form-control" id="exampleInputHargaBarang1" placeholder="masukkan harga barang yang anda pesan" 
                                    onChange={(e)=>setHargaBarang(e.target.value)} value={hargabarang}/>
                                </div>

                                {/* <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">Kota</label>
                                    <select className="form-select" id="kota" required="">
                                        <option value="">Pilih...</option>
                                        <option>Manado</option>
                                        <option>Minahasa Utara</option>
                                        <option>Bitung</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div> */}

                                {/* <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">Daerah</label>
                                    <select className="form-select" id="daerah" required="">
                                        <option value="">Pilih...</option>
                                        <option>Paal 2</option>
                                        <option>Maumbi</option>
                                        <option>Airmadidi</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div> */}
                            
                            

                            {/* <hr className="my-4" />

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="same-address" />
                                <label className="form-check-label" htmlFor="same-address">Alamat pengiriman sama dengan alamat penagihan saya</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="save-info" />
                                <label className="form-check-label" htmlFor="save-info">Simpan informasi ini Untuk lain kali</label>
                            </div> */}

                            {/* <hr className="my-4" /> */}

                            {/* <div className="col-md-7">
                                    <label htmlFor="country" className="form-label">Metode Pembayaran</label>
                                    <select className="form-select" id="kota" required="">
                                        <option value="">Pilih...</option>
                                        <option>Internet Banking (NoRek : 531702030494554)</option>
                                        <option>Aplikasi Dana (NoDana : 082398080544)</option>
                                        <option>COD (Bayar Ditempat)</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div> */}

                            {/* <hr className="my-4" /> */}

                            {/* <h4 className="mb-3">Pembayaran</h4> */}

                            {/* <div className="my-3">
                                <div className="form-check">
                                    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="paypal">Internet Banking (NoRek : 531702030494554)</label>
                                </div>
                                <div className="form-check">
                                    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="paypal">Aplikasi Dana (NoDana : 082398080544)</label>
                                </div>
                                <div className="form-check">
                                    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="paypal">COD (Bayar Ditempat)</label>
                                </div>
                            </div> */}

                            
                            {/* <label>Bukti Pembayaran</label>
                            <input type="file" className='form-control' id="file"></input>
                            <br /> */}

                            <hr className="my-4" />
                            <div style={{display:'flex',justifyContent:'flex-end'}}>
                            <NavLink className="nav-link w-100 btn btn-primary btn-lg text-light" aria-current="page" to="/afterCheckout" onClick={pesan}>
                                Submit
                                {/* <button className="w-100 btn btn-primary btn-lg" to="" type="submit" onClick={pesan} >Submit</button> */}
                            </NavLink>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
</div>
        </>
    )
}

export default Checkout

import React from 'react';
import '../index.css';
import { useState, useEffect } from 'react';

export default function Admin() {
  const [dataPengguna, setDataPengguna] = useState(null);
  const [daftarPesanan, setDaftarPesanan] = useState(null);
  const [penggunaTerpilih, setPenggunaTerpilih] = useState(null);
  const [dataPesanan, setDataPesanan] = useState(null);
  const [pesananTerpilih, setPesananTerpilih] = useState(null);
  const [ubahDataPesanan, setUbahDataPesanan] = useState({
    _id: null,
    alamat: '',
    noTelepon: '',
    jenisPembayaran: '',
    namaBarang: '',
    hargaBarang: '',
    lunas: '',
  });

  const ambilDataPengguna = async () => {
    const req = await fetch(`http://localhost:4000/api/pengguna`);
    const res = await req.json();

    console.log(`ambilDataPengguna`, res);
    
    if(res.status === 'success') {
      // code jika data berhasil diambil dan data tidak kosong
      setDataPengguna(res.data.filter(d => d.type !== 'Admin'));
    }
    else {
      // code jika data tidak berhasil diambil atau data kosong
    }
  };

  const ambilDaftarPesanan = async() => {
    const req = await fetch(`http://localhost:4000/api/pesanan`);
    const res = await req.json();

    console.log(`ambilDataPesanan`, res);

    if(res.status === 'success') {
      // code jika data berhasil diambil dan data tidak kosong
      setDaftarPesanan(res.data);
    }
    else {
      // code jika data tidak berhasil diambil atau data kosong
    }
  }

  const pilihPengguna = (val) => {
    setPenggunaTerpilih(val);
    bersihkanPesananTerpilih();
    setDataPesanan(daftarPesanan.filter(d => d.pemesan === val));
  };

  const pilihPesanan = (val) => {
    setPesananTerpilih(val._id);
    setUbahDataPesanan({
      _id: val._id,
      alamat: val.alamat,
      noTelepon: val.noTelepon,
      jenisPembayaran: val.jenisPembayaran,
      namaBarang: val.namaBarang,
      hargaBarang: val.hargaBarang,
      lunas: val.lunas,
    });
  };

  const bersihkanPesananTerpilih = () => {
    setPesananTerpilih(null);
    setUbahDataPesanan({
      _id: null,
      alamat: '',
      noTelepon: '',
      jenisPembayaran: '',
      namaBarang: '',
      hargaBarang: '',
      lunas: '',
    });
  };

  const lakukanPerubahanDataPesanan = async(e) => {
    e.preventDefault();

    const req = await fetch(`http://localhost:4000/api/ubahPesanan`, {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify(ubahDataPesanan),
    });
    const res = await req.json();

    console.log(`res`, res);

    if(res.status === 'success') {
      // code jika berhasil melakukan perubahan
    }
    else {
      // code jika gagal melakukan perubahan
    }
    
    setPenggunaTerpilih(null);
    ambilDaftarPesanan();
    bersihkanPesananTerpilih();
  };

  useEffect(() => {
    ambilDataPengguna();
    ambilDaftarPesanan();
  }, []);

  return(

    <div class="carousel-inner">
          <div class="carousel-item active">
      <img src="/assets/images/awan-gunawan-08.jpg" class="d-block w-100" alt="peti jenazah bagus" height="1500px"/>
    </div>

    <div className="modal-header">
      <div className="modal-body">
            <div className="container my-5">
                <div className="row g-5">

    <div className='adminPage'>

      <div className='adminPage-tableWrapper'>

        {/* tabel pengguna */}
        <div className='adminPage-table'>
          <h2 className="text-light">Tabel Pengguna</h2>
          <table className='table'>
            <thead>
              <tr>
                <th scope="col" className="text-light">#</th>
                <th scope="col" className="text-light">Email Pengguna</th>
              </tr>
            </thead>
            <tbody className='text-light'>
              { (dataPengguna === null) && <div className="text-light">Data Kosong</div> }
              { ( dataPengguna !== null) && dataPengguna.map((d, index) =>
              <tr key={index} onClick={() => pilihPengguna(d._id)} style={{backgroundColor: `${(d._id === penggunaTerpilih) ? 'blue' : ''}`}}>
                <th scope="col">{index+1}</th>
                <th scope="col">{d.email}</th>
                <th scope="col">{d.name}</th>
              </tr> ) }
            </tbody>
          </table>
        </div>

        {/* tabel pesanan */}
        <div className='adminPage-table'>
          <h2 className="text-light">Tabel Pesanan</h2>
          <table className='table text-light' >
            <thead>
              <tr>
                <th scope="col" className="text-light" >#</th>
                <th scope="col" className="text-light">Alamat</th>
                <th scope="col" className="text-light">No. Telepon / WA</th>
                <th scope="col" className="text-light">Metode Pembayaran</th>
                <th scope="col" className="text-light">Nama Barang</th>
                <th scope="col" className="text-light">Harga Barang</th>
                <th scope="col" className="text-light">Status</th>
              </tr>
            </thead>
            <tbody>
              { (penggunaTerpilih === null) && <div className="text-light">Silahkan memilih pengguna terlebih dahulu</div> }
              { (penggunaTerpilih !== null && dataPesanan === null) && <div className="text-light">Data Kosong</div> }
              { (penggunaTerpilih !== null && dataPesanan !== null) && dataPesanan.map((d, index) => 
              <tr key={index} onClick={() => pilihPesanan(d)} style={{backgroundColor: `${(d._id === pesananTerpilih) ? 'blue' : ''}`}}>
                <th scope="col">{index+1}</th>
                <th scope="col">{d.alamat}</th>
                <th scope="col">{d.noTelepon}</th>
                <th scope="col">{d.jenisPembayaran}</th>
                <th scope="col">{d.namaBarang}</th>
                <th scope="col">{d.hargaBarang}</th>
                <th scope="col">{(d.lunas === true) ? 'Sudah' : 'Belum'}</th>
              </tr>) }
            </tbody>
          </table>
        </div>
      </div>

      <div className="modal-header">
        <div className="modal-body">
            <div className="container my-5">
                <div className="row g-5">

      <form>
        <h2 className="text-light">Ubah Data Pesanan</h2>
        
        
        <label className="text-light">Alamat</label>
        <input type='text' 
        onChange={e => setUbahDataPesanan({...ubahDataPesanan, alamat: e.target.value})}
        value={ubahDataPesanan.alamat} />
        
        <label className="text-light">No. Telepon / WA</label>
        <input type='text'
        onChange={e => setUbahDataPesanan({...ubahDataPesanan, noTelepon: e.target.value})} 
        value={ubahDataPesanan.noTelepon} />

        <label className="text-light">Metode Pembayaran</label>
        <input type='text' 
        onChange={e => setUbahDataPesanan({...ubahDataPesanan, jenisPembayaran: e.target.value})} 
        value={ubahDataPesanan.jenisPembayaran} />

        <label className="text-light">Nama Barang</label>
        <input type='text' 
        onChange={e => setUbahDataPesanan({...ubahDataPesanan, namaBarang: e.target.value})} 
        value={ubahDataPesanan.namaBarang} />

        <label className="text-light">Harga Barang</label>
        <input type='text' 
        onChange={e => setUbahDataPesanan({...ubahDataPesanan, hargaBarang: e.target.value})} 
        value={ubahDataPesanan.hargaBarang} />

        <label className="text-light">Status</label>
        <div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="lunas" id="lunas1" 
            checked={(ubahDataPesanan.lunas === true) ? true : false} 
            onClick={() => setUbahDataPesanan({...ubahDataPesanan, lunas: true})} />
            <label className="form-check-label text-light" for="lunas1">Sudah Lunas</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="lunas" id="lunas2" 
            checked={(ubahDataPesanan.lunas === false) ? true : false} 
            onClick={() => setUbahDataPesanan({...ubahDataPesanan, lunas: false})} />
            <label className="form-check-label text-light" for="lunas2">Belum Lunas</label>
          </div>
        </div>

        <button onClick={e => lakukanPerubahanDataPesanan(e)} 
        className="btn-primary btn-lg ">Ubah Data Pesanan</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
</div>
  );
};

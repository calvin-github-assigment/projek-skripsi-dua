import React from 'react';
import { useState, useEffect } from 'react';

export default function AfterCheckout({ props }) {
  const { _user } = props;
  const [dataPesanan, setDataPesanan] = useState(null);

  const ambilDataPesanan = async() => {
    const req = await fetch(`http://localhost:4000/api/pesanan`);
    const res = await req.json();

    console.log(`ambilDataPesanan`, res);

    if(res.status === 'success') {
      // code jika data berhasil diambil dan data tidak kosong
      setDataPesanan(res.data.filter(d => d.pemesan === _user._id ));
    }
    else {
      // code jika data tidak berhasil diambil atau data kosong
    }
  };

  useEffect(() => {
    ambilDataPesanan();
  }, []);
  
  return(
    <div>
      <div className='adminPage-table'>
        <h2>Tabel Pesanan Pengguna</h2>
        <table className='table'>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Alamat</th>
              <th scope="col">No. Telepon / WA</th>
              <th scope="col">Metode Pembayaran</th>
              <th scope="col">Nama Barang</th>
              <th scope="col">Harga Barang</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            { (dataPesanan === null) && <div>Silahkan memilih pengguna terlebih dahulu</div> }
            { (dataPesanan !== null && dataPesanan === null) && <div>Data Kosong</div> }
            { (dataPesanan !== null && dataPesanan !== null) && dataPesanan.map((d, index) => 
            <tr key={index}>
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
  );
}

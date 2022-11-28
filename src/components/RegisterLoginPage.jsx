import React, { useState } from 'react';

export default function RegsiterLoginPage({ props }) {
  const { _setUser } = props;
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerNama, setRegisterNama] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const register = async() => {
    const req = await fetch(`http://localhost:4000/api/register`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        email: registerEmail, // email (string)
        nama: registerNama, // nama (string)
        password: registerPassword, // password (string)
      }),
    });
  
    const res = await req.json();
  
    console.log(res);
  
    if(res.status === 'success') {
      // code jika berhasil tambah pengguna
      _setUser(res.data);
    }
    else {
      // code jika gagal tambah pengguna
    }
  };

  const login = async() => {
    const req = await fetch(`http://localhost:4000/api/login?email=${loginEmail}&password=${loginPassword}`);
  
    const res = await req.json();
  
    console.log(res);
  
    if(res.status === 'success') {
      // code jika berhasil login
      _setUser(res.data);
    }
    else {
      // code jika gagal login
    }
  };


  return(
    <div>

      {/* <!-- Tampilan Register --> */}

      <div class="carousel-inner">
          <div class="carousel-item active">
      <img src="/assets/images/2018-09-22-00-11-58-850x514.jpg" class="d-block w-100" alt="peti jenazah bagus" height="800px"/>
    </div>

      {/* <!-- Modal --> */}
      <div>
        <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
          {/* <h5 className="modal-title" id="exampleModalLabel">Daftar</h5> */}
          <img src="/assets/images/Registrasi.png" width="100px" align="left"></img>
          <div id="emailHelp" className="form-text">Jika belum ada akun, bisa daftar di sini</div>
        </div>
        
      <div className="modal-body">
      
        <div className="mb-12">
          <label htmlFor="exampleInput" className="form-label">Nama</label>
            <input type='text' className="form-control" id="exampleInput" 
            onChange={e => setRegisterNama(e.target.value)} value={registerNama} />
        </div>

      <div className="mb-12">
      <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" 
          onChange={e => setRegisterEmail(e.target.value)} value={registerEmail} />
      </div>

      
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"  
          onChange={e => setRegisterPassword(e.target.value)} value={registerPassword} />
      

      <button onClick={register} type="submit" className="btn btn-outline-primary w-100 mt-5" 
      variant="contained" color="primary">Daftar Akun & Masuk</button>

      <div className="modal-header"></div>

      {/* <!-- Tampilan Login --> */}
      <div className="modal-header">
        {/* <h5 className="modal-title" id="exampleModalLabel">Masuk</h5> */}
        <img src="/assets/images/Login.png" width="100px" align="left"></img>
        <div id="emailHelp" className="form-text">Jika sudah punya akun, bisa langsung masuk di sini</div>
      </div>
      <div className="mb-12">
      <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
        <input type="email" className="form-control" id="exampleInputEmail1"  
        onChange={e => setLoginEmail(e.target.value)} value={loginEmail} />
      </div>

      <div className="mb-12">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" 
        onChange={e => setLoginPassword(e.target.value)} value={loginPassword} />
      </div>

      <button onClick={login} type="submit" className="btn btn-outline-success w-100 mt-5" 
      variant="contained" color="success">Masuk</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

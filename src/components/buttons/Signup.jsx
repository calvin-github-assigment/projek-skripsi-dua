import {useState} from 'react'
import axios from 'axios';


const Signup = () => {

    // form states
    const [nama, setNama]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

  // submit event
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(nama,email,password);
const data={
    Nama:nama,
    Email:email,
    Password:password
    }
    axios.post('https://sheet.best/api/sheets/39e32afc-ede6-4aa3-8c04-62783293ab63',data).then((response)=>{
        console.log(response);
        // clearing form fields
        setNama('');
        setEmail('');
        setPassword('');
    })
}

const register = async() => {
  const req = await fetch(`http://localhost:4000/api/register`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      nama: nama, // email (string)
      email: email, // nama (string)
      password: password, // password (string)
    }),
  });

  const res = await req.json();

  console.log(res);

  if(res.status === 'success') {
    // code jika berhasil tambah pengguna
  }
  else {
    // code jika gagal tambah pengguna
  }
};

    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                <span className="fa fa-user-plus me-1"></span> Registrasi
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="signupModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Registrasi</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        {/* <a href="https://accounts.google.com/v3/signin/identifier?dsh=S504188392%3A1667452944619059&authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&hl=en&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession">
                        <button className="btn btn-primary w-100 mb-4">
                            <span className="fa fa-google me-2"></span> Sign in With Google
                        </button>
                        </a> */}
                        {/* <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%25224mixst1iz45zatr07js1wc6dae1ormyq91ygt2e8gy6ug91lea1zi%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Den_US%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Da0c8d171-4b34-45e9-855d-b3515e19c4e3%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25224mixst1iz45zatr07js1wc6dae1ormyq91ygt2e8gy6ug91lea1zi%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=en_GB&pl_dbl=0">
                        <button className="btn btn-primary w-100 mb-4">
                            <span className="fa fa-facebook me-2"></span> Sign in With Facebook
                        </button>
                        </a>  */}
                            <form autoComplete='off' className='form-group'onSubmit={handleSubmit}>
                                <div className="mb-12">
                                    <label htmlFor="exampleInput" className="form-label">Nama</label>
                                    <input type="text" className="form-control" id="exampleInput"
                                    onChange={(e)=>setNama(e.target.value)} value={nama} />
                                </div>
                                <div className="mb-12">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" 
                                    onChange={(e)=>setEmail(e.target.value)} value={email} />
                                </div>
                                <div className="mb-12">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" 
                                    onChange={(e)=>setPassword(e.target.value)} value={password} />
                                </div>
                                {/* <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Ingatkan Saya</label>
                                </div> */}
                                <div style={{display:'flex',justifyContent:'flex-end'}}>
                                <button onClick={register} type="submit" className="btn btn-outline-primary w-100 mt-5" 
                                variant="contained" color="primary">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup

// import React, { Component } from 'react';
// import { auth, createUserDocument } from '../../Config/firebase';

// class Singup extends Component {
//   state = { displayName: '', email: '', password: '' };

//   handleChange = (e) => {
//     const { name, value } = e.target;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     const { email, password, displayName } = this.state;
//     try {
//       const { user } = await auth.createUserWithEmailAndPassword(
//         email,
//         password
//       );
//       console.log(user);
//       await createUserDocument(user, { displayName });
//     } catch (error) {
//       console.log('error', error);
//     }

//     this.setState({ displayName: '', email: '', password: '' });
//   };

//   render() {
//     const { displayName, email, password } = this.state;
//     return (
//       <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <form className="signup-login" onSubmit={this.handleSubmit}>
//           <h2>Signup</h2>

//           <input
//             type="name"
//             name="displayName"
//             value={displayName}
//             onChange={this.handleChange}
//             placeholder="Name"
//           />
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//             placeholder="Email"
//           />
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//             placeholder="Password"
//           />
//           <button>Signup</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Singup;
import {useState} from 'react'
import axios from 'axios';

const Contact = () => {

    // form states
    const [nama, setNama]=useState('');
    const [email, setEmail]=useState('');
    const [pertanyaan, setPertanyaan]=useState('');

    // submit event
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(nama,email,pertanyaan);
    const data={
        Nama:nama,
        Email:email,
        Pertanyaan:pertanyaan
        }
        axios.post('https://sheet.best/api/sheets/c47be6cd-dbba-4501-a8ea-fd635677ddc9',data).then((response)=>{
            console.log(response);
            // clearing form fields
            setNama('');
            setEmail('');
            setPertanyaan('');
        })
    }
    


    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Anda Memiliki Pertannyan dan Saran ?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src="/assets/images/contact.png" alt="Contact Us" height="300px" width="300px" />
                    </div>
                    <div className="col-md-6">
                        <div>
                        <form autoComplete='off' className='form-group'onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">Nama</label>
                                <input type="text" class="form-control" id="exampleForm" placeholder="nama lengkap anda"
                                onChange={(e)=>setNama(e.target.value)} value={nama}/>
</div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="gmail anda" 
                                onChange={(e)=>setEmail(e.target.value)} value={email}/>
</div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Pertanyaan</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                                    onChange={(e)=>setPertanyaan(e.target.value)} value={pertanyaan}></textarea>
                                </div>
                                <div style={{display:'flex',justifyContent:'flex-end'}}>
                                <button type="submit" class="btn btn-outline-primary">Kirim Pesan</button>  
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
            )
}

            export default Contact

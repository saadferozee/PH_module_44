import React, { useState } from 'react';

const ControlledField2 = () => {

    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Password:', e.target.password.value, 'Email:', e.target.email.value);
    }

    const handleSetEmail = e => {
        console.log(e.target.value);
        const updatingFormData = formData;
        updatingFormData.email = e.target.value;

        setFormData(updatingFormData);
        console.log(formData);
    }

    const handleSetPassword = e => {
        console.log(e.target.value);
        const updatingFormData = formData;
        updatingFormData.password = e.target.value;

        setFormData(updatingFormData);
        console.log(formData);
    }

    return (
        <div className='border-2 w-full min-h-[40vh] text-center'>
            <h2 className='my-7 font-mono text-2xl'>useState({`{email:'', password:''}`})</h2>
            <hr className='m-3.5' />
            <div className='my-[4vh] p-12'>
                <form className='my-10 flex flex-col gap-2.5' onSubmit={handleSubmit}>
                    <input 
                        className='border py-1 px-2.5 font-thin' 
                        type="email" 
                        name="email" 
                        defaultValue={formData.email}
                        onChange={handleSetEmail}
                        required 
                        placeholder='Enter Your Email' 
                    />
                    <input
                        className='border py-1 px-2.5 font-thin'
                        type="password"
                        name='password'
                        defaultValue={formData.password}
                        onChange={handleSetPassword}
                        required
                        placeholder='Enter Password'
                    />
                    {/* <p className='text-red-600 font-thin text-xs'>{error}</p> */}
                    <input className='border bg-[#00000020] py-1 px-2.5 cursor-pointer' type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
};

export default ControlledField2;
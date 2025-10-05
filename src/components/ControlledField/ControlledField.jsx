import React from 'react';
import { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState(''); 
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Password:', e.target.password.value);
    }

    const handleSetPassword = e => {
        setPassword(e.target.value);
        // console.log(e.target.value);

        if ( e.target.value.length < 6 ) {
            setError('Password must be 6 character longer');
        } else {
            setError('');
        }
    }

    return (
        <div className='border-2 w-full min-h-[40vh] text-center'>
            <h2 className='my-7 font-mono text-2xl'>useState(password)</h2>
            <hr className='m-3.5' />
            <div className='my-[4vh] p-12'>
                <form className='my-10 flex flex-col gap-2.5' onSubmit={handleSubmit}>
                    <input className='border py-1 px-2.5 font-thin' type="email" name="email" required placeholder='Enter Your Email' />
                    <input 
                        className='border py-1 px-2.5 font-thin' 
                        type="password" 
                        name='password' 
                        defaultValue={password} 
                        onChange={handleSetPassword} 
                        required 
                        placeholder='Enter Password' 
                    />
                    <p className='text-red-600 font-thin text-xs'>{error}</p>
                    <input className='border bg-[#00000020] py-1 px-2.5 cursor-pointer' type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
};

export default ControlledField;
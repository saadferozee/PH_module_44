import React from 'react';
import useInputField from '../../hooks/useInputField2/useInputField2';

const UsingCustomHook2 = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log('clicked')
    }

    return (
        <div className='border-2 w-full min-h-[40vh] text-center'>
            <h2 className='my-7 font-mono text-2xl'>{`{...useInputField('')}`}</h2>
            <hr className='m-3.5' />
            <div className='my-[4vh] p-12'>
                <form className='my-10 flex flex-col gap-2.5' onSubmit={handleSubmit}>
                    <input
                        className='border py-1 px-2.5 font-thin' 
                        type="email" 
                        name="email" 
                        {...useInputField()}
                        required 
                        placeholder='Enter Your Email' 
                    />
                    <input
                        className='border py-1 px-2.5 font-thin'
                        type="password"
                        name='password'
                        {...useInputField()}
                        required
                        placeholder='Enter Password'
                    />
                    <input className='border bg-[#00000020] py-1 px-2.5 cursor-pointer' type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
};

export default UsingCustomHook2;
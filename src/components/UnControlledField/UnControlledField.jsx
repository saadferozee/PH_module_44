import React, { useRef } from 'react';

const UnControlledField = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(`Email: ${emailRef.current.value} Password: ${passwordRef.current.value}`);
    }

    return (
        <div className='border-2 w-full min-h-[40vh] text-center'>
            <h2 className='my-7 font-mono text-2xl'>const passwordRef = useRef('')</h2>
            <hr className='m-3.5' />
            <div className='my-[4vh] p-12'>
                <form 
                    className='my-10 flex flex-col gap-2.5' 
                    onSubmit={handleSubmit}>
                    <input
                        className='border py-1 px-2.5 font-thin'
                        type="email"
                        name="email"
                        ref={emailRef}
                        required
                        placeholder='Enter Your Email'
                    />
                    <input
                        className='border py-1 px-2.5 font-thin'
                        type="password"
                        name='password'
                        ref={passwordRef}
                        required
                        placeholder='Enter Password'
                    />
                    {/* <p className='text-red-600 font-thin text-xs'>{error}</p> */}
                    <input className='border bg-gray-200 py-1 px-2.5 cursor-pointer' type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
};

export default UnControlledField;
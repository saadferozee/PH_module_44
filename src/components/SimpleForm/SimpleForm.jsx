
import React from 'react';

const SimpleForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const inputName = event.target.name;
        const inputEmail = event.target.email;
        console.log(inputName.value, inputEmail.value);
        inputName.value = '';
        inputEmail.value = '';
    }

    return (
        <div className='border-2 w-full min-h-[40vh] text-center'>
            <h2 className='my-7 font-mono text-2xl'>event.target.name.value</h2>
            <hr className='m-3.5' />
            <div className='my-[4vh] p-12'>
                <form className='my-10 flex flex-col gap-2.5' onSubmit={handleSubmit}>
                    <input className='border py-1 px-2.5 font-thin' type="text" name="name" placeholder='Enter Your Name' />
                    {/* <br /> */}
                    <input className='border py-1 px-2.5 font-thin' type="email" name='email' placeholder='Enter your Email' />
                    {/* <br /> */}
                    <input className='border bg-gray-200 py-1 px-2.5 cursor-pointer' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default SimpleForm;
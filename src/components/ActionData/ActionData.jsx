import React from 'react';

const ActionData = () => {

    const handleFromAction = (formData) => {
        console.log(formData.get('name'));
        console.log(formData.get('email'));
    }

    return (
        <div className='border-2 w-full min-h-[40vh] text-center'>
            <h2 className='my-7 font-mono text-2xl'>formData.get('name')</h2>
            <hr className='m-3.5' />
            <div className='my-[4vh] p-12'>
                <form className='my-10 flex flex-col gap-2.5' action={handleFromAction}>
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

export default ActionData;
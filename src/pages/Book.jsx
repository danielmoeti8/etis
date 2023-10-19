import React from 'react';

function Book () {
    return (
        <div name="book" className='w-full h-full bg-black flex justify-center p-4 mt-8'>
            <form action='POST' className='flex flex-col max-w-[600px] w-full'>
               <div className='pd-8'>
                 <p className='text-4xl text-white font-bold inline border-b-4 border-[#C79D60] '>Book Us</p>
                 <p className='text-white py-8'>Get in touch with us via this form:</p> 
                </div>
                <input className='my-4 p-2 text-black bg-white ' type='text' placeholder='Enter your name' name='name' />
                <input className='my-4 p-2 text-black bg-white ' type="email" placeholder='Enter your email' name='email' />
                <textarea className='bg-white p-2 text-black ' name='message' rows="10" cols='30' placeholder='Enter Your Message' ></textarea>
                <button className='text-white hover:bg-[#C79D60] border-2 border-[#C79D60] rounded-md py-3 px-4 my-8 mx-auto flex items-center'>Email Us</button>
            </form>
        </div>
    )
}

export default Book;
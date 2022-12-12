import React, { useRef } from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { BsMailbox } from "react-icons/bs";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactMe = () => {
    const form = useRef();
    const sendEmail = e => {
        e.preventDefault();
        // console.log(form.current)
        emailjs.sendForm('service_sszeyvv', 'template_bi8a5tu', form.current, 'JE8EyobcVXX-5woYK')
            .then((result) => {
                // console.log(result.text);
                toast.success("Your massage is received.")
                form.current.reset();
            }, (error) => {
                toast.error(`${error.text}`)
                // console.log(error.text);
            });
    }

    return (
        <div>
            <section className="py-16 dark:bg-gray-900 lg:flex">
                <div className="flex flex-col justify-center w-full p-8 lg:dark:bg-gray-800 lg:px-12 xl:px-32 lg:w-1/2">
                    <h1 className="text-3xl font-semibold text-gray-800 capitalize dark:text-white lg:text-4xl">Let's Talk.</h1>

                    <p className="mt-4 text-gray-500 dark:text-gray-400">
                        Is the information efficiently organized? <br /> Let me know, Here-
                    </p>
                    <p className='flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 gap-2'>
                        <FiPhoneCall></FiPhoneCall> +880 1621 841412
                    </p>
                    <p className='flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 gap-2'>
                        <BsMailbox></BsMailbox> mdarifuddinraihan@gmail.com
                    </p>
                </div>

                <div className="flex flex-col justify-center w-full p-4 pt-0 lg:w-1/2 lg:px-12 xl:px-24 ">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="-mx-2 md:items-center md:flex">
                            <div className="flex-1 px-2">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                <input name='user_name'
                                    type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div className="flex-1 px-2 mt-4 md:mt-0">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                <input name='user_email'
                                    type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                        </div>

                        <div className="w-full mt-4">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                            <textarea name='message'
                                className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                        </div>

                        <input type="submit" value="Get in touch"
                            className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ContactMe;
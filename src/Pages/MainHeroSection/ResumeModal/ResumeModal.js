import React from 'react';
import resumePdf from '../../../assets/resume_of_arifuddin_mern_web_dev.pdf'

const ResumeModal = () => {
    const handleDownloadPdf = () => {
        // using Java Script method to get PDF file
        fetch(resumePdf).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = resumePdf;
                alink.click();
            })
        })
    }


    return (
        <>
            <input type="checkbox" id="resume-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="resume-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">Resume of Arif Uddin Raihan</h3>
                    <p className="text-md font-bold text-center">MERN Stack Developer</p>
                    <div className="card w-auto bg-base-100 shadow-xl mt-1">
                        <figure className="px-2 py-2">
                            <img src="https://i.ibb.co/K0j7rFY/resume-of-arifuddin-mern-web-dev.jpg" alt="arif_resume" className="rounded-xl" />
                        </figure>
                    </div>
                    <div className='flex justify-center gap-5'>
                        <a href='https://drive.google.com/file/d/1QFyErJSRJfFcJlK4SHyEMFt6vTTzaKXC/view' target='_blank'
                            className="btn btn-primary my-2">View Full Resume</a>
                        <button onClick={handleDownloadPdf}
                            className="btn btn-primary my-2">Download PDF</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResumeModal;
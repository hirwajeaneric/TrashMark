import { useRef, useEffect } from 'react';
import { getMonthName } from '../../utils/helperFunctions';
import { productTypes } from '../../utils/productTypes';

/* eslint-disable react/prop-types */
const ReportModal = ({ isOpen, toggleModal, reportPeriod }) => {
    const modalContentRef = useRef(null);

    function getRandomNumber() {
        return Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    }

    // This effect will listen for clicks on the overlay
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if the click was outside the modal content
            if (modalContentRef.current && !modalContentRef.current.contains(event.target)) {
                toggleModal(); // Close the modal
            }
        };

        // Add event listener to the document
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Clean up listener on unmount or when isOpen changes
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, toggleModal]);

    if (!isOpen) return null; // Return null if not open to avoid rendering

    return (
        <div className="fixed z-50 inset-0 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
            <div className="modal-container">
                <div ref={modalContentRef} className="modal-content bg-white p-16 rounded-lg shadow-md w-a4-width m-6rem">
                    <span className="close absolute top-0 right-0 m-4 text-3xl cursor-pointer" onClick={toggleModal}>&times;</span>
                    <div className=''>

                        {/* Top bar  */}
                        <div className='flex justify-between items-start border-b-2 border-black pb-3'>
                            <div className=''>
                                <h1 className='font-bold text-3xl'>{reportPeriod.type}ly Trash Records</h1>
                                <h2 className='text-xl font-bold text-slate-400'>
                                    {reportPeriod.type === "Year"
                                        ? <>{reportPeriod.type}: {reportPeriod.value}</>
                                        : <>{reportPeriod.type}: {getMonthName(reportPeriod.value - 1)}</>
                                    }
                                </h2>
                                <h2>Generated on: {new Date().toDateString()}</h2>
                            </div>
                            <div className=''>
                                <div className='flex gap-2'>
                                    <img src="/public/logo-cropped.jpg" className='w-[50px]' alt="TrashMark Logo" />
                                    <div className='flex flex-col'>
                                        <span className='font-bold text-lg'>TrashMark</span>
                                        <span className='text-gray-500'>A trash Management system</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Report content */}
                        <div className='flex flex-col w-full'>
                            <table className='mt-8'>
                                <thead className='bg-gray-400'>
                                    <tr>
                                        <th className='p-2' colSpan={2}>Recorded Products</th>
                                    </tr>
                                    <tr className='bg-gray-200 text-sm'>
                                        <th align='left' className=' p-1'>Types</th>
                                        <th align='left'>Numbers</th>
                                    </tr>
                                </thead>
                                <tbody className='text-sm'>
                                    <tr className='border-b'>
                                        <td className=' p-1'>Total recorded products</td>
                                        <td>100</td>
                                    </tr>
                                    <tr className='border-b'>
                                        <td className=' p-1'>Total exchanged trash</td>
                                        <td>50</td>
                                    </tr>
                                    <tr className='border-b'>
                                        <td className=' p-1'>Total renewable trash</td>
                                        <td>40</td>
                                    </tr>
                                </tbody>
                            </table>


                            {/* Recorded per Product Type  */}
                            <table className='mt-8'>
                                <thead className='bg-gray-400'>
                                    <tr>
                                        <th className='p-2' colSpan={2}>Recorded per Product Type</th>
                                    </tr>
                                    <tr className='bg-gray-200 text-sm'>
                                        <th align='left' className=' p-1'>Types</th>
                                        <th align='left'>Numbers</th>
                                    </tr>
                                </thead>
                                <tbody className='text-sm'>
                                    <tr className='border-b'>
                                        <td className='p-1'>{productTypes[0]}</td>
                                        <td>{getRandomNumber()}</td>
                                    </tr>
                                    <tr className='border-b'>
                                        <td className='p-1'>{productTypes[1]}</td>
                                        <td>{getRandomNumber()}</td>
                                    </tr>
                                    <tr className='border-b'>
                                        <td className='p-1'>{productTypes[2]}</td>
                                        <td>{getRandomNumber()}</td>
                                    </tr>
                                    <tr className='border-b'>
                                        <td className='p-1'>{productTypes[3]}</td>
                                        <td>{getRandomNumber()}</td>
                                    </tr>
                                    <tr className='border-b'>
                                        <td className='p-1'>{productTypes[4]}</td>
                                        <td>{getRandomNumber()}</td>
                                    </tr>
                                    <tr className='border-b'>
                                        <td className='p-1'>{productTypes[5]}</td>
                                        <td>{getRandomNumber()}</td>
                                    </tr>
                                    <tr className='border-b'>
                                        <td className='p-1'>{productTypes[6]}</td>
                                        <td>{getRandomNumber()}</td>
                                    </tr>
                                    <tr className='border-b'>
                                        <td className='p-1'>{productTypes[7]}</td>
                                        <td>{getRandomNumber()}</td>
                                    </tr>
                                    <tr className='border-b'>
                                        <td className='p-1'>{productTypes[8]}</td>
                                        <td>{getRandomNumber()}</td>
                                    </tr>
                                    <tr className='border-b'>
                                        <td className='p-1'>{productTypes[9]}</td>
                                        <td>{getRandomNumber()}</td>
                                    </tr>
                                    <tr className='border-b'>
                                        <td className='p-1'>{productTypes[10]}</td>
                                        <td>{getRandomNumber()}</td>
                                    </tr>
                                    <tr className='border-b'>
                                        <td className='p-1'>{productTypes[11]}</td>
                                        <td>{getRandomNumber()}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReportModal;

/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import { forwardRef } from 'react';
import { getMonthName } from '../../utils/helperFunctions';

/* eslint-disable react/prop-types */
export const ReportToPrint = forwardRef((props, ref) => {
    const { reportPeriod, stats, productTypeCount } = props;
    
    return (
        <div ref={ref} className="w-full mx-auto p-16">
            <div>
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
                                <td>{stats[0].value}</td>
                            </tr>
                            <tr className='border-b'>
                                <td className=' p-1'>Total exchanged trash</td>
                                <td>{stats[1].value}</td>
                            </tr>
                            <tr className='border-b'>
                                <td className=' p-1'>Total renewable trash</td>
                                <td>{stats[2].value}</td>
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
                            {productTypeCount.map((product, index) => (
                                <tr key={index} className='border-b'>
                                    <td className='p-1'>{product.type}</td>
                                    <td>{product.count}</td>
                                </tr>)
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Footer  */}
                <p className='mt-16 text-sm text-slate-800'>Copyright {new Date().getFullYear()} &copy; TrashMark. All Rights Reserved.</p>
            </div>
        </div>
    )
})
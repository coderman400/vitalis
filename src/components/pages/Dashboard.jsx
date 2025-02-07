import React from 'react'
import { BriefcaseMedical, Cog, SquareCheckBig, FileText } from 'lucide-react'
import doctor_img from '../../assets/doctor.png'
const Dashboard = () => {
  return (
    <div className='p-12 bg-gray-200 min-h-screen w-full'>
        <h1 className='text-5xl font-semibold '>Welcome Arvind!</h1>

        <div className='flex flex-row gap-12 items-center'>
            <div className='bg-white min-h-42 w-84 mt-8 rounded-xl p-6'>
                <div className='flex flex-row gap-4 items-center text-gray-600'>
                    <BriefcaseMedical />
                    <h2 className='text-xl font-bold'>CONSULTATIONS</h2>
                </div>
                <h3 className='mt-2 text-gray-500'>27th February, 2025</h3>
                <h3 className='mt-4 font-semibold text-xl'>Follow-up on Blood Report</h3>
            </div>
            <div className='bg-white min-h-42 w-84 mt-8 rounded-xl p-6'>
                <div className='flex flex-row gap-4 items-center text-gray-600'>
                    <Cog />
                    <h2 className='text-xl font-bold'>PROTOCOLS</h2>
                </div>
                <h3 className='mt-2 text-gray-500'>24th February, 2025</h3>
                <h3 className='mt-4 font-semibold text-xl'>Blood test: Vitamin D3,B3</h3>
            </div>
            <div className='bg-ash text-white min-h-42 w-84 mt-8 rounded-xl p-6'>
                <div className='flex flex-row gap-4 items-center'>
                    <SquareCheckBig/>
                    <h2 className='text-xl font-bold'>WELLNESS SCORE</h2>
                </div>
                <h3 className='mt-6 font-semibold text-3xl text-center'><span className='text-6xl font-bold'>7.4</span>/10</h3>
            </div>
        </div>
        <h1 className='text-3xl font-semibold mt-6 text-gray-700 '>Treatment Plan</h1>
        <div className='w-full flex flex-row justify-between m-4'>
            <div className=' col-span-3'>
                <div className='flex flex-row gap-4'>
                    <div className='bg-white min-h-42 w-96 mt-8 rounded-xl p-6'>
                            <div className='flex flex-row gap-4 items-center text-gray-600'>
                                <h2 className='text-2xl font-bold'>VITAMIN D DEFICIENCY</h2>
                            </div>
                            <h3 className='mt-2 text-gray-500'>27th February, 2025 - 13th March, 2025</h3>
                            <div className='flex flex-col mt-2 text-gray-600'>
                                <h3 className=' font-semibold text-lg'>Calciferol 2mg</h3>
                                <h3 className=' font-semibold text-lg'>Alfacalcidol 5mg</h3>
                            </div>
                            <div className='w-full flex justify-end opacity-80 text-blue-400 hover:text-blue-600 duration-75 hover:cursor-pointer'>
                                <FileText />
                            </div>
                    </div>
                    <div className='bg-white min-h-42 w-96 mt-8 rounded-xl p-6'>
                            <div className='flex flex-row gap-4 items-center text-gray-600'>
                                <h2 className='text-2xl font-bold'>VITAMIN D DEFICIENCY</h2>
                            </div>
                            <h3 className='mt-2 text-gray-500'>27th February, 2025 - 13th March, 2025</h3>
                            <div className='flex flex-col mt-2 text-gray-600'>
                                <h3 className=' font-semibold text-lg'>Calciferol 2mg</h3>
                                <h3 className=' font-semibold text-lg'>Alfacalcidol 5mg</h3>
                            </div>
                            <div className='w-full flex justify-end opacity-80 text-blue-400 hover:text-blue-600 duration-75 hover:cursor-pointer'>
                                <FileText />
                            </div>
                    </div>
                    <div className='bg-white min-h-42 w-96 mt-8 rounded-xl p-6'>
                            <div className='flex flex-row gap-4 items-center text-gray-600'>
                                <h2 className='text-2xl font-bold'>VITAMIN D DEFICIENCY</h2>
                            </div>
                            <h3 className='mt-2 text-gray-500'>27th February, 2025 - 13th March, 2025</h3>
                            <div className='flex flex-col mt-2 text-gray-600'>
                                <h3 className=' font-semibold text-lg'>Calciferol 2mg</h3>
                                <h3 className=' font-semibold text-lg'>Alfacalcidol 5mg</h3>
                            </div>
                            <div className='w-full flex justify-end opacity-80 text-blue-400 hover:text-blue-600 duration-75 hover:cursor-pointer'>
                                <FileText />
                            </div>
                    </div>
                </div>

                <h1 className='text-3xl font-semibold mt-6 text-gray-700 '>Doctors</h1>
                
                <div className='flex flex-row gap-4'>
                    <div className='bg-white min-h-72 w-96 mt-8 rounded-xl p-6'>
                            <div className='flex flex-row gap-4 justify-between items-center text-gray-600'>
                            <img src={doctor_img} className='h-25 w-25 object-cover rounded-full'></img>
                                <div>
                                    <h2 className='text-2xl font-bold'>Dr. Amanda, MD</h2>
                                    <h3 className='mt-0 text-xl text-gray-500'>Dermatologist</h3>
                                </div>
                            </div>
                            <div className='flex flex-col items-end justify-center mt-2 text-gray-600'>
                                <h3 className=' font-semibold text-xl'>Start a chat</h3>
                                <h3 className=' font-semibold text-xl'>Book meeting</h3>
                                <h3 className=' font-semibold text-xl'>View details</h3>
                            </div>
                    </div>
                    <div className='bg-white min-h-72 w-96 mt-8 rounded-xl p-6'>
                            <div className='flex flex-row gap-4 justify-between items-center text-gray-600'>
                            <img src={doctor_img} className='h-25 w-25 object-cover rounded-full'></img>
                                <div>
                                    <h2 className='text-2xl font-bold'>Dr. Amanda, MD</h2>
                                    <h3 className='mt-0 text-xl text-gray-500'>Dermatologist</h3>
                                </div>
                            </div>
                            <div className='flex flex-col items-end justify-center mt-2 text-gray-600'>
                                <h3 className=' font-semibold text-xl'>Start a chat</h3>
                                <h3 className=' font-semibold text-xl'>Book meeting</h3>
                                <h3 className=' font-semibold text-xl'>View details</h3>
                            </div>
                    </div>
                    <div className='bg-white min-h-72 w-96 mt-8 rounded-xl p-6'>
                            <div className='flex flex-row gap-4 justify-between items-center text-gray-600'>
                            <img src={doctor_img} className='h-25 w-25 object-cover rounded-full'></img>
                                <div>
                                    <h2 className='text-2xl font-bold'>Dr. Amanda, MD</h2>
                                    <h3 className='mt-0 text-xl text-gray-500'>Dermatologist</h3>
                                </div>
                            </div>
                            <div className='flex flex-col items-end justify-center mt-2 text-gray-600'>
                                <h3 className=' font-semibold text-xl'>Start a chat</h3>
                                <h3 className=' font-semibold text-xl'>Book meeting</h3>
                                <h3 className=' font-semibold text-xl'>View details</h3>
                            </div>
                    </div>
                </div>
            </div>
            <div className='col-span-2'>
            <div className='bg-white min-h-96 w-96 mt-8 rounded-xl p-6'>
                            <div className='flex flex-row gap-4 items-center text-gray-600'>
                                <h2 className='text-4xl text-gray-800 font-bold'>Profile</h2>
                            </div>
                        
                            <div className='flex flex-col gap-8 mt-6 text-gray-600'>
                                <div>
                                    <div className='flex flex-row gap-8 items-center'>
                                        <h3 className='text-2xl'>Blood pressure</h3>
                                        <h3 className='text-xl text-green-600'>Good</h3>
                                    </div>
                                    <h3 className='text-6xl font-bold mt-2'>112/75</h3>
                                </div>
                                <div>
                                    <div className='flex flex-row gap-8 items-center'>
                                        <h3 className='text-2xl'>Blood Glucose</h3>
                                        <h3 className='text-xl text-green-600'>Good</h3>
                                    </div>
                                    <h3 className='text-6xl font-bold mt-2'>80-90</h3>
                                </div>
                                <div>
                                    <div className='flex flex-row gap-8 items-center'>
                                        <h3 className='text-2xl'>Haemoglobin</h3>
                                        <h3 className='text-xl text-orange-400'>Normal</h3>
                                    </div>
                                    <h3 className='text-6xl font-bold mt-2'>112/75</h3>
                                </div>
                                <div>
                                    <div className='flex flex-row gap-8 items-center'>
                                        <h3 className='text-2xl'>Haemoglobin</h3>
                                        <h3 className='text-xl text-orange-400'>Normal</h3>
                                    </div>
                                    <h3 className='text-6xl font-bold mt-2'>112/75</h3>
                                </div>
                            </div>

                    </div>
            </div>
        </div>
        
    </div>
  )
}

export default Dashboard
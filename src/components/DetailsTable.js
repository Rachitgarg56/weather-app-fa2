import React, { useContext } from 'react'
import { DetailsTableHeadings } from '../assets/constants/constants'
import DetailsTableRow from './DetailsTableRow'
import { WeatherContext } from '../App'

const DetailsTable = () => {

    const { weatherData } = useContext(WeatherContext);

    return (
        <table className='w-full'>

            <thead className='bg-[#4472C4] text-white'>
                <th className='flex'>
                    {
                        DetailsTableHeadings.map((heading) => {
                            return <td className={heading === "Description" ? 'hidden md:block border border-solid border-white flex-1 py-3 px-2 flex' : 'text-sm md:text-lg border border-solid border-white flex-1 py-3 px-2 flex'}>{heading}</td>
                        })
                    }
                </th>
            </thead>

            <tbody>
                {
                    (weatherData.length <= 0) 
                    
                    ?
                    
                    <div className='border border-solid border-black flex justify-center items-center h-80 font-bold text-lg'> No Data</div>
                    
                    :

                    weatherData.map((data) => {
                        return <DetailsTableRow data={data} />            
                    })
                }
            </tbody>

        </table>
    )
}

export default DetailsTable

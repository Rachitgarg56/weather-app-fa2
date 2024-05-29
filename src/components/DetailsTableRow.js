import React, { useContext } from 'react'
import { WeatherContext } from '../App';

const DetailsTableRow = ( props ) => {

    const { highlightenedCity } = useContext(WeatherContext);
    
    const { id, city, description, temperature, pressure, dataAge } = props.data;

    const { setWeatherData } = useContext(WeatherContext);

    const handleDelete = () => {
        setWeatherData((prev) => {
            const dataArr = [...prev];
            const idx = dataArr.findIndex((obj) => obj.id === id);
            if (idx !== -1) dataArr.splice(idx,1);
            return dataArr;
        })
    }

    const handleChange = (e) => {
        setWeatherData((prev) => {
            const dataArr = [...prev];
            return dataArr.map((obj) => {
                return obj.id === id ? {...obj, description: e.target.value} : obj;
            })
        })
    }

    return (
        <tr className='flex' style={highlightenedCity === city ? {backgroundColor:'orange'} : {}}>
            <td className='border border-solid border-black flex-1 py-1 px-1 flex items-center'>{city}</td>
            <td className='md:block border border-solid border-black flex-1 py-1 px-1 flex justify-center hidden'><input className='border border-solid border-black p-1 rounded-md' onChange={handleChange} value={description} /></td>
            <td className='border border-solid border-black flex-1 py-1 px-1 flex items-center'>{temperature}</td>
            <td className='border border-solid border-black flex-1 py-1 px-1 flex items-center'>{pressure}</td>
            <td className='border border-solid border-black flex-1 py-1 px-1 flex items-center'>{dataAge}</td>
            <td className='border border-solid border-black flex-1 py-1 px-1 flex items-center'><button onClick={handleDelete} className='text-blue-600 underline'>Delete</button></td>
        </tr>
    )
}

export default DetailsTableRow

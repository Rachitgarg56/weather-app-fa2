import React, { useContext, useState } from 'react';
import { cities } from '../assets/constants/constants';
import { v4 as uuidv4 } from 'uuid';
import { WeatherContext } from '../App';
import { getDataAge, getWeatherData } from '../assets/utils/utils';

const Sidebar = () => {

  const {  setWeatherData } = useContext(WeatherContext);
  const [idx,setIdx] = useState(0);

  const handleClick = async () => { 
    
    setIdx(prev => prev+1);

    if (idx+1 > cities.length) return;
    
    const data = await getWeatherData(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${cities[idx]}`);
    const { date_and_time, description, pressure_in_hPa, temp_in_celsius } = data;
    const city = cities[idx];
    const dataAge = getDataAge(date_and_time); //in hrs
    
    setTimeout(()=> {
      
      setWeatherData((prev) => {
        const obj = {id: uuidv4(), city: city, description: description, temperature: temp_in_celsius, pressure: pressure_in_hPa, dataAge: dataAge};
        return [...prev, obj];
      });

    },300)
  
  }

  return (
    <div className='md:h-full border border-solid border-black p-4 w-full md:w-64'>
      
      <div className='flex flex-col gap-4'>

        <button onClick={handleClick} className='get-weather border border-solid border-black p-2 bg-[#4472C4] text-white whitespace-nowrap rounded-md'>Get Weather</button>

        <ul className=''>
            <li className='border border-solid border-black p-2 font-semibold whitespace-nowrap bg-[#4472C4] text-white' key={uuidv4()}>City</li>
            {
                cities.map((city,i) => {
                    return <li style={i < idx ? {border: '3px solid lightgreen'} : {border: '1px solid black'}} className='p-2 font-semibold whitespace-nowrap' key={uuidv4()}>{city}</li>
                })
            }
        </ul>

      </div>

    </div>
  )

}

export default Sidebar

import React, { useContext, useRef } from 'react'
import DetailsTable from './DetailsTable'
import { WeatherContext } from '../App';

const Main = () => {

  const { setHighlightenedCity } = useContext(WeatherContext);

  const inputRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const cityName = inputRef.current.value;
    setHighlightenedCity(cityName); 
    setTimeout(() => {
      setHighlightenedCity('');
      inputRef.current.value = '';
    }, 3000)
  }

  return (
    <div className='h-full border border-solid border-black w-full md:p-4 flex flex-col gap-2'>
    
        <div className='flex md:justify-end'>
            <form className='flex w-1/2 rounded-sm'>
                <input ref={inputRef} type='text' placeholder='City Name' className='border border-solid border-black p-2 rounded-sm w-full md:w-4/5'/>
                <button onClick={handleSearch} className='bg-[#4472C4] w-full text-white p-2 px-6 border border-solid border-black rounded-sm md:w-1/5'>Search</button>
            </form>
        </div>
    
        <DetailsTable/>
    
    </div>
  )
}

export default Main

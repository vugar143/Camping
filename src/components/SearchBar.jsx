import React,{useState} from 'react'
function SearchBar() {
   const [startDate,setStartDate]=useState()
   const [endDate,setEndDate]=useState()
   function onChangeDateHandler(value){
    setStartDate(value[0]);
    setEndDate(value[1]);
   }
  return (
    <>
    {/* <section className="searchbar">
        <div className="search-container df">
    <div className='where-input'>
   <div className="icon-location"></div>
        <input className='where' type="text" placeholder='Where to?' />

    </div>
    <div className='when-input'>
        <DatePicker 
        className='when'
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={onChangeDateHandler}
        dateFormat="dd MM yyyy"
        placeholderText='When?'
        />

    </div>
    <div className="category-input">
      <select className='category' name="areas" id="areas">
        <option value="lake">
            Lake
        </option>
        <option value="river">
            River
        </option>
        <option value="mountain">
            Mountain
        </option>
        <option value="forest">
            Forest
        </option>
      </select>
      <div>
   
    </div>
    <Button className='search' variant='primary'>Search</Button>
    </div>
   
    </div>
    </section> */}
    </>
  )
}

export default SearchBar
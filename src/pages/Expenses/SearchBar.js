import React,{useState} from 'react'

const SearchBar = () => {

  const [from,setFrom]=useState('')
  const [to,setTo]=useState('')
  return (
    <div>
      <div className='m-2 space-x-40'>
        <lable >
          <span className='p-2'>From:</span>
          
        <input type='date' className='p-2 border  ' value={from} onChange={(e)=>setFrom(e.target.value)} />
        </lable>
        <lable>
        <span className='p-2'>  To: </span>
        <input type='date' className='p-2 border  ' value={to} onChange={(e)=>setTo(e.target.value)} />
        </lable>
          </div>
    </div>
  )
}

export default SearchBar

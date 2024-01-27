import React,{useState} from 'react'
import AddExpense from './addExpense'
import LayOut from '../LayOut/LayOut'
import axios from 'axios'
import { useEffect } from 'react'
import SearchBar from './SearchBar'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  Button,
  Checkbox,
  Icon,
  Table,
  PaymentIcon
} from 'semantic-ui-react'

import { Item, ItemGroup, ItemHeader, ItemImage, ItemMeta, ItemContent, ItemDescription, Image } from 'semantic-ui-react'
const Expenses = () => {

  const [expenses, setExpenses] = useState([]);
  let [display, setDisplay] = useState(false)

  const handleClick = () => {
    console.log('Button clicked');
   setDisplay(!display)
  }

  useEffect(()=>{
    axios.get('http://localhost:2718/api/getex').then(expenses=>setExpenses(expenses.data)).catch(err=>console.log(err))
  },[ expenses])

  return (
<LayOut>
      <div className='m-0 w-full'>
        <div className='flex justify-center text-4xl'>Expenses</div>
        <div className='flex justify-between  m-5'>
          <div></div>
          <div><SearchBar/></div>
          {!display && <button className='bg-green-600 text-white p-4 rounded-2xl  border-lg' onClick={handleClick} >add expense</button>}
        </div>
        {display && <AddExpense/>}
        {!display && <div className='m-0   flex justify-center w-full'>
        <Table celled compact definition className='overflow:auto max-h-sm '>
    <TableHeader fullWidth>
      <TableRow >
        
        <TableHeaderCell >details</TableHeaderCell>
        <TableHeaderCell>date</TableHeaderCell>
        <TableHeaderCell>amount</TableHeaderCell>
     

      </TableRow>
    </TableHeader>

    <TableBody>
       
        {

         
             
          expenses.map(expense =>{return(
            <TableRow>
           <TableCell>{expense.category}</TableCell>
           <TableCell>{expense.date}</TableCell>
           <TableCell>{expense.amount}</TableCell>
           </TableRow>
    
     )})}   

     </TableBody>

     <TableFooter fullWidth>
       <TableRow>
         <TableHeaderCell />
         <TableHeaderCell colSpan='3'>
         
          
         </TableHeaderCell>
       </TableRow>
     </TableFooter>
   </Table>
    
        </div>
            
          }
        </div>
    </LayOut>
  )
}

export default Expenses


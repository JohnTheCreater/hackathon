import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesRectangle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const AddExpense = () => {

    const [expenses, setExpenses] = useState([]);
    const [total, setTotal] = useState(0);
    const navigate=useNavigate()

    useEffect(() => {
        calculateTotal(expenses);
      }, [expenses]);


      useEffect(() => {
        setTotalAmount(total);
      },[total]);


      
      const calculateTotal = (expensesToCalculate) => {
        let total = 0;
        for (let expense of expensesToCalculate) {
          total += Number(expense.amount);
        }
        console.log(total)
        setTotal(total);
      };


    const handleAddExpense = () => {
        const category = document.getElementById('category').value;
        const amount = document.getElementById('amount').value;
        const roomId = document.getElementById('roomId').value;
      
        if (!category || !amount ) {
          alert('Please enter all fields.');
          return;
        }
      
        setExpenses(prevExpenses => [...prevExpenses, { category, amount, roomId }]);      
        document.getElementById('category').value = '';
        document.getElementById('amount').value = '';
        document.getElementById('roomId').value = '';
      };


  
    // Event listener for the "Calculate Total" button
    const handleCalculateTotal = () => {
      calculateTotal();
    };



    const removeRow = (index) => {
        setExpenses(prevExpenses => {
            const newExpenses = prevExpenses.filter((_, i) => i !== index);
            calculateTotal(newExpenses);
            return newExpenses;
          });
      };


    const setTotalAmount = (total) => { document.getElementById('totalAmount').innerText =`${total}`;}

  
    const handleResetTable = () => {
      const tableBody = document.getElementById('expensesTable').getElementsByTagName('tbody')[0];
      while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
      }
      setTotalAmount(0);
    };

    const handleSubmit=()=>{
        console.log('submit button')
        axios.post('http://localhost:2718/api/expense',{expenses}).then(res=>console.log(res.data)).catch(err=>console.log(err))
    }

  
    return (
         <div className='bg-red-200  '>
                <div className='m-0 bg bg-blue-600 flex justify-center w-full'>
                 <header className="flex justify-between w-full items-center  text-white text-center px-4">
                 <button className='bg-red-500 text-white p-2 rounded' onClick={()=> navigate(0)}>back</button>
                 <h1 className="text-2xl">Expenses Spent This Month</h1>
                <div></div>
                </header>
                </div>
          
        <main className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md mt-10">
          <table id="expensesTable" className="w-full border-collapse   border-gray-300 my-4">
            <thead>
              <tr>
                <th className="border px-4 py-2">Expense Category</th>
                <th className="border px-4 py-2">Amount (INR)</th>
                <th className="border px-4 py-2">Room Id</th>
              </tr>
            </thead>
            <tbody>
            {expenses.map((expense, index) => (
    <tr key={index}>
      <td className="border px-4 py-2">{expense.category}</td>
      <td className="border px-4 py-2">{expense.amount}</td>
      <td className="border px-4 py-2">{expense.roomId}</td>
      <td><button className='' onClick={()=>removeRow(index)}><FontAwesomeIcon icon={faTimesRectangle} />
</button></td>
    </tr>
  ))}
            </tbody>
            <tfoot>
              <tr className="total">
                <td className="border px-4 py-2">Total Expenses</td>
                <td id="totalAmount" className="border px-4 py-2">00.00</td>
                <td className='border'></td>
              </tr>
            </tfoot>
          </table>
  
          <div className="flex flex-col space-y-4">
            <label htmlFor="category">Expense Category:</label>
            <input type="text" id="category" className="border px-4 py-2" placeholder="Enter category" />
  
            <label htmlFor="amount">Amount (INR):</label>
            <input type="number" id="amount" className="border px-4 py-2" placeholder="Enter amount" />
  
            <label htmlFor="roomId">Room Id:</label>
            <input type="text" id="roomId" className="border px-4 py-2" placeholder="Enter room ID" />
  
            <button onClick={handleAddExpense} className="bg-blue-600 text-white px-4 py-2 rounded">
              Add Expense
            </button>
          </div>

            <div className="flex flex-col space-y-4">
          <div className="flex space-x-4 mt-4">
            <button onClick={handleResetTable} className="bg-red-500 text-white px-4 py-2 rounded">
              Reset Table
            </button>
            <button onClick={handleCalculateTotal} className="bg-green-500 text-white px-4 py-2 rounded">
              Calculate Total
            </button>
            </div>
            <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">
                submit</button>
          </div>
        </main>
      </div>
  
    );
  };

export default AddExpense

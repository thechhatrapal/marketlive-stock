import React from 'react'
import { FaArrowUp } from 'react-icons/fa'

function Cards(props) {
  let checkhigh= ((props?.data?.high_price)-(props?.data?.low_price))/props.data.low_price
  checkhigh = `${checkhigh.toFixed(2)}%`
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 py-5 px-10">
    <h5>
      {props?.data?.symbol}
      <span className="ml-2 text-green-500">{checkhigh}</span>
    </h5>
    <ul className="flex items-center space-x-2">
      <li className="flex me-auto space-x-1 items-center">
        <FaArrowUp size={30} />
        <span>20133.13</span>
      </li>
      <li>
        High
        <br />
        <span className="text-green-500">{props?.data?.high_price}</span>
      </li>
      <li>  
        Low
        <br />
        <span className="text-red-500">{props?.data?.low_price}</span>
      </li>
    </ul>
  </div>
  )
}

export default Cards
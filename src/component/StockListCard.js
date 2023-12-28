import React from "react";

function StockListCard(props) {
  const { company } = props;
  return (
    <div style={{width:"300px", height:"170px"}} className=" py-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 my-2 dark:border-gray-700">
        <img className="rounded-t-lg" src={company?.logo} alt="" />
      <div className="p-5">
          <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
           {company?.name}
          </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {company?.ticker}
        </p>
      </div>
    </div>
  );
}

export default StockListCard;

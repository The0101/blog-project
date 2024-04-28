import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

import ArticleCard from "../../components/ArticaleCard";

const Articles = () => {
 // Define the count state and its setter function
 const [count, setCount] = useState(0);

 // Define the countChangeHandler function
 const countChangeHandler = (action) => {
    if (action === 'INCREASE') {
      setCount(prevCount => prevCount + 1);
    } else if (action === 'DECREASE') {
      setCount(prevCount => prevCount - 1);
    }
 };

 return (
    <section className="flex flex-col container mx-auto px-5 py-10">
      <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
      </div>
      <button className="mx-auto flex items-center gap-x-2 font-bold text-primary border-2 border-primary px-6 py-3 rounded-lg">
        <span>More articles</span>
        <FaArrowRight className="w-3 h-3" />
      </button>
      <div className="mt-2 flex items-center gap-x-5">
        <button onClick={() => countChangeHandler('DECREASE')}>decrease</button>
        {count} {/* Corrected to display count directly */}
        <button onClick={() => countChangeHandler('INCREASE')}>increase</button>
      </div>
    </section>
 );
};

export default Articles;

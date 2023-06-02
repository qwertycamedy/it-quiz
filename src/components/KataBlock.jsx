import React from 'react'
import { Link } from "react-router-dom";
import {BsArrowUpRight} from 'react-icons/bs';
import MySection from "./_UI/MySection";

function KataBlock({kata}) {
  return (
    <MySection classNames='mb-6' key={kata.id}>
      <p className="font-bold text-lg">
        {kata.title}
      </p>
      <p className="text-clip">
        {kata.body}
      </p>
      <Link
        className="flex items-center gap-4 text-blue-300 hover:text-blue-400 duration-200 ease-linear transition-colors"
        to={`/task/${kata.id}`}
      >
        <span>Перейти к задаче</span>
        <BsArrowUpRight />
      </Link>
    </MySection>
  )
}

export default KataBlock
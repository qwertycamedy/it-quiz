import React from 'react'
import { Link } from "react-router-dom";
import {BsArrowUpRight} from 'react-icons/bs';
import MySection from "./_UI/MySection";
import H1 from "./_UI/H1";

function TestsBlock() {
  return (
    <MySection>
      <div className="flex justify-between items-center">
        <div>
        <H1 classNames={'mb-2'}>Название теста</H1>
        <p>Тип теста</p>
        </div>
        <Link className="flex items-center gap-3 text-blue-400 hover:underline" to="/test/1" target="_blank">
          Пройти тест
          <BsArrowUpRight />
        </Link>
      </div>
    </MySection>
  )
}

export default TestsBlock
import React from 'react'
import MySection from "./_UI/MySection";
import H1 from "./_UI/H1";

function CompletedTestsBlock() {
  return (
    <MySection>
      <div className="flex justify-between items-center">
        <div>
        <H1 classNames={'mb-2'}>Название теста</H1>
        <p>Тип теста</p>
        </div>
        <div>Результат теста: 90 баллов</div>
      </div>
    </MySection>
  )
}

export default CompletedTestsBlock
import React from 'react'

function H1({children, classNames, ...props}) {
  return (
    <div className={`text-xl font-semibold ${classNames}`} {...props}>
        {children}
    </div>
  )
}

export default H1
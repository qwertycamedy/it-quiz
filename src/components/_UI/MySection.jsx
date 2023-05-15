import React from 'react'

function MySection({children, classNames, ...props}) {
  return (
    <div className={`flex flex-col gap-6 rounded-xl shadow-md bg-white overflow-hidden p-8 ${classNames}`} {...props}>
        {children}
    </div>
  )
}

export default MySection
import React from 'react';

const MyAccordion = ({children}) => {
  return(
    <div className="l-accordion m-accordion">
      {children}
    </div>
  )
}

export default MyAccordion;
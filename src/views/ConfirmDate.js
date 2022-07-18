import React from 'react'
import DateResults from '../components/form/DateResults'
import Header from '../components/Header'

const ConfirmDate = () => {

  
  return (
    <div>
      <Header seguimiento={1} link={'/form'}/>
      <DateResults />
    </div>
  )
}

export default ConfirmDate
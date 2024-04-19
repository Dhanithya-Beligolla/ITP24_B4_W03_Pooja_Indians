import React from 'react'
import { createContext,useContext,useState } from 'react';
const FeedbackContext=createContext();

const Coontext = ({children}) => {
    const [update,setUpdate]=useState(null);
  return (
    <FeedbackContext.Provider value={{update,setUpdate}}>
    {children}
  </FeedbackContext.Provider>
  )
}

export default Coontext;

export const FeedbackContextShare =() =>useContext(FeedbackContext);
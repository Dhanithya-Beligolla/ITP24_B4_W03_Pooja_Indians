import React, {createContext, useState, useContext} from 'react'


const BuffetContext = createContext();

const Context = ({children}) => {

    const [update, setUpdate] = useState(null);
  return <BuffetContext.Provider value={{update, setUpdate}}>{children}</BuffetContext.Provider>;
  
};

export default Context;

export const BuffetContextShare = () => useContext(BuffetContext);
import React, { createContext, useContext, useState } from 'react'

const PosterContext = createContext();

const Context = ({children}) => {
    const [update, setUpdate] = useState(null);
  return (
  <PosterContext.Provider value={{ update, setUpdate}}>
    {children}
    </PosterContext.Provider>
  );
};

export default Context;

export const PosterContextShare = () => useContext(PosterContext);
import React, { createContext } from "react";

const HideContext = createContext();

export const HideProvider = ({ children }) => {
  const [hide, setHide] = React.useState(false);
  return (
    <HideContext.Provider value={{ hide, setHide }}>
      {children}
    </HideContext.Provider>
  );
};

export default HideContext;

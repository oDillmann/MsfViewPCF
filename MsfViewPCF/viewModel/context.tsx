import React from "react";
import MsfViewVM from "./MsfViewVM";

export const SalesViewVMcontext = React.createContext<MsfViewVM>(
  {} as MsfViewVM
);

export interface props {
  value: MsfViewVM;
  children: JSX.Element;
}

const ContextProvider = ({ value, children }: props) => {
  return (
    <SalesViewVMcontext.Provider value={value}>
      {children}
    </SalesViewVMcontext.Provider>
  );
};

export const useVM = () => React.useContext(SalesViewVMcontext);

export default ContextProvider;

import { MessageBar, MessageBarType, Spinner } from "@fluentui/react";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import ServiceProvider from "../ServiceProvider";
import ContextProvider from "../viewModel/context";
import MsfViewVM from "../viewModel/MsfViewVM";
import TableView from "./TableView";
import "./globals.css";

export interface props {
  serviceProvider: ServiceProvider;
}

const App = ({ serviceProvider }: props) => {
  const vm = serviceProvider.get<MsfViewVM>(MsfViewVM.serviceName);
  const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void;
  useEffect(() => { if (!vm.forceUpdate) vm.forceUpdate = forceUpdate; }, []);

  return (
    <>
      {vm.PCFerror ? (
        <MessageBar messageBarType={MessageBarType.error}>
          {vm.PCFerror}
        </MessageBar>
      ) : (
        <ContextProvider value={vm}>
          <>
            {vm.isLoading ? (
              <Spinner
                label='Loading...'
                styles={{ root: { margin: "5rem" } }}
              />
            ) : (
              <>
                {vm.errorMessage && (
                  <MessageBar
                    messageBarType={MessageBarType.error}
                    onDismiss={() => {
                      vm.setError(undefined);
                    }}
                  >
                    {vm.errorMessage}
                  </MessageBar>
                )}
                <TableView />
              </>
            )}
          </>
        </ContextProvider>
      )}
    </>
  );
};

export default observer(App);

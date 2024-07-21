import { Stack } from "@fluentui/react";
import { observer } from "mobx-react";
import React from "react";
import { useVM } from "../viewModel/context";
import MsfViewVM, { ViewType } from "../viewModel/MsfViewVM";
import CollapsibleRows from "./CollapsibleRows";
import TableHeaders from "./TableHeaders";

const groupByHandlers = {
  [ViewType["Sales Responsible"]]: (vm: MsfViewVM) =>
    Object.keys(vm.groupBySalesResponsible).map(salesResponsible => {
      return (
        <CollapsibleRows
          key={salesResponsible + "salesResponsible"}
          MSF={vm.groupBySalesResponsible[salesResponsible]}
          periodTitle={salesResponsible}
        />
      );
    }) as JSX.Element[],
  //
  [ViewType.Warehouse]: (vm: MsfViewVM) =>
    Object.keys(vm.groupedByWarehouse).map(warehouse => {
      return (
        <CollapsibleRows
          key={warehouse + "warehouse"}
          MSF={vm.groupedByWarehouse[warehouse]}
          periodTitle={warehouse}
        />
      );
    }) as JSX.Element[],
  // Add more handlers here as needed
};

const TableView = () => {
  const vm = useVM();

  const groupByComponent = React.useMemo(() => {
    return groupByHandlers[vm.ViewType](vm);
  }, [
    vm.ViewType,
    vm.groupBySalesResponsible,
    vm.groupedByWarehouse,
  ]);

  return (
    <Stack horizontal styles={{ root: { padding: "0 0 0 1rem", height: "100%", width: "100%", overflowY: "scroll" } }}>
      <table style={{ display: "block", overflowY: "scroll", width: "100%" }}>
        <TableHeaders />
        {vm.Records.length === 0 ? (
          <tbody>
            <tr>
              <td colSpan={1}></td>
              <td colSpan={10} style={{ padding: "5rem", textAlign: "center", fontWeight: "900", fontSize: "1.4rem", color: "#888" }}>
                No records found
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>{groupByComponent}</tbody>
        )}
      </table>
    </Stack >
  );
};

export default observer(TableView);

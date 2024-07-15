import { Stack } from "@fluentui/react";
import { observer } from "mobx-react";
import React from "react";
import { useVM } from "../viewModel/context";
import MsfViewVM, { ViewType } from "../viewModel/MsfViewVM";
import CollapsibleRows from "./CollapsibleRows";
import TableHeaders from "./TableHeaders";

const groupByHandlers = {
  [ViewType.Date]: (vm: MsfViewVM) =>
    [
      ...Object.keys(vm.pastDueByMonth).map(month => {
        return (
          <CollapsibleRows
            key={month + "pastDue"}
            SFS={vm.pastDueByMonth[month]}
            Departments={vm.Departments}
            periodTitle={month}
            pastDue
          />
        );
      }),
      <CollapsibleRows
        key='specialkeyUwU'
        SFS={vm.thisWeek}
        Departments={vm.Departments}
        periodTitle={"This Week"}
      />,
      ...Object.keys(vm.groupedByMonth).map(month => {
        return (
          <CollapsibleRows
            key={month + "upcoming"}
            SFS={vm.groupedByMonth[month]}
            Departments={vm.Departments}
            periodTitle={month}
          />
        );
      }),
      vm.noEsd.length > 0 && (
        <CollapsibleRows
          SFS={vm.noEsd}
          Departments={vm.Departments}
          periodTitle={"No Date"}
        />
      ),
    ].filter(Boolean) as JSX.Element[],
  //
  [ViewType["Sales Responsible"]]: (vm: MsfViewVM) =>
    Object.keys(vm.groupBySalesResponsible).map(salesResponsible => {
      return (
        <CollapsibleRows
          key={salesResponsible + "salesResponsible"}
          SFS={vm.groupBySalesResponsible[salesResponsible]}
          Departments={vm.Departments}
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
          SFS={vm.groupedByWarehouse[warehouse]}
          Departments={vm.Departments}
          periodTitle={warehouse}
        />
      );
    }) as JSX.Element[],
  [ViewType["Type of Sale"]]: (vm: MsfViewVM) =>
    Object.keys(vm.groupedByType).map(type => {
      return (
        <CollapsibleRows
          key={type + "type"}
          SFS={vm.groupedByType[type]}
          Departments={vm.Departments}
          periodTitle={type}
        />
      );
    }),
  // Add more handlers here as needed
};

const TableView = () => {
  const vm = useVM();

  const groupByComponent = React.useMemo(() => {
    return groupByHandlers[vm.ViewType](vm);
  }, [
    vm.ViewType,
    vm.groupBySalesResponsible,
    vm.groupedByMonth,
    vm.groupedByWarehouse,
    vm.pastDueByMonth,
    vm.thisWeek,
    vm.noEsd,
    vm.Departments,
  ]);

  return (
    <Stack
      horizontal
      styles={{
        root: {
          padding: "0 0 0 1rem",
          height: "100%",
          width: "100%",
          overflowY: "scroll",
        },
      }}
    >
      <table style={{ display: "block", overflowY: "scroll" }}>
        <TableHeaders Departments={vm.Departments} />
        <tbody>{groupByComponent}</tbody>
      </table>
    </Stack>
  );
};

export default observer(TableView);

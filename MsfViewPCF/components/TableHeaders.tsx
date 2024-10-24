import { Dropdown, Stack, Text } from "@fluentui/react";
import { observer } from "mobx-react";
import React from "react";
import { useVM } from "../viewModel/context";
import { ViewType } from "../viewModel/MsfViewVM";

const TableHeaders = () => {
  const vm = useVM();

  return (
    <>
      <colgroup>
        {Array.from({ length: vm.HeadersCount }).map((_, index) => (<col key={index} style={{ width: "auto" }} />))}
      </colgroup>
      <thead style={{ position: "sticky", top: 0, backgroundColor: "#fff" }}>
        <tr className='tableHeader' style={{ display: "table-row" }}>
          <th style={{ height: 0, whiteSpace: "nowrap", left: 0, top: 0, backgroundColor: "#fff", }} >
            <Stack verticalAlign='center' horizontal tokens={{ childrenGap: "0.5rem" }} styles={{ root: { padding: "0.3rem 1rem", border: "2px solid #fff", height: "100%", width: "200px", position: "relative", }, }} >
              <Dropdown
                styles={{ root: { width: "100%" } }}
                defaultSelectedKey={Object.values(ViewType).findIndex(value => value == ViewType[vm.ViewType]).toString() || 0}
                // put all the options from the enum ViewType
                options={Object.entries(ViewType).map(([key, value]) => { if (isNaN(Number(value))) { return { key, text: value as string }; } }).filter((x): x is { key: string; text: string } => x !== undefined)}
                onChange={(_e, o) => { if (!o) return; vm.ViewType = o.key as ViewType; }}
              />
            </Stack>
          </th>
          {Array.from({ length: vm.HeadersCount }).map((_, i) => (
            <th key={i} style={{ height: 0, whiteSpace: "nowrap" }} >
              <Stack verticalAlign='center' styles={{ root: { padding: "0.3rem 1rem", border: "2px solid #fff", height: "100%", backgroundColor: "#eee", }, }} >
                <Text styles={{ root: { fontWeight: "600" } }}>
                  {vm.TableHeaderNames[i]}
                </Text>
              </Stack>
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
};

export default observer(TableHeaders);

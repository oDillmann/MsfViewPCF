import { Dropdown, Stack, Sticky, Text } from "@fluentui/react";
import { observer } from "mobx-react";
import React from "react";
import { useVM } from "../viewModel/context";
import { ViewType } from "../viewModel/MsfViewVM";

interface props {
  Departments: string[];
}

const TableHeaders = ({ Departments }: props) => {
  const vm = useVM();

  return (
    <>
      <colgroup>
        <col style={{ width: "auto" }} />
        {Departments.map(d => (
          <col key={d} style={{ width: "auto" }} />
        ))}
        <col style={{ width: "auto" }} />
        <col style={{ width: "auto" }} />
        <col style={{ width: "auto" }} />
        <col style={{ width: "auto" }} />
        <col style={{ width: "auto" }} />
        <col style={{ width: "auto" }} />
      </colgroup>
      <thead style={{ position: "sticky", top: 0, backgroundColor: "#fff" }}>
        <tr className='tableHeader' style={{ display: "table-row" }}>
          <th
            style={{
              height: 0,
              whiteSpace: "nowrap",
              position: "sticky",
              left: 0,
              top: 0,
              backgroundColor: "#fff",
            }}
          >
            <Stack
              verticalAlign='center'
              horizontal
              tokens={{ childrenGap: "0.5rem" }}
              styles={{
                root: {
                  padding: "0.6rem 1rem",
                  border: "2px solid #fff",
                  height: "100%",
                  width: "250px",
                  zIndex: 1,
                  position: "relative",
                },
              }}
            >
              <Text styles={{ root: { fontWeight: "600" } }}>Group By</Text>
              <Dropdown
                styles={{ root: { width: "100%" } }}
                defaultSelectedKey={
                  Object.values(ViewType)
                    .findIndex(value => value == ViewType[vm.ViewType])
                    .toString() || 0
                }
                options={
                  // put all the options from the enum ViewType
                  Object.entries(ViewType)
                    .map(([key, value]) => {
                      if (isNaN(Number(value))) {
                        return { key, text: value as string };
                      }
                    })
                    .filter(
                      (x): x is { key: string; text: string } => x !== undefined
                    )
                }
                onChange={(e, o) => {
                  if (!o) return;
                  vm.ViewType = o.key as ViewType;
                }}
              />
            </Stack>
          </th>
          {Departments.map(d => (
            <th key={d} style={{ height: 0, whiteSpace: "nowrap" }}>
              <Stack
                verticalAlign='center'
                styles={{
                  root: {
                    padding: "0.6rem 1rem",
                    border: "2px solid #fff",
                    height: "100%",
                    backgroundColor: "#eee",
                  },
                }}
              >
                <Text styles={{ root: { fontWeight: "600" } }}>{d}</Text>
              </Stack>
            </th>
          ))}
          <th
            style={{
              height: 0,
              whiteSpace: "nowrap",
              backgroundColor: "white",
            }}
          >
            <Stack
              horizontalAlign='center'
              styles={{ root: { marginInline: "10px", height: "100%" } }}
            >
              <div
                style={{
                  width: "1px",
                  height: "100%",
                  backgroundColor: "#aaa",
                }}
              >
                {" "}
              </div>
            </Stack>
          </th>
          <th style={{ height: 0, whiteSpace: "nowrap" }}>
            <Stack
              verticalAlign='center'
              styles={{
                root: {
                  padding: "0.6rem 1rem",
                  border: "2px solid #fff",
                  height: "100%",
                  backgroundColor: "#eee",
                },
              }}
            >
              <Text styles={{ root: { fontWeight: "600" } }}>
                Sales Agreement
              </Text>
            </Stack>
          </th>
          <th style={{ height: 0, whiteSpace: "nowrap" }}>
            <Stack
              verticalAlign='center'
              styles={{
                root: {
                  padding: "0.6rem 1rem",
                  border: "2px solid #fff",
                  height: "100%",
                  backgroundColor: "#eee",
                },
              }}
            >
              <Text styles={{ root: { fontWeight: "600" } }}>
                Machine Delivered to Customer
              </Text>
            </Stack>
          </th>
          <th style={{ height: 0, whiteSpace: "nowrap" }}>
            <Stack
              verticalAlign='center'
              styles={{
                root: {
                  padding: "0.6rem 1rem",
                  border: "2px solid #fff",
                  height: "100%",
                  backgroundColor: "#eee",
                },
              }}
            >
              <Text styles={{ root: { fontWeight: "600" } }}>Data Auth</Text>
            </Stack>
          </th>
          <th style={{ height: 0, whiteSpace: "nowrap" }}>
            <Stack
              verticalAlign='center'
              styles={{
                root: {
                  padding: "0.6rem 1rem",
                  border: "2px solid #fff",
                  height: "100%",
                  backgroundColor: "#eee",
                },
              }}
            >
              <Text styles={{ root: { fontWeight: "600" } }}>
                Delivery Service Record
              </Text>
            </Stack>
          </th>
          <th style={{ height: 0, whiteSpace: "nowrap" }}>
            <Stack
              verticalAlign='center'
              styles={{
                root: {
                  padding: "0.6rem 1rem",
                  border: "2px solid #fff",
                  height: "100%",
                  backgroundColor: "#eee",
                },
              }}
            >
              <Text styles={{ root: { fontWeight: "600" } }}>
                CWS ID Provided
              </Text>
            </Stack>
          </th>
        </tr>
      </thead>
    </>
  );
};

export default observer(TableHeaders);

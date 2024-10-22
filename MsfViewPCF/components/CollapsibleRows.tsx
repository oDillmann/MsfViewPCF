import { Icon, Stack, Text } from '@fluentui/react';
import { observer } from 'mobx-react';
import React from 'react';
import { useBoolean } from '@fluentui/react-hooks';
import BodyRows from './BodyRows';
import { MachineSetupForm } from '../types/MachineSetupForm';

interface props {
  MSF: MachineSetupForm[];
  periodTitle: string
  pastDue?: boolean
}

const CollapsibleRows = ({ MSF, periodTitle, pastDue }: props) => {
  const [expanded, { setTrue: expand, setFalse: collapse }] = useBoolean(false);
  // const periodTitleColor = pastDue ? "#ff5555" : "#5555ff"

  if (MSF.length === 0) return (
    <tr style={{ display: 'table-row', userSelect: 'none' }}>
      <td colSpan={1}>
        <Stack
          horizontal
          tokens={{ childrenGap: 10 }}
          verticalAlign="center"
          styles={{
            root: {
              padding: "0.6rem 1rem",
              border: "2px solid #fff",
              backgroundColor: 'white',
            }
          }}
        >
          <Text variant="mediumPlus" styles={{ root: { color: "#888", fontWeight: 600 } }}>{periodTitle}</Text>
          <Icon iconName="ChromeMinimize" styles={{ root: { fontSize: '1.2rem', color: '#888', } }} />
        </Stack>
      </td>
    </tr>
  )

  return (
    <>
      <tr style={{ display: 'table-row', userSelect: 'none' }} onClick={() => expanded ? collapse() : expand()}>
        <td colSpan={1} >
          <Stack
            horizontal
            tokens={{ childrenGap: 10 }}
            verticalAlign="center"
            styles={{
              root: {
                padding: "0.6rem 1rem",
                border: "2px solid #fff",
                backgroundColor: 'white',
                cursor: "pointer",

              }
            }}
          >
            <Text variant="mediumPlus" styles={{ root: { fontWeight: 600 } }}>{periodTitle}</Text>
            <Icon iconName="ChevronDownMed" styles={{
              root: {
                fontSize: '1.2rem',
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.1s ease-in-out'
              }
            }} />
          </Stack>
        </td>
      </tr>
      {MSF.map((msf) => (
        <tr className="tableRow" key={msf.guid} style={{ display: expanded ? 'table-row' : 'none' }}>
          <td style={{ backgroundColor: '#fff' }}>
          </td>
          <BodyRows msf={msf} />
        </tr>
      ))
      }
    </>
  )
}

export default observer(CollapsibleRows);

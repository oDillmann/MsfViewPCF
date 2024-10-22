import React, { useState } from 'react';
import { Icon, Link, makeStyles, Stack, Text, TextField } from '@fluentui/react';
import { axa_dealsetupformMetadata } from '../cds-generated/entities/axa_DealSetupForm';
import { MachineSetupForm } from '../types/MachineSetupForm';
import { useVM } from '../viewModel/context';

interface props { msf: MachineSetupForm }

const useStyles = makeStyles((theme) => ({
  acceptButton: {
    width: '100%', padding: 0, borderRadius: "5px", borderTopRightRadius: "0px", borderBottomRightRadius: "0px",
    transition: "80ms ease-in-out all", backgroundColor: theme.palette.themePrimary, color: theme.palette.white,
    border: "none", height: "100%", cursor: "pointer",
    "&:hover": { backgroundColor: theme.palette.themeDarkAlt },
    "&:active": { backgroundColor: theme.palette.themeDark }
  },
  acceptButtonDisabled: {
    width: '100%', padding: 0, borderRadius: "5px", borderTopRightRadius: "0px", borderBottomRightRadius: "0px", cursor: "not-allowed",
    backgroundColor: theme.palette.neutralLight, color: theme.palette.neutralTertiaryAlt, border: "none", height: "100%",
  }
}))

const BodyRows = ({ msf }: props) => {
  const vm = useVM();
  const styles = useStyles();
  const [_isLoading, setIsLoading] = useState(false);
  const [completedDate, setCompletedDate] = useState<Date | null>(null);

  const saveCompletedDate = async () => {
    if (completedDate) {
      // check if the text field is empty
      setIsLoading(true);
      try {
        await vm.completeMsf(msf.guid, completedDate)
      } catch (e) {
        setIsLoading(false)
      }
    }
  }

  return (
    <>
      {Object.entries(vm.TableHeaderNames).map(([key]) => (
        <td style={{ height: 0, whiteSpace: 'nowrap' }} key={key}>
          <Stack verticalAlign="center" horizontalAlign="start" styles={{ root: { padding: '0.6rem 1rem', border: '2px solid #eee', height: '100%' } }} >
            {key === "6" ?
              <Link variant="mediumPlus" styles={{ root: { fontWeight: "600" } }} onClick={() => { vm.context.navigation.openForm({ entityName: axa_dealsetupformMetadata.logicalName, entityId: msf.guid, openInNewWindow: true }) }}>{msf.id}</Link>
              : (key === "10" && !vm.isReadOnly) ? (
                <Stack horizontal >
                  <Stack.Item styles={{ root: { width: "32px", height: "32px" } }}>
                    <button
                      onClick={saveCompletedDate}
                      className={completedDate ? styles.acceptButton : styles.acceptButtonDisabled}
                    >
                      <Icon iconName="Accept" styles={{ root: { height: "1rem", aspectRatio: "1", fontWeight: "900" } }} />
                    </button>
                  </Stack.Item>
                  <TextField type="date" styles={{ fieldGroup: { border: "1px solid #ddd" } }} onChange={(_e, value) => { console.log("changed", value); setCompletedDate(value ? new Date(value) : null) }} />
                </Stack>
              ) : (
                <Text variant="mediumPlus" nowrap block styles={{ root: { ...(key === "9" ? { fontWeight: '600', ...(msf.MsfStatus === "Approved" ? { color: "#2c2" } : msf.MsfStatus === "Submitted" ? { color: "red" } : {}) } : {}) } }}>
                  {key === "0" ? msf.customerName :
                    key === "1" ? msf.estimatedDelivery?.toDateString() :
                      key === "2" ? msf?.model :
                        key === "3" ? msf?.typeOfSale :
                          key === "4" ? msf?.salesResponsible :
                            key === "5" ? msf?.serialNumber :
                              key === "7" ? msf?.pickupDelivery :
                                key === "8" ? msf?.inStock :
                                  key === "9" ? msf?.MsfStatus :
                                    key === "10" && vm.isReadOnly ? msf?.completedDate : ""
                  }
                </Text>
              )}
          </Stack>
        </td>
      ))
      }
    </>
  )
}

export default BodyRows;

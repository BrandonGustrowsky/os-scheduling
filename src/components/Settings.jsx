import { Box,    IconButton, Input, InputLabel, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material"
import Line from "./Line"
import FormItem from "./FormItem"
import AddBoxIcon from '@mui/icons-material/AddBox';
import { SnackbarProvider, useSnackbar } from 'notistack'

const Settings = (props) => {
    const { queuesAndTimes, setQueuesAndTimes, newProcess, setNewProcess, queues, stats, setStats, addProcess, addQueues, time } = props
    const theme = useTheme()
    const resize = useMediaQuery(theme.breakpoints.down(theme.breakpoints.settingsMajor));
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()

    return (
        <Box sx={{
            display: "flex",
            width: "100%",
            height: "max-content",
            // justifyContent: "space-around",
            [theme.breakpoints.down(theme.breakpoints.settingsMajor)]: {
                flexDirection: "column",
                // gap: "5px",
                columnGap: "20px"

            }
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignSelf: "center",
            }}>
                <FormItem
                    width="125px"
                    text="# Queues"
                    id="1"
                    queuesAndTimes={queuesAndTimes}
                    setQueuesAndTimes={setQueuesAndTimes}
                    queues={queues}
                    // setQueues={setQueues}
                    objKey={Object.keys(queuesAndTimes)[0]}
                    changeFunction={() => {
                        addQueues()
                        enqueueSnackbar(`Added ${queuesAndTimes.queues} queues`);
                    }}
                />
                <FormItem
                    width="125px"
                text="Time Quantum Length (# ticks)"
                    id="2"
                    queuesAndTimes={queuesAndTimes}
                    setQueuesAndTimes={setQueuesAndTimes}
                    objKey={Object.keys(queuesAndTimes)[1]}
                />
                <FormItem
                    width="125px"
                    text="Priority Boost Interval (# ticks)"
                    id="3"
                    queuesAndTimes={queuesAndTimes}
                    setQueuesAndTimes={setQueuesAndTimes}
                    stats={ stats }
                    setStats={ setStats }
                    isMultipleStates={ true }
                    objKey={Object.keys(queuesAndTimes)[2]}
                />
            </Box>
            <Line
                rotation={ resize ? "0.25turn" : "0turn" }
                width={ resize ? "0px" : "3px" }
                height="300px"
                color={theme.palette.secondary.main}
            />
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignSelf: "center",
            }}>
                <FormItem
                    width="200px"
                    text="Process Name"
                    id="4"
                    newProcess={newProcess}
                    setNewProcess={setNewProcess}
                    objKey={Object.keys(newProcess)[0]}
                />
                <FormItem
                    width="200px"
                    text="Process Length (# Timeslots)"
                    id="5"
                    newProcess={newProcess}
                    setNewProcess={setNewProcess}
                    objKey={Object.keys(newProcess)[1]}
                />
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <Typography variant="h6">
                        Create New Process
                    </Typography>
                    <Tooltip title="Add Process">
                        <IconButton onClick={() => {
                            addProcess()
                            enqueueSnackbar(`Process '${newProcess.name}' has been created.`)
                            }}
                            >
                            <AddBoxIcon sx={{
                                color: theme.palette.primary.main,
                                fontSize: "30px"
                            }} />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
            <Line
                rotation={ resize ? "0.25turn" : "0turn" }
                width={ resize ? "0px" : "3px" }
                height="300px"
                color={theme.palette.secondary.main}
            />
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignSelf: "center",
            }}>
                <Box>
                    <InputLabel
                        htmlFor={`input-6`}>
                        <Box sx={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center"
                        }}>
                            <Typography
                                variant="h6"
                                sx={{ whiteSpace: "wrap", }}
                            >
                                Running Process
                            </Typography>
                        </Box>
                    </InputLabel>
                    <Input
                        id={`input-6`}
                        disableUnderline={true}
                        // disabled={true}
                        value={stats.processExecuting ? stats.processExecuting.name : "None"}
                        sx={{
                            width: "200px",
                            height: "45px",
                            background: theme.palette.black.main,
                            border: `2px solid ${theme.palette.secondary.main}`,
                            color: theme.palette.primary.main,
                            paddingLeft: "10px"
                        }}
                    />
                </Box>
                <Box>
                    <InputLabel
                        htmlFor={`input-7`}>
                        <Box sx={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center"
                        }}>
                            <Typography
                                variant="h6"
                                sx={{ whiteSpace: "wrap", }}
                            >
                                Tick #
                            </Typography>
                        </Box>
                    </InputLabel >
                    <Input
                        id={`input-7`}
                        disableUnderline={true}
                        // disabled={true}
                        value={ time }
                        sx={{
                            width: "200px",
                            height: "45px",
                            background: theme.palette.black.main,
                            border: `2px solid ${theme.palette.secondary.main}`,
                            color: "white",
                            fontSize: "20px",
                            paddingLeft: "10px"
                        }}
                    />
                </Box>
                <Box>
                    <InputLabel
                        htmlFor={`input-8`}>
                        <Box sx={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                            color: theme.palette.primary.main
                        }}>
                            <Typography
                                variant="h6"
                                sx={{ whiteSpace: "wrap", }}
                            >
                                Ticks Until Priority Boost
                            </Typography>
                        </Box>
                    </InputLabel>
                    <Input
                        id={`input-8`}
                        disableUnderline={true}
                        // disabled={true}
                        value={stats.untilReset}
                        sx={{
                            width: "200px",
                            height: "45px",
                            background: theme.palette.black.main,
                            border: `2px solid ${theme.palette.secondary.main}`,
                            color: theme.palette.primary.main,
                            paddingLeft: "10px",
                            fontSize: "20px",
                        }}
                    />
                </Box>
            </Box>
        </Box >
    )
}

export default Settings
import { Box, Typography, useTheme } from "@mui/material"
import Process from "./Process"

const Queue = (props) => {
    const { queueDs, pos } = props
    const theme = useTheme()
    return (
        <Box sx={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
            width: "100%"
        }}>
            <Typography
                variant="h6"
                color="primary"
                visibility={pos === 0 ? "visible" : "hidden"}
            >
                Highest Priority
            </Typography>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                width: "100%"
            }}>
                <Typography
                    variant="h6"
                    color="primary"
                >
                    {queueDs.name}
                </Typography>
                <Box sx={{
                    background: theme.palette.primary.main,
                    borderRadius: "8px",
                    width: "85%",
                    height: "45px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "right",
                    flexDirection: "row-reverse",
                }}>
                    {
                        queueDs.processes.map((process, index) => {
                            return <Process
                                processDs={ process }
                                key={ index }
                            />
                        })
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default Queue
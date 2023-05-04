import { Box, IconButton, Typography, useTheme } from "@mui/material"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { QueueDS } from "../classes/Queue.class"
import { useEffect, useState } from "react";

const Output = (props) => {
    const { queuesAndTimes, queues, isPlaying, setIsPlaying, createQueueComponents } = props

    const theme = useTheme()

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
            alignItems: "center"
        }}>
            <Box sx={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
            }}>
                <Typography
                    variant="h6"
                    color="primary"
                >
                    {isPlaying ? "Pause" : "Play"}
                </Typography>
                <IconButton onClick={() => { setIsPlaying(prevIsPlaying => !prevIsPlaying) }}>
                    {
                        isPlaying ?
                            <PauseCircleIcon sx={{
                                fontSize: "30px",
                                color: theme.palette.primary.main
                            }} />
                            :
                            <PlayCircleIcon sx={{
                                fontSize: "30px",
                                color: theme.palette.primary.main
                            }} />
                    }
                </IconButton>
            </Box>
            { createQueueComponents() }
        </Box>
    )
}

export default Output
import { Box, Stack } from "@mui/material";
import { Skeleton } from '@mui/material/';
import React, { useState } from "react";

const Feed = () => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, [700]);

    return (
        <Box>
            <Stack spacing={1}>
                <Skeleton variant="text" height={100} />
                <Skeleton variant="text" height={20} />
                <Skeleton variant="text" height={20} />
                <Skeleton variant="rectangular" height={300} />
            </Stack>
        </Box>
    );
};

export default Feed;

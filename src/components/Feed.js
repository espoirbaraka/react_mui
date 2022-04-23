import { Box, Stack } from "@mui/material";
import { Skeleton } from '@mui/lab/';
import React, { useState } from "react";
import UI_liste_batterie from "../containers/UI_liste_batterie";

const Feed = () => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, [1000]);

    return (
        <Box flex={4} p={{ xs: 0, md: 2 }}>
            {loading ? (
                <Stack spacing={1}>
                    <Skeleton variant="text" height={100} />
                    <Skeleton variant="text" height={20} />
                    <Skeleton variant="text" height={20} />
                    <Skeleton variant="rectangular" height={300} />
                </Stack>
            ) : (
                <>
                    <UI_liste_batterie />
                </>
            )}
        </Box>
    );
};

export default Feed;

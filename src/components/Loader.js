import React from "react";
import { LinearProgress } from "@material-ui/core";

function Loader() {
    const [progress, setProgress] = React.useState(30);
    const [bufferProgress, setBufferProgress] = React.useState(60);
    return (
        <div style={{ "paddingTop": "0px" }}>
            <LinearProgress
                variant="determinate"
                value={progress}
                color="secondary"
                valueBuffer={bufferProgress}
            />
        </div>
    )
}
export default Loader;
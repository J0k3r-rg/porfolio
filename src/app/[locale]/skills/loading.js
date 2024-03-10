'use client'
import { Skeleton } from "@mui/material";


export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="w-full h-full flex justify-center items-center">
            {
                () => setInterval(() => {
                    console.log("Loading...");
                }
                , 2000)
            }
            <Skeleton variant="rectangular" width={210} height={118} />
        </div>
    );
}
'use client'
import { Skeleton } from "@mui/material";


export default function Loading() {
    setTimeout(() => {
        console.log("Loading...");
    }, 1000);
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="w-full h-full flex justify-center items-center">
            <Skeleton variant="rectangular" className="md:w-11/12 lg:w-10/12 m-auto flex flex-col lg:flex-row min-h-[calc(100vh_-_128px_-_80px)] md:grid-cols-2 items-center"/>
        </div>
    );
}
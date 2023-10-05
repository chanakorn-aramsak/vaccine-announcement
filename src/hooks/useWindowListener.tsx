'use client'
import { useEffect } from "react";

const useWindowListener = (eventType: string, listener: EventListener): void => {
    useEffect(() => {
        window.addEventListener(eventType, listener);

        return () => {
            window.removeEventListener(eventType, listener);
        };
    }, [eventType, listener]);
}

export default useWindowListener;

import { useState, useEffect, useRef } from 'react';

// custom function to calculate vertical scroll
export const useRefState = ( initialVal ) => {
    const [offsetY, setOffsetY] = useState(initialVal)
    const yRef = useRef(offsetY)
    
    const handleScroll = () => {
        setOffsetY(window.pageYOffset)
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        yRef.current = offsetY
    }, [offsetY]);

    return [yRef,setOffsetY];
}
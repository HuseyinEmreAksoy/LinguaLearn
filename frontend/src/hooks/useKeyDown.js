
import { useEffect, useState } from "react";
const useKeyDown = (keyDownHandler) => {
    const [key, setKey] = useState("");

    useEffect(() => {
        const keyDownHandler = event => {
            keyDownHandler(event);
        };
    
        document.addEventListener('keydown', keyDownHandler);
    
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
      }, []);

      return key;
}

export default useKeyDown;
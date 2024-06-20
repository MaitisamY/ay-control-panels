import { useState, useEffect } from 'react'

const useMassImports = () => {
    const [isStatusReloading, setIsStatusReloading] = useState(true);

    useEffect(() => {
        if (isStatusReloading) {
            setTimeout(() => {
                setIsStatusReloading(false);
            }, 5000);
        }
    }, [isStatusReloading]);

    return { isStatusReloading };
}

export default useMassImports
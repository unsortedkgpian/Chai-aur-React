// function Hello() {
 // It is also a hook. 
 // Hook is just a function which return some thing in return

// }

import { useEffect , useState } from 'react';

function useCurrencyInfo(currecny){

    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currecny}.json`)
        .then((res) => res.json() )
        .then((res) => setData(res[currecny]))
        console.log(data);
    }, [currecny]);
    console.log(data);
    return data;
}

export default useCurrencyInfo;


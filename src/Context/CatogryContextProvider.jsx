import { useState } from "react";

import CatogryContext from "./CatogryContext";

const CatogryContextProvider = ({children}) => {
    const [catagory, setCatagory] = useState('')

    return (
        <CatogryContext.Provider value={{catagory, setCatagory}}>
            {children}
        </CatogryContext.Provider>
    )
}

export default CatogryContextProvider

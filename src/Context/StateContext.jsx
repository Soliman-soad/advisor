import React, { createContext, useEffect, useState } from 'react';

export const StateManage = createContext();
const StateContext = ({children}) => {
    const [formOpen, setFormOpen] = useState(false)
    

    const state = {formOpen, setFormOpen};
    return (
        <StateManage.Provider value={state}>
            {children}
        </StateManage.Provider>
    );
};

export default StateContext;
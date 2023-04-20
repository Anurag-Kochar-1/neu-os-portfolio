"use client"

import React, { useState, ReactNode, createContext } from 'react'


export interface IAppContextType {
    isFolderOpen: boolean
    setIsFolderOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultState = {
    isFolderOpen: false,
    setIsFolderOpen: () => { }
} as IAppContextType

export const AppContext = createContext(defaultState)


const AppContextProvider = ({ children }: { children: ReactNode }) => {

    const [isFolderOpen, setIsFolderOpen] = useState<boolean>(false)

    return (
        <AppContext.Provider
            value={{
                isFolderOpen, setIsFolderOpen
            }}
        >
            {children}

        </AppContext.Provider>
    )
}

export default AppContextProvider
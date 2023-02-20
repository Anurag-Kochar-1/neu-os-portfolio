"use client"

import React, { useState } from 'react'
import { FolderContext } from './FolderContext'

interface IFolderContextProviderProps {
    children: React.ReactNode
}

const FolderContextProvider = ({ children }: IFolderContextProviderProps) => {

    const [isFolderOpen, setIsFolderOpen] = useState<boolean>(false)

    return (
        <FolderContext.Provider
            value={{
                isFolderOpen, setIsFolderOpen
            }}
        >
            {children}

        </FolderContext.Provider>
    )
}

export default FolderContextProvider
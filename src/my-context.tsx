import { createContext, useState, type PropsWithChildren } from "react"

type MyContextType = {
    counter: number,
    setCounter: (newValue: number) => void
}

export const MyContext = createContext<MyContextType>({
    counter: 0,
    setCounter: () => {}
})

export const MyContextProvider = ({children}: PropsWithChildren) => {
    const [counter, setCounter] = useState(0)
    
    return <MyContext value={{
        counter,
        setCounter
    }}>{children}</MyContext>
}
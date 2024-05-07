import { createContext, useContext, useState } from "react";

const CharacterAnimationContext = createContext({})

export const CharacterAnimationProvider = (props)=>{
    const [animationIndex , setAnimationIndex] = useState(0)
    const [animation , setAnimation]  =useState([])
    return (<CharacterAnimationContext.Provider value={{
        animation,setAnimation ,animationIndex  , setAnimationIndex
    }}>
            {props.children}
    </CharacterAnimationContext.Provider>)
}


export const UseCharacterAnimation = ()=>{return useContext(CharacterAnimationContext)}
 
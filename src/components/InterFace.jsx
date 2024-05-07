import { UseCharacterAnimation } from "../context/CharacterAnimation"

const InterFace = () => {
    const {animation , setAnimationIndex} = UseCharacterAnimation();

    return (
        <div
            style={{display:"flex" , alignItems : "center" , gap:"20px" , background:"black", padding:"20px"}}
        > 
            {animation.map((ani,id)=>{
                    return (
                        <button key={id} onClick={()=>setAnimationIndex(id)} 
                            style={{borderRadius:"10px" , background:"white" , color:"black" }}
                        >
                            {ani}
                        </button>
                    )
            })}        
        </div>
    )
}

export default InterFace

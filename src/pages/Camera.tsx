import Webcam from "react-webcam"
import Keyboard from "../comps/Keyboard"

export default function Camera() {
    return(
        <div>
            <Keyboard opened={true} onClose={()=>{}} enterButton={()=>{}} onBackspace={()=>{}}/>
        </div>
    )
}
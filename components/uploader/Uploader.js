import { forwardRef, useImperativeHandle, useState } from "react"

const Uploader = forwardRef((props , ref) =>{
    const [imgUrl , setImgUrl] = useState(null)
    const onChange = (event)=>{
        setImgUrl(URL.createObjectURL(event.target.files[0]))
        props.updateImageData(event.target.files[0])
        console.log("IIIIIIIIIII",URL.createObjectURL(event.target.files[0]))
    }

    return(
        <>
            <div className="form-input mb-2 mt-2">
                <img
                    style={{maxHeight : "40vh"}}
                    src={imgUrl}
                />
            </div>
            <input
                type={"file"}
                onChange={onChange}
            />
        </>
    )
})

export default Uploader
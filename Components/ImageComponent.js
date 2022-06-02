import Image from "next/image";

const ImageComponent=()=>{
    return (
        <>
            <Image 
                src = "/images/profile.png"
                height={150}
                width={150}
                alt = "Matt Howels"
            />
        </>
    )
};

export default ImageComponent;
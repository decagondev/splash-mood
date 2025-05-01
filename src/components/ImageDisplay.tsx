import { FC } from "react";

type ImageDisplayProps = {
    imageUrl: string;
}


export const ImageDisplay: FC<ImageDisplayProps> = ({ imageUrl }) => {
    return (
        <div className="mt-6">
            <img src={imageUrl} alt="image" className="w-full max-w-lg shadow-xl rounded-xl mx-auto transition duration-300 hover:scale-105" />
        </div>
    )
}
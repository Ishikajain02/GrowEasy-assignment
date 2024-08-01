import React from "react";
import Image from 'next/image';
const BannerImageComp=({title,description,cta,image,background,onEdit})=>{
    return (
        <div className="relative border p-4" style={{background}}>
            <Image src={image} alt={title} width={500} height={400} className="w-full object-cover"/>
           <div className="mt-4 text-center">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-gray-600">{description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">{cta}</button>

           </div>
           <button onClick={onEdit} className="absolute top-2 right-2 text-gray-700">🖊</button>
        </div>
    )
}
export default BannerImageComp;
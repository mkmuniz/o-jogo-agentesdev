import Image from "next/image";
import React from "react";

export default function Header() {
    return <>
        <div className="bg-header h-screen w-full flex items-center justify-center">
            <div className="">  
                <Image src={'/img/logo-agdv.png'} width={300} height={300} alt={"nao sei"} />
            </div>
        </div>
    </>
};
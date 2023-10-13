import React from "react";

export default function FirstChallenge() {
    return <>
        <div className="bg-secondBackground relative h-screen w-full font-spacemono text-black flex flex-col items-center justify-center">
            <span className="text-easy">FÁCIL</span>
            <div className="bg-standard z-20 w-[80%] h-[80%] rounded-3xl text-center flex flex-col justify-center">
                <span className=" m-6">
                    Dada a palavra Ministério, qual é a palavra criptografada?
                </span>
                <span>
                    <p>
                        Palavra fornecida: Médico. Palavra criptografada: Pygcfi.
                    </p>
                    <p>
                        Palavra fornecida: Aula.  Palavra criptografada: Uoou.
                    </p>
                    <p>
                        Palavra fornecida: Óculos. Palavra criptografada:  Ifooiv.
                    </p>
                </span>
            </div>
            <div className="z-0 absolute inset-x-[11%] inset-y-[13%] w-4/5 h-4/5 rounded-3xl bg-black transition duration-200 ease-out transform translate-x-1 translate-y-1 border-white border-x border-y group-hover:-translate-x-0 group-hover:-translate-y-0">
            </div>
        </div>
    </>;
};
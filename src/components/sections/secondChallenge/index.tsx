import React from "react";

export default function SecondChallenge() {
    return <>
        <div className="w-[100%] h-screen relative text-black font-spacemono bg-thirdBackground flex flex-col items-center justify-center">
            <span className="text-medium">MÉDIO</span>
            <div className="bg-standard z-20 w-[80%] h-[80%] rounded-3xl text-center flex flex-col justify-center">
                <span className=" m-6">
                    Quando se têm o número 92, qual é a saída?
                </span>
                <span>
                    <p>
                        Número fornecido: 29. Número de saída: 51.
                    </p>
                    <p>
                        Número fornecido: 48. Número de saída: 72.
                    </p>
                    <p>
                        Número fornecido: 37. Número de saída: 60.
                    </p>
                    <p>
                        Número fornecido 53, número de saída 88.
                    </p>
                </span>
            </div>
            <div className="z-0 absolute inset-x-[11%] inset-y-[13%] w-4/5 h-4/5 rounded-3xl bg-black transition duration-200 ease-out transform translate-x-1 translate-y-1 border-white border-x border-y group-hover:-translate-x-0 group-hover:-translate-y-0">
            </div>
        </div>
    </>
};
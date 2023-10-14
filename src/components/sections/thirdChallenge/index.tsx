import React from "react";

export default function ThirdChallenge() {
    return <>
        <div className="w-[100%] h-screen relative text-black font-spacemono bg-fourthBackground flex flex-col items-center justify-center">
            <span className="text-hardcore">HARDCORE</span>
            <div className="bg-standard z-20 w-[80%] h-[80%] rounded-3xl text-center flex flex-col justify-center">
                <span className=" m-6">
                    Qual é a chave privada, dado o IP 205.169.47.1, data 2014/02/23 e hora 10:06?
                </span>
                <p>
                    Dicas:
                </p>
                <span>
                    <ul className="list-item">
                        <li>
                            192.179.18.57 data: 2005/05/14 horas: 15:20
                            <br />Resultado: 5420.417.65.05
                        </li>
                        <li>
                            192.175.56.38 data: 2017/11/24 horas: 08:04
                            <br />Resultado: 5532.429.13.49
                        </li>
                        <li>
                            158.230.27.03 data: 2009/06/02 horas: 19:57
                            <br /> Resultado: 5490.569.52.55
                        </li>
                    </ul>
                </span>
            </div>
            <div className="z-0 absolute inset-x-[11%] inset-y-[14%] w-4/5 h-4/5 rounded-3xl bg-black transition duration-200 ease-out transform translate-x-1 translate-y-1 border-white border-x border-y group-hover:-translate-x-0 group-hover:-translate-y-0">
            </div>
        </div>
    </>
};
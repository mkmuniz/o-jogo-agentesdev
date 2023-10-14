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
                    Exemplo:
                </p>
                <span>
                    <ul className="list-item">
                        <li>
                            192.179.18.57 data: 2005/05/14 hora:15:20
                        </li>
                        <li>
                            1. 192+2005=2197
                        </li>
                        <li>
                            2. 179+05=184
                        </li>
                        <li>
                            3. 18+14=32
                        </li>
                        <li>
                            4. 72=05
                        </li>
                        <li>
                            Aplicando a cifra de césar sempre andar 3 casas a direita e número maior que 9, preserva o último algarismo
                        </li>
                        <li>
                            1.  2197 =5420
                        </li>
                        <li>
                            2.  184=417
                        </li>
                        <li>
                            3. 32=65
                        </li>
                        <li>
                            4. 72=05
                        </li>
                        <li>
                            Número final: 5420.417.65.05
                        </li>
                    </ul>
                </span>
            </div>
            <div className="z-0 absolute inset-x-[11%] inset-y-[14%] w-4/5 h-4/5 rounded-3xl bg-black transition duration-200 ease-out transform translate-x-1 translate-y-1 border-white border-x border-y group-hover:-translate-x-0 group-hover:-translate-y-0">
            </div>
        </div>
    </>
};
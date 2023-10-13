import React from "react";

export default function WarnSection() {
    return <>
        <div className="bg-header relative h-screen w-full font-spacemono flex flex-col items-center justify-center overflow-hidden">
            <div className="flex flex-col justify-center items-center space-y-2">
                <span className="text-red-600 m-3">
                    AVISO:
                </span>
                <span className="justify-center text-center m-6">
                    Quaisquer semelhanças de personagens com figuras do mundo real são
                    <br /> apenas coincidências e não necessariamente refletem a realidade.
                </span>
            </div>
            <div className="bg-standard z-20 w-4/5 h-4/5 rounded-3xl text-center flex flex-col justify-center m-6 overflow-auto" style={{ paddingTop: '5rem' }}>
                <span className=" text-black m-6">
                    Cabelos Livres é uma empresa de tratamento capilar. Seu principal produto é o Não Calvo, um remédio que age contra a queda de cabelo. Nos últimos 12 meses, a organização viveu um boom de 600% nas suas vendas. Especialistas afirmam que esse aumento é devido ao respeito à privacidade dos clientes, preços baixos e marketing efetivo. Mas algumas pessoas não estavam satisfeitas com esse sucesso.
                </span>
                <span className="text-black m-6">
                    <br /> Um Ministro do Supremo Tribunal Democrático (STD), Xandão Moreira, determinou o bloqueio das contas e confisco de bens da Cabelos Livres, após alegar que o modelo de negócios deles era baseado em pensamentos preconceituosos e ofensivos a um problema sensível: A calvície. Em votação, o STD caminha para criminalizar a carecofobia.
                </span>
            </div>
            <div className="z-0 absolute inset-x-[11%] inset-y-[22%] w-4/5 h-[76%] rounded-3xl bg-black transition duration-200 ease-out transform translate-x-1 translate-y-1 border-white border-x border-y group-hover:-translate-x-0 group-hover:-translate-y-0">
            </div>
        </div>
    </>
};
import React from "react";

interface CardData {
    children: React.ReactNode,
    title: string,
    desc: string
}

export default function ServicesCard({ children, title, desc }: CardData) {
    return (
        <div className="p-3 w-3/12 max-[824px]:w-4/12 max-[600px]:w-6/12 max-[450px]:w-11/12">
            <div className="border border-white rounded-xl min-h-[100px] shadow-lg">
                <div className="flex justify-center text-6xl py-3 text-purple-700">
                    {children}
                </div>
                <h1 className="text-lg">{title}</h1>
                <div className="pb-3 px-3">
                    <p>
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    )
}
import React from 'react';

const Numbers = () => {
    return (
        <div className="bg-primary">
            <div className="flex flex-col sm:flex-row justify-between items-center p-6 container max-w-screen-lg mx-auto h-72">
                <div className="text-center mb-8 sm:mb-0">
                    <p className="text-3xl sm:text-7xl font-bold">+5</p>
                    <p className="font-semibold text-sm sm:text-xl">Anos de Experiência</p>
                </div>
                <div className="text-center mb-8 sm:mb-0">
                    <p className="text-3xl sm:text-7xl font-bold">+40</p>
                    <p className="font-semibold text-sm sm:text-xl">Anos de Suporte</p>
                </div>
                <div className="text-center">
                    <p className="text-3xl sm:text-7xl font-bold">+5</p>
                    <p className="font-semibold text-sm sm:text-xl">Projetos Implementados</p>
                </div>
            </div>
        </div>
    );
};

export default Numbers;
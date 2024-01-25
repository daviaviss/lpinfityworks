import React from 'react';

const Main = () => {
    return (
        <div className='flex items-center justify-center p-4 bg-main-image h-screen bg-cover bg-no-repeat bg-center'>
            <main className="container max-w-screen-lg mx-auto text-center">
                <h1 className="text-4xl md:text-8xl font-bold mb-4 mt-16 text-primary tracking-widest">TRANSFORME</h1>
                <p className="text-base md:text-lg mb-8 md:mb-14 text-white font-normal">
                    Sua visão em realidade com a <span className="font-semibold text-primary italic tracking-wide">InfityWorks</span>
                </p>
                <p className="text-sm md:text-base mb-8 md:mb-14 text-white font-extralight">
                    Desenvolvemos soluções inovadoras com <span className="font-semibold italic">solidez,<br /></span> <span className="font-semibold italic">confiabilidade</span> e uma <span className="font-semibold italic">abordagem moderna.</span>
                </p>
                <div className="flex items-center justify-center">
                    <button className="text-sm md:text-base lg:text-lg border-2 border-primary text-black bg-primary font-semibold py-2 md:py-3 px-6 md:px-9 lg:px-12">
                        FALE CONOSCO!
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Main;
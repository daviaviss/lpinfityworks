import React from 'react';

const About = () => {
    return (
        <div className="bg-cover bg-no-repeat bg-center min-h-screen bg-about-image text-white p-12 flex flex-col md:flex-row">
            <div className="container max-w-screen-lg mx-auto mt-32">
                <h1 className="text-5xl font-medium mb-32 text-center text-gray-800 tracking-widest">QUEM SOMOS</h1>

                <div className="mb-32 md:w-1/2">
                    <div className="text-left max-w-md md:max-w-lg">
                        <h2 className="text-2xl font-semibold">Nossa história</h2>
                        <p className="text-lg font-extralight text-primary">
                            Desde a fundação, a <span className="font-normal">InfityWorks</span>. trilhou seu caminho no mundo do desenvolvimento de software, marcando uma jornada de inovação, superação de desafios e parcerias sólidas.
                        </p>
                    </div>
                </div>

                <div className="mb-32 md:w-1/2 text-right md:ml-auto">
                    <div className="max-w-md md:max-w-xl">
                        <h2 className="text-2xl font-semibold">Equipe <span className="font-semibold">Excepcional</span></h2>
                        <p className="text-lg font-extralight text-primary">
                            Nossa excelência é impulsionada pela equipe, composta por especialistas <span className="font-normal">apaixonados e dedicados</span>. Cada membro traz uma expertise única, formando um conjunto poderoso para atender às suas necessidades de desenvolvimento.
                        </p>
                    </div>
                </div>

                <div className="mb-32 md:w-1/2">
                    <div className="text-left max-w-md md:max-w-lg">
                        <h2 className="text-2xl font-semibold">Nossos Valores</h2>
                        <p className="text-lg font-extralight text-primary">
                            Comprometemo-nos a superar expectativas, guiados pelos valores de integridade, transparência e inovação. Na InfityWorks, não construímos apenas software; construímos confiança.
                        </p>
                    </div>
                </div>

                <div className="text-center mb-16">
                    <button className="text-sm p-2 md:text-base border-2 border-primary text-black bg-primary font-semibold py-2 md:py-3 md:px-14">
                        EXPLORE O FUTURO DIGITAL CONOSCO!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
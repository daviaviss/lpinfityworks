import React from 'react';
import Image from 'next/image';

const OnDemand = () => {
    return (
        <div className="min-h-screen bg-black text-white p-4">
            <div className="container max-w-screen-lg mx-auto flex flex-col p-4 sm:p-28">

                <div className="text-center mb-4 max-w-2xl mx-auto sm:mb-32">
                    <Image src="/ondemand_icon_top.svg" alt="Icone3" width={400} height={400} className="mx-auto mb-4 sm:mb-0 sm:mr-32" />
                    <p className="text-lg font-extralight">
                        Na InfityWorks, orientamos nossos serviços para três frentes essenciais, proporcionando
                        <span className="font-bold italic text-primary"> soluções dinâmicas e personalizadas</span> para o seu negócio
                    </p>
                </div>

                <div className="mb-24 flex flex-col sm:flex-row items-center">
                    <div className="text-center sm:text-left max-w-md">
                        <h2 className="text-2xl font-medium mb-4 italic">Projetos sob Demanda</h2>
                        <p className="text-lg font-extralight text-white">
                            • Criamos sistemas personalizados de acordo com suas necessidades.<br />
                            • Desenvolvimento ágil e transparente, alinhado à visão apresentada no site.<br />
                            • Projetos que refletem sua identidade, desde a concepção até a implementação.<br />
                        </p>
                    </div>
                    <Image src="/ondemand_icon1.svg" alt="Icone2" width={200} height={200} className="mb-4 sm:mb-0 sm:ml-32" />
                </div>

                <div className="mb-24 flex flex-col sm:flex-row items-center">
                    <Image src="/ondemand_icon3.svg" alt="Icone3" width={200} height={200} className="mb-4 sm:mb-0 sm:mr-32" />
                    <div className="text-center sm:text-right max-w-md">
                        <h2 className="text-2xl font-medium mb-4 italic">Suporte Integrado</h2>
                        <p className="text-lg font-extralight text-white">
                            • Nossa equipe se integra à sua empresa para oferecer suporte especializado.<br />
                            • Fornecemos assistência contínua para otimizar o desempenho de softwares já existentes.<br />
                            • Colaboração estreita para garantir que seu sistema atenda às demandas em constante evolução.<br />
                        </p>
                    </div>
                </div>

                <div className="mb-24 flex flex-col sm:flex-row items-center">
                    <div className="text-center sm:text-left max-w-md">
                        <h2 className="text-2xl font-medium mb-4 italic">Equipe Excepcional</h2>
                        <p className="text-lg font-extralight text-white">
                            • Oferecemos equipes especializadas para impulsionar seus projetos.<br />
                            • Profissionais altamente qualificados prontos para integrar-se às suas operações.<br />
                            • Flexibilidade para atender às demandas específicas de sua empresa.<br />
                        </p>
                    </div>
                    <Image src="/ondemand_icon2.svg" alt="Icone2" width={200} height={200} className="mb-4 sm:mb-0 sm:ml-32" />
                </div>

                <div className="text-center mb-4 max-w-2xl mx-auto mb-16">
                    <p className="text-lg font-extralight">
                        Na InfityWorks, estamos prontos para
                        <span className="font-bold text-primary italic"> moldar o sucesso</span> da sua organização.
                        Descubra como nossos
                        <span className="font-bold text-primary italic"> serviços personalizados</span> podem elevar sua empresa para novos patamares!
                    </p>
                </div>

                <div className="text-center mt-8 mb-16 sm:mb-0">
                    <button className="border-2 border-primary text-white w-full sm:w-56 h-14 overflow-hidden font-medium">
                        SAIBA MAIS
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OnDemand;
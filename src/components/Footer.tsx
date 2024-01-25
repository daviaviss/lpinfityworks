import React from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Instagram } from 'react-feather';

const Footer = () => {
    return (
        <footer className="bg-primary text-black p-4 sm:p-8 lg:p-12">
            <div className="container max-w-screen-lg mx-auto flex flex-col sm:flex-row items-center justify-between">

                <div className="mb-4 sm:mb-0 flex-shrink-0">
                    <p className="text-sm font-medium mb-2 sm:mb-4 mt-6">Siga-nos nas redes sociais:</p>
                    <div className="flex items-center justify-center sm:justify-start mb-4">
                        <a href="#" className="mr-4 p-2 rounded-full bg-black">
                            <Facebook size={24} color="#AFD500" />
                        </a>
                        <a href="#" className="mr-4 p-2 rounded-full bg-black">
                            <Twitter size={24} color="#AFD500" />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-black">
                            <Instagram size={24} color="#AFD500" />
                        </a>
                    </div>
                </div>

                <div className="text-center mb-6 sm:mb-0">
                    <Image src="/mid_logo_footer.svg" alt="SVG do meio" width={150} height={150} />
                </div>

                <div className="flex-shrink-0">
                    <Image src="/right_logo_footer.svg" alt="Outro SVG" width={220} height={220} />
                </div>
            </div>

            <div className="text-center text-sm font-semibold mt-4 sm:mt-8 mb-8 sm:mb-0">
                <p>Todos os direitos reservados a InfityWorks - CNPJ 00.000.000/0001-00 - 2024</p>
            </div>
        </footer>
    );
};

export default Footer;
import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <div className="bg-transparent absolute w-full mt-4 md:mt-0">
            <header className="container max-w-screen-lg mx-auto flex flex-col sm:flex-row items-center justify-between h-32">
                <div className="mb-4 md:mt-4 sm:mr-4">
                    <Image src="/logoheader.svg" alt="Logo" width={255} height={43} className="mt-4 md:mt-0" />
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:space-x-16 sm:mb-0 mt-4 sm:mt-0">
                    <a href="#" className="text-white font-normal mb-2 sm:mb-0">Quem Somos</a>
                    <a href="#" className="text-white font-normal mb-2 sm:mb-0">Dev onDemand</a>
                    <a href="#" className="text-white font-normal mb-2 sm:mb-0">Cases</a>
                </div>
                <div className="mt-4 sm:mt-0">
                    <button className="border-2 border-primary text-white w-full w-40 h-10 px-8 py-2">
                        Contato
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;
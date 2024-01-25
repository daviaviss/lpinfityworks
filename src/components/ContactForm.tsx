'use client'
import React, { useState } from 'react';

const ContactForm = () => {
    const [form, setForm] = useState({
        nomeCompleto: '',
        telWhatsApp: '',
        emailCorporativo: '',
        seuCargo: '',
        nomeDaEmpresa: '',
        totalDeColaboradores: ''
    });

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div className="bg-black bg-center text-white p-4 sm:p-8 lg:p-16">
            <div className="container max-w-screen-md mx-auto flex flex-col mt-8 sm:mt-16">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-8 sm:mb-16 text-center text-black tracking-widest mt-16 sm:mt-0" style={{ WebkitTextStroke: '1.5px #AFD500' }}>FALE CONOSCO</h1>
                <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-4 p-4 sm:p-0"> {/* Adicionado padding apenas no modo mobile */}
                    <input className="block w-full p-4 mb-2 border-2 border-primary bg-black h-12 sm:h-14 col-span-12 sm:col-span-8 text-sm font-medium" type="text" name="nomeCompleto" placeholder="Nome Completo" onChange={handleChange} />
                    <input className="block w-full p-4 mb-2 border-2 border-primary bg-black h-12 sm:h-14 col-span-12 sm:col-span-4 text-sm font-medium" type="text" name="telWhatsApp" placeholder="Tel/WhatsApp" onChange={handleChange} />
                    <input className="block w-full p-4 mb-2 border-2 border-primary bg-black h-12 sm:h-14 col-span-12 sm:col-span-4 text-sm font-medium" type="email" name="emailCorporativo" placeholder="E-mail Corporativo" onChange={handleChange} />
                    <input className="block w-full p-4 mb-2 border-2 border-primary bg-black h-12 sm:h-14 col-span-12 sm:col-span-8 text-sm font-medium" type="text" name="seuCargo" placeholder="Seu cargo" onChange={handleChange} />
                    <input className="block w-full p-4 mb-2 border-2 border-primary bg-black h-12 sm:h-14 col-span-12 sm:col-span-8 text-sm font-medium" type="text" name="nomeDaEmpresa" placeholder="Nome da Empresa" onChange={handleChange} />
                    <input className="block w-full p-4 mb-2 border-2 border-primary bg-black h-12 sm:h-14 col-span-12 sm:col-span-4 text-sm font-medium" type="number" name="totalDeColaboradores" placeholder="Nº total de Colaboradores" onChange={handleChange} />
                    <button className="mx-auto block w-full sm:w-3/5 p-2 mt-4 bg-primary text-black font-bold h-12 col-span-12 sm:col-span-12 mb-16">FALAR COM NOSSOS ESPECIALISTAS</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
import React from 'react';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

export default function Footer() {
  return (
    <div className="bg-dark">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-center font-second text-main text-2xl font-bold">Leonardo Torrealba</h2>
        <div className="text-white flex flex-col">
          <span>Leonardotorre14@gmail.com</span>
          <span>(+58) 412 - 5077183</span>
        </div>
        <div className="text-white flex text-2xl gap-3">
          <BsLinkedin />
          <BsGithub />
          <BsInstagram />
        </div>
        <p className="text-white">Hecho por LeonardoTorre</p>
      </div>
    </div>
  );
}

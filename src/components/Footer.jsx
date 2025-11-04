import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-black/10 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="font-semibold">Aurora Wear</h3>
            <p className="mt-2 text-black/70">Pakaian modern, nyaman, dan premium untuk keseharian Anda.</p>
          </div>
          <div>
            <h4 className="font-semibold">Bantuan</h4>
            <ul className="mt-2 space-y-2 text-black/70">
              <li><a href="#" className="hover:text-black">Panduan Ukuran</a></li>
              <li><a href="#" className="hover:text-black">Pengembalian</a></li>
              <li><a href="#" className="hover:text-black">Pembayaran</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Perusahaan</h4>
            <ul className="mt-2 space-y-2 text-black/70">
              <li><a href="#" className="hover:text-black">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-black">Karier</a></li>
              <li><a href="#" className="hover:text-black">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Ikuti Kami</h4>
            <div className="mt-2 flex items-center gap-3">
              <a href="#" className="p-2 rounded-full border border-black/10 hover:border-black/20"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="p-2 rounded-full border border-black/10 hover:border-black/20"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="p-2 rounded-full border border-black/10 hover:border-black/20"><Youtube className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-black/60">
          <p>© {new Date().getFullYear()} Aurora Wear. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-black/80">Privasi</a>
            <span>•</span>
            <a href="#" className="hover:text-black/80">Syarat</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

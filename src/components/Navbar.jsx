import React from 'react';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-6 w-6 text-black" />
            <span className="text-lg font-semibold tracking-tight">Aurora Wear</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {['Beranda', 'Produk', 'Koleksi', 'Tentang'].map((item) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ y: -2 }}
                className="text-black/70 hover:text-black transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-2 rounded-full border border-black/10 px-3 py-1.5 text-sm text-black/70 hover:text-black hover:border-black/20 transition-colors">
              <Search className="h-4 w-4" />
              Cari
            </button>
            <button className="p-2 rounded-full hover:bg-black/5 transition-colors" aria-label="Akun">
              <User className="h-5 w-5" />
            </button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="relative p-2 rounded-full hover:bg-black/5 transition-colors"
              aria-label="Keranjang"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-black text-white text-xs px-1">
                2
              </span>
            </motion.button>
            <button className="md:hidden p-2 rounded-full hover:bg-black/5 transition-colors" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

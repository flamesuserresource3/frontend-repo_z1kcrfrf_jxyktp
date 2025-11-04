import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Oversized Tee - Cloud White',
    price: 229000,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Relaxed Shirt - Sage Green',
    price: 349000,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1544133614-854c2b5e3b39?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Linen Pants - Sand',
    price: 399000,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Minimal Hoodie - Charcoal',
    price: 459000,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop',
  },
];

const formatIDR = (n) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group rounded-3xl overflow-hidden border border-black/10 bg-white hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <button
          className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-white/90 backdrop-blur p-2 shadow-sm hover:bg-white"
          aria-label="Favorit"
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold leading-tight">{product.name}</h3>
            <div className="mt-1 flex items-center gap-1 text-amber-500">
              <Star className="h-4 w-4 fill-amber-500" />
              <span className="text-sm text-black/70">{product.rating}</span>
            </div>
          </div>
          <span className="font-semibold">{formatIDR(product.price)}</span>
        </div>
        <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-black text-white px-4 py-2 text-sm font-medium hover:shadow-md transition-all">
          <ShoppingCart className="h-4 w-4" /> Tambah ke Keranjang
        </button>
      </div>
    </motion.div>
  );
};

const ProductGrid = () => {
  return (
    <section id="shop" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Produk Unggulan</h2>
            <p className="text-black/60 mt-2">Pilihan terbaik dari koleksi terbaru kami</p>
          </div>
          <a href="#" className="text-sm font-medium text-black/70 hover:text-black">Lihat semua</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;

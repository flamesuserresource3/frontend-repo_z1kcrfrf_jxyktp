import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 blur-3xl opacity-40" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-amber-200 via-rose-200 to-fuchsia-200 blur-3xl opacity-50" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-xs"
            >
              <Sparkles className="h-4 w-4" />
              Koleksi Musim Ini Telah Tiba
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
            >
              Gaya Modern yang Nyaman untuk Setiap Hari
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-black/70 max-w-xl"
            >
              Temukan pakaian yang dirancang dengan detail dan material premium. Tampilan menawan, rasa nyaman, dan kualitas yang tahan lama.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
              className="mt-8 flex items-center gap-3"
            >
              <a
                href="#shop"
                className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 text-sm font-medium shadow-sm hover:shadow-md transition-all"
              >
                Belanja Sekarang
              </a>
              <a
                href="#collection"
                className="inline-flex items-center justify-center rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-black hover:border-black/20"
              >
                Lihat Koleksi
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              className="mt-10 grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                { title: 'Premium', desc: 'Bahan berkualitas' },
                { title: 'Nyaman', desc: 'Ringan & breathable' },
                { title: 'Modern', desc: 'Desain timeless' },
              ].map((f) => (
                <div key={f.title} className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-4">
                  <p className="text-sm font-semibold">{f.title}</p>
                  <p className="text-xs text-black/60 mt-1">{f.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden border border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop"
                alt="Hero Fashion"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 hidden sm:block">
              <div className="rounded-3xl bg-white/80 backdrop-blur border border-black/10 px-5 py-4 shadow-lg">
                <p className="text-sm font-semibold">Diskon Musim Panas</p>
                <p className="text-xs text-black/60">Hingga 40% untuk koleksi terpilih</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

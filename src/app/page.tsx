'use client';
import { ChevronRight, Youtube, Twitter, Instagram, Github, Twitch } from 'lucide-react';
import { Button } from '@/app/components/button';
import NavBar from '@/app/components/navbar';
import { motion } from 'framer-motion';

const SOCIAL_LINKS = [
    {
        label: 'YouTube',
        url: 'https://youtube.com/@melenitasdev',
        icon: <Youtube className="h-5 w-5" />,
        color: 'hover:text-red-500 hover:border-red-500/30',
    },
    {
        label: 'Twitter / X',
        url: 'https://twitter.com/melenitasdev',
        icon: <Twitter className="h-5 w-5" />,
        color: 'hover:text-sky-400 hover:border-sky-400/30',
    },
    {
        label: 'Instagram',
        url: 'https://instagram.com/melenitasdev',
        icon: <Instagram className="h-5 w-5" />,
        color: 'hover:text-pink-500 hover:border-pink-500/30',
    },
    {
        label: 'GitHub',
        url: 'https://github.com/melenitasdev',
        icon: <Github className="h-5 w-5" />,
        color: 'hover:text-white hover:border-white/30',
    },
    {
        label: 'Twitch',
        url: 'https://www.twitch.tv/melenitasdev',
        icon: <Twitch className="h-5 w-5" />,
        color: 'hover:text-purple-400 hover:border-purple-400/30',
    },
];

const FADE_UP = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.55, ease: 'easeOut' },
    }),
};

export default function LeadMagnetPage() {
    return (
        <div className="min-h-screen bg-[#09090b] text-white selection:bg-primary/30">
            <NavBar />

            {/* ── HERO ─────────────────────────────────────────────── */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                {/* Grid background */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(100,100,100,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(100,100,100,0.07)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_20%,#000_50%,transparent_100%)]" />
                {/* Glow */}
                <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

                <div className="relative max-w-4xl mx-auto text-center space-y-8 z-10">
                    {/* Badge */}
                    <motion.div
                        variants={FADE_UP}
                        initial="hidden"
                        animate="show"
                        custom={0}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primaryhg/20 text-rose-400 text-sm font-semibold backdrop-blur-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
                        </span>
                        Recurso gratuito — GameDev Academy
                    </motion.div>

                    {/* Title — placeholder, rellenar después */}
                    <motion.h1
                        variants={FADE_UP}
                        initial="hidden"
                        animate="show"
                        custom={1}
                        className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
                    >
                        Aprende a crear{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-300">
                            videojuegos
                        </span>{' '}
                        desde cero
                    </motion.h1>

                    {/* Description — placeholder, rellenar después */}
                    <motion.p
                        variants={FADE_UP}
                        initial="hidden"
                        animate="show"
                        custom={2}
                        className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        En esta guía gratuita descubrirás el camino real para convertirte en game developer profesional:
                        qué aprender, en qué orden y cómo construir proyectos que impresionen a cualquier estudio.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        variants={FADE_UP}
                        initial="hidden"
                        animate="show"
                        custom={3}
                        className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
                    >
                        <Button
                            variant="primary"
                            size="xl"
                            buttonType="navigation"
                            navigationUrl="#video"
                            placeHolder="Ver el vídeo ahora"
                            icon={<ChevronRight />}
                            className="shadow-primary/20 shadow-[0px_0px_20px_1px]"
                        />
                        {/* <Button
                            variant="secondary"
                            size="xl"
                            buttonType="navigation"
                            navigationUrl="http://localhost:3000"
                            placeHolder="Ir a la academia"
                            external
                        /> */}
                    </motion.div>
                </div>
            </section>

            {/* ── VIDEO ────────────────────────────────────────────── */}
            <section id="video" className="py-20 px-6 bg-[#0c0c0e]">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10 space-y-3"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold">
                            El vídeo que necesitabas ver
                        </h2>
                        <p className="text-gray-400 text-lg">
                            melenitasdev te explica todo lo que desearía haber sabido al empezar.
                        </p>
                    </motion.div>

                    {/* Video embed — reemplaza VIDEO_ID con el ID real de YouTube */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative rounded-2xl overflow-hidden border border-[#27272a] shadow-2xl shadow-primary/10 aspect-video"
                    >
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/VIDEO_ID"
                            title="GameDev Academy — Aprende desarrollo de videojuegos"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </motion.div>
                </div>
            </section>

            {/* ── SOCIAL / CEO ─────────────────────────────────────── */}
            <section id="redes" className="py-20 px-6">
                <div className="max-w-3xl mx-auto text-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold">Sigue a melenitasdev</h2>
                        <p className="text-gray-400 text-lg">
                            Contenido diario sobre game dev, motores y carrera profesional.
                        </p>
                    </motion.div>

                    {/* CEO card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/60 to-purplecontrast/60 blur-xl scale-110" />
                            <div className="relative w-24 h-24 rounded-full border-2 border-primary/50 overflow-hidden bg-[#18181b] flex items-center justify-center text-3xl font-bold text-primary">
                                M
                            </div>
                        </div>
                        <div>
                            <p className="font-bold text-xl">melenitasdev</p>
                            <p className="text-gray-400 text-sm">Fundador · GameDev Academy</p>
                        </div>
                    </motion.div>

                    {/* Social links grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                        {SOCIAL_LINKS.map((s, i) => (
                            <motion.a
                                key={s.label}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={FADE_UP}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                custom={i}
                                className={`flex flex-col items-center gap-2 p-4 rounded-xl border border-[#27272a] bg-[#18181b] text-gray-400 transition-all duration-300 ${s.color} hover:bg-white/5 hover:-translate-y-0.5`}
                            >
                                {s.icon}
                                <span className="text-xs font-medium">{s.label}</span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA FINAL ────────────────────────────────────────── */}
            <section className="py-20 px-6 bg-[#0c0c0e]">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            ¿Listo para el siguiente nivel?
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl mx-auto">
                            Únete a GameDev Academy y aprende con proyectos reales, mentores de la industria y
                            una comunidad que te impulsa.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        {/* <Button
                            variant="primary"
                            size="xl"
                            buttonType="navigation"
                            navigationUrl="http://localhost:3000"
                            placeHolder="Empieza tu formación"
                            icon={<ChevronRight />}
                            external
                            className="shadow-primary/20 shadow-[0px_0px_20px_1px]"
                        /> */}
                    </motion.div>
                </div>
            </section>

            {/* ── FOOTER ───────────────────────────────────────────── */}
            <footer className="py-10 border-t border-[#27272a] px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
                    <span className="font-bold tracking-tighter uppercase italic text-white/60">
                        GameDev Academy
                    </span>
                    <p>© 2026 GameDev Academy. Todos los derechos reservados.</p>
                    {/* <a
                        href="http://localhost:3000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                    >
                        gamedev-academy.com
                    </a> */}
                </div>
            </footer>
        </div>
    );
}

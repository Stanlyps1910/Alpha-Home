import { motion } from 'framer-motion';

const images = [
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520854222934-14243675716e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1546193430-c2d207739ed7?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop"
];

const Gallery = () => {
    return (
        <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Portfolio</h2>
                <p className="text-gray-600 font-light">Capturing moments that last forever.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {images.map((img, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden"
                    >
                        <img
                            src={img}
                            alt={`Wedding ${idx}`}
                            className="w-full h-[400px] object-cover transition duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                            <p className="text-white font-serif text-xl tracking-wider cursor-pointer">View Album</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-16">
                <button className="border border-[#1C1C1C] px-10 py-3 hover:bg-[#1C1C1C] hover:text-white transition duration-300 font-sans tracking-widest text-sm uppercase">
                    View More
                </button>
            </div>
        </section>
    );
};
export default Gallery;

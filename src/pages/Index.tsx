
import { motion } from "framer-motion";
import CollectionCard from "@/components/CollectionCard";

const collections = [
  {
    title: "Neural Networks",
    description: "Advanced neural network models optimized for community use",
    image: "/placeholder.svg",
  },
  {
    title: "Language Models",
    description: "Cutting-edge language models for natural processing",
    image: "/placeholder.svg",
  },
  {
    title: "Computer Vision",
    description: "State-of-the-art computer vision models and datasets",
    image: "/placeholder.svg",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Community LLM Collection
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover and contribute to a growing ecosystem of language models, built by the community, for the community.
          </p>
        </motion.div>
      </section>

      {/* Collections Grid */}
      <section className="px-6 py-16 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <CollectionCard
                key={index}
                {...collection}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              />
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;

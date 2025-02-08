import { motion } from "framer-motion";
import CollectionCard from "@/components/CollectionCard";

const collections = [
  {
    title: "Phase 1: Frontend Development",
    description: "React frontend PowerPoint with server rack infrastructure",
    details: `• Development of React-based frontend interface
• Server rack infrastructure setup for LLM hosting
• Client community node implementation
• Scalable architecture design for large LLMs
• Integration of basic PowerPoint functionality`,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Phase 2: Collection Builder",
    description: "Recursive collection builder with Agent 69 trait selection",
    details: `• Implementation of recursive collection builder
• Agent 69 integration for trait selection
• JSON metadata structure implementation
• Advanced trait collection system
• Community feedback integration`,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Phase 3: Magic Eden Integration",
    description: "Collection listing and inscription on Magic Eden",
    details: `• Magic Eden marketplace integration
• Collection inscription process
• Automated listing functionality
• Market analytics dashboard
• Trading volume tracking`,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Phase 4: Revenue Sharing",
    description: "Implement holder revenue sharing system",
    details: `• Smart contract development for revenue sharing
• Holder verification system
• Automated distribution mechanism
• Transaction tracking dashboard
• Revenue analytics and reporting`,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Phase 5: Community Building",
    description: "Family Mafia style community contribution system",
    details: `• Community contribution platform
• Tool sharing mechanism
• Reward distribution system
• Collaborative development framework
• Community governance implementation`,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Phases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <CollectionCard
                key={index}
                {...collection}
                className="animate-fade-in"
              />
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;

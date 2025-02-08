
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

interface CollectionCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

const CollectionCard = ({ title, description, image, className }: CollectionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className={cn("group cursor-pointer", className)}
    >
      <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 line-clamp-2">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
};

export default CollectionCard;

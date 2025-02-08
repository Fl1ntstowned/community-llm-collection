
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface CollectionCardProps {
  title: string;
  description: string;
  image: string;
  details?: string;
  className?: string;
}

const CollectionCard = ({ title, description, image, details, className }: CollectionCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        className={cn("group cursor-pointer", className)}
        onClick={() => setIsDialogOpen(true)}
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <img src={image} alt={title} className="w-full rounded-lg mb-4" />
            <p className="text-gray-700 whitespace-pre-wrap">{details}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CollectionCard;

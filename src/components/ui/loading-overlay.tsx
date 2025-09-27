import { motion } from "framer-motion";

interface LoadingOverlayProps {
  isVisible: boolean;
  message?: string;
}

export function LoadingOverlay({ isVisible, message = "Loading..." }: LoadingOverlayProps) {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-white/20 border-t-white mx-auto mb-4"></div>
        <p className="text-white text-lg font-medium">{message}</p>
      </div>
    </motion.div>
  );
}

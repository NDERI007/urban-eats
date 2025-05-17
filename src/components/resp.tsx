import { motion, AnimatePresence } from "motion/react";
import { House } from "lucide-react";
import { PhoneIncoming } from "lucide-react";
import { ScrollText } from "lucide-react";

export const ResponsiveMenu = ({ open }: { open: boolean }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-full bg-black/60 z-10"
        >
          <div>
            <House size={"30px"} />
            <PhoneIncoming size={"30px"} />
            <ScrollText size={"30px"} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

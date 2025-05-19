import { motion, AnimatePresence } from "motion/react";
import { House } from "lucide-react";
import { PhoneIncoming } from "lucide-react";
import { ScrollText } from "lucide-react";
import { Link } from "react-router";

export const ResponsiveMenu = ({ open }: { open: boolean }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        //fixed top-0 left-0 w-full h-full bg-black/60 z-10"
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl text-slate-400 font-semibold bg-slate-700 py-10 w-1/2 md:w-1/4 h-screen rounded-md">
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <House size={"30px"} color={"blue"} />{" "}
                <Link to={"/"}>Home</Link>
              </li>
              <li className="flex items-center gap-2">
                <ScrollText size={"30px"} color={"pink"} />{" "}
                <Link to={"/menu"}>Menu</Link>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIncoming size={"30px"} color={"red"} />
                <Link to={"/contact"}>Contact us</Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

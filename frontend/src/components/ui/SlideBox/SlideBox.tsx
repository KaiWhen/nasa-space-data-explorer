import { motion } from "framer-motion";
import "./styles.css";

interface SlideBoxProps {
  text: string;
  bg: string;
}

const SlideBox: React.FC<SlideBoxProps> = ({ text, bg }) => {
  return (
    <motion.div
      className={`relative w-full rounded ${bg} bg-cover bg-center text-right p-10 cursor-pointer overflow-hidden`}
      whileHover="hover"
      animate="initial"
      initial="initial"
      whileTap={{ scale: 0.98 }}
    >
      <div className="absolute top-0 right-0 h-full bg-black opacity-80 flex items-center justify-center w-[35%] lg:hidden">
        <div className="text-secondary font-semibold px-4 hover:text-accent duration-300">
          {text}
        </div>
      </div>

      <motion.div
        className="absolute top-0 right-0 h-full bg-black items-center justify-center hidden lg:flex"
        variants={{
          initial: { opacity: 0.2, width: "0%" },
          hover: { opacity: 0.7, width: "35%" },
        }}
        transition={{
          duration: 0.35,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <motion.div
          className="text-secondary font-semibold px-4"
          variants={{
            initial: { opacity: 0, y: 10 },
            hover: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.25, delay: 0.2, ease: "easeInOut" }}
        >
          {text}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SlideBox;

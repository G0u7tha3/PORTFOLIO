
import { motion } from "framer-motion";
import { DiJavascript } from "react-icons/di";
import { FaAws, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiMysql, SiPowerbi, SiTableau } from "react-icons/si";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [ 10, -10],
    transition: {
    duration,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse",
    }
  },
});


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100}}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
         <motion.div 
         whileInView={{ opacity: 1, x: 0 }} 
         initial={{ opacity: 0, x: -100 }}
         transition={{ duration: 1.5 }}
         className="flex flex-wrap item-center justify-center gap-4">
            <motion.div 
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <FaPython className="text-7xl text-clay-400"/> 
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiMysql className="text-7xl text-blue-400"/> 
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaReact className="text-7xl text-cyan-400"/> 
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaNodeJs className="text-7xl text-green-400"/> 
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
              <DiJavascript className="text-7xl text-yellow-400"/> 
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiTableau className="text-7xl text-clay-400"/> 
            </motion.div>
            <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiPowerbi className="text-7xl text-yellow-400"/> 
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaAws className="text-7xl text-clay-400"/> 
            </motion.div>
            
         </motion.div>
        </div>
  );
};

export default Technologies;
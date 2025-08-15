import React from "react";
import { motion } from "framer-motion";

const SkillBadge = ({ name, icon, color }) => {
  return (
    <motion.div
      className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-br from-black/70 to-black/50 border border-[rgb(120,198,187)]/30"
      whileHover={{
        scale: 1.05,
        borderColor: color,
        shadow: "0 0 24px rgba(120,198,187,0.4)",
      }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
    >
      <span className="text-xl">{icon}</span>
      <span className="text-base font-bold text-white">{name}</span>
    </motion.div>
  );
};

const InfiniteScroll = ({ direction, skills }) => {
  const duplicatedSkills = [...skills, ...skills];
  const totalWidth = duplicatedSkills.length * 100;

  return (
    <div className="w-full overflow-hidden relative py-4">
      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: direction > 0 ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: totalWidth / 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <SkillBadge key={`${skill.name}-${index}`} {...skill} />
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScroll;

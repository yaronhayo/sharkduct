
import React from 'react';
import { motion } from 'framer-motion';

interface MiniHeroProps {
  title: string;
  subtitle?: string;
  backgroundClass?: string;
}

const MiniHero: React.FC<MiniHeroProps> = ({ 
  title, 
  subtitle,
  backgroundClass = "bg-gradient-to-r from-shark-blue to-shark-darkBlue"
}) => {
  return (
    <section className={`py-20 relative overflow-hidden ${backgroundClass}`}>
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAtMzR2NmgxOHYtNmgtMTh6bTAgMTJ2NmgxMnYtNmgtMTJ6bTAgMTJ2Nmg2di02aC02em0wIDI0djZoNnYtNmgtNnptMTIgLTI0djZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bTAgMTJ2NmgxMnYtNmgtMTJ6bTAgMTJ2NmgxOHYtNmgtMTh6bS00OCAtNDh2NmgxOHYtNmgtMTh6bTAgMTJ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnptMTIgLTM2djZoNnYtNmgtNnptMTIgLTEydjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              className="text-xl text-white/80 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

export default MiniHero;

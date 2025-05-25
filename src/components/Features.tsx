import React from 'react';
import { Monitor, Sword, Users, Map, Code } from 'lucide-react';

const FeatureItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-dark-lighter p-6 rounded-lg transition-all duration-300 hover:bg-dark-lighter/80 hover:translate-y-[-5px]">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-heading mb-3">{title}</h3>
      <p className="text-light-dark">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="section bg-dark-darker">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="relative inline-block">
            <span className="inline-block text-primary uppercase font-bold text-sm tracking-wider mb-2">Experience</span>
            <span className="block">Key Features</span>
            <div className="h-1 w-24 bg-primary mt-4 mx-auto"></div>
          </h2>
          <p className="text-light-dark mt-6">
            AEGAME combines stunning visuals, innovative gameplay and rich storytelling to deliver
            an unforgettable gaming experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureItem 
            icon={<Monitor className="text-primary h-6 w-6" />}
            title="Stunning Graphics"
            description="Experience breathtaking visuals with state-of-the-art rendering technology that brings the game world to life."
          />
          
          <FeatureItem 
            icon={<Sword className="text-primary h-6 w-6" />}
            title="Innovative Combat"
            description="Master a deep and responsive combat system that combines quick reflexes with strategic decision-making."
          />
          
          <FeatureItem 
            icon={<Users className="text-primary h-6 w-6" />}
            title="Multiplayer Mode"
            description="Team up with friends in cooperative play or test your skills against other players in competitive modes."
          />
          
          <FeatureItem 
            icon={<Map className="text-primary h-6 w-6" />}
            title="Open World"
            description="Explore a vast, seamless world filled with hidden treasures, dangerous enemies, and breathtaking vistas."
          />
          
          <FeatureItem 
            icon={<Code className="text-primary h-6 w-6" />}
            title="Advanced AI"
            description="Face intelligent enemies that adapt to your playstyle, creating dynamic and unpredictable encounters."
          />
          
          <div className="bg-primary p-6 rounded-lg text-dark-darker">
            <h3 className="text-xl font-heading mb-3">Coming Soon</h3>
            <p className="font-medium">New expansion with additional content, characters and gameplay features.</p>
            <div className="mt-4 h-1 w-16 bg-dark-darker"></div>
            <p className="mt-4 text-sm">Sign up for our newsletter to stay updated!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
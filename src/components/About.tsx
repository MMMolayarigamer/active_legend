import React from 'react';
import { Gamepad, Swords, Mountain, Stars } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-dark">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="relative">
              <span className="inline-block text-primary uppercase font-bold text-sm tracking-wider mb-2">Discover</span>
              <span className="block">About AEGAME</span>
              <div className="h-1 w-24 bg-primary mt-4"></div>
            </h2>
            
            <p className="my-6">
              AEGAME is an epic action-adventure that takes place in a vast, interconnected 
              world filled with danger and discovery. Players will embark on a journey to uncover 
              the secrets of an ancient civilization while mastering combat, traversal, and puzzle-solving.
            </p>
            
            <p className="mb-6">
              With stunning visuals, an emotional narrative, and responsive gameplay, AEGAME 
              offers a gaming experience that will captivate both casual and hardcore gamers alike.
              The world reacts to your choices, creating a unique adventure for every player.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <Gamepad className="text-primary mr-3 h-6 w-6" />
                <span>Intuitive Controls</span>
              </div>
              <div className="flex items-center">
                <Swords className="text-primary mr-3 h-6 w-6" />
                <span>Deep Combat</span>
              </div>
              <div className="flex items-center">
                <Mountain className="text-primary mr-3 h-6 w-6" />
                <span>Open World</span>
              </div>
              <div className="flex items-center">
                <Stars className="text-primary mr-3 h-6 w-6" />
                <span>Epic Story</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl border border-dark-lighter relative">
              <img 
                src="https://images.pexels.com/photos/7915520/pexels-photo-7915520.jpeg" 
                alt="Game screenshot" 
                className="w-full h-full object-cover"
              />
              
              {/* Geometric accent inspired by AE logo */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full border border-primary z-10"></div>
            </div>
            
            {/* Second image with offset */}
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl border border-dark-lighter absolute -top-8 -right-8 z-0 opacity-50 w-4/5">
              <img 
                src="https://images.pexels.com/photos/7915251/pexels-photo-7915251.jpeg" 
                alt="Game screenshot" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
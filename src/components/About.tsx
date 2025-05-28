import React from 'react';
import { Gamepad, Swords, Mountain, Stars } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-dark">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="relative">
              <span className="inline-block text-primary uppercase font-bold text-sm tracking-wider mb-2">کشف کنید</span>
              <span className="block">درباره اکتیو لجندز</span>
              <div className="h-1 w-24 bg-primary mt-4"></div>
            </h2>
            
            <p className="my-6">
              اکتیو لجندز یک بازی اکشن چند نفره است که در آن بازیکنان با انتخاب قهرمانان منحصر به فرد
              در نبردهای تیمی هیجان‌انگیز شرکت می‌کنند. هر قهرمان دارای توانایی‌های خاص و سبک بازی
              منحصر به فرد خود است.
            </p>
            
            <p className="mb-6">
              با گرافیک خیره‌کننده، گیم‌پلی روان و سیستم مبارزه عمیق، اکتیو لجندز تجربه‌ای
              فراموش‌نشدنی را برای همه بازیکنان فراهم می‌کند. انتخاب‌های شما در بازی تأثیرگذار
              است و هر مسابقه یک تجربه منحصر به فرد خواهد بود.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <Gamepad className="text-primary mr-3 h-6 w-6" />
                <span>کنترل روان</span>
              </div>
              <div className="flex items-center">
                <Swords className="text-primary mr-3 h-6 w-6" />
                <span>مبارزات عمیق</span>
              </div>
              <div className="flex items-center">
                <Mountain className="text-primary mr-3 h-6 w-6" />
                <span>نقشه‌های متنوع</span>
              </div>
              <div className="flex items-center">
                <Stars className="text-primary mr-3 h-6 w-6" />
                <span>قهرمانان حماسی</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl border border-dark-lighter relative">
              <img 
                src="https://images.pexels.com/photos/7915520/pexels-photo-7915520.jpeg" 
                alt="تصویر بازی" 
                className="w-full h-full object-cover"
              />
              
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full border border-primary z-10"></div>
            </div>
            
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl border border-dark-lighter absolute -top-8 -right-8 z-0 opacity-50 w-4/5">
              <img 
                src="https://images.pexels.com/photos/7915251/pexels-photo-7915251.jpeg" 
                alt="تصویر بازی" 
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
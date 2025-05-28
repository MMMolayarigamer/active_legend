import React from 'react';
import { PlayCircle, Heart, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-darker via-dark-darker/90 to-dark-darker/70"></div>
        <img 
          src="https://images.pexels.com/photos/7915575/pexels-photo-7915575.jpeg" 
          alt="تصویر پس‌زمینه بازی" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-primary mb-6 uppercase tracking-wide">
            اکتیو لجندز
            <span className="block text-light text-2xl md:text-3xl lg:text-4xl mt-2">
              به دنیای قهرمانان خوش آمدید
            </span>
          </h1>
          
          <p className="text-light-dark text-lg md:text-xl mb-8">
            یک بازی اکشن هیجان‌انگیز با قهرمانان منحصر به فرد و مبارزات نفس‌گیر.
            با دوستان خود تیم تشکیل دهید و در نبردهای حماسی شرکت کنید.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#" className="btn btn-primary flex items-center">
              <span>تماشای تریلر</span>
              <PlayCircle className="mr-2 h-5 w-5" />
            </a>
            <a href="#" className="btn btn-outline flex items-center">
              <span>دانلود بازی</span>
              <Download className="mr-2 h-5 w-5" />
            </a>
            <a href="#" className="btn btn-outline flex items-center">
              <span>افزودن به علاقه‌مندی‌ها</span>
              <Heart className="mr-2 h-5 w-5" />
            </a>
          </div>

          <div className="mt-12 flex items-center">
            <span className="ml-4 text-light-dark">
              بیش از <span className="text-primary font-bold">۱۰,۰۰۰</span> بازیکن به ما پیوسته‌اند
            </span>
            <div className="flex -space-x-2">
              <img src="https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=120" alt="کاربر" className="w-10 h-10 rounded-full border-2 border-dark-darker" />
              <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120" alt="کاربر" className="w-10 h-10 rounded-full border-2 border-dark-darker" />
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120" alt="کاربر" className="w-10 h-10 rounded-full border-2 border-dark-darker" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 w-64 h-64 md:w-96 md:h-96 opacity-10">
        <div className="w-full h-full rounded-full border-4 border-primary"></div>
      </div>
    </section>
  );
};

export default Hero;
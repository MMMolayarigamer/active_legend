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
            <span className="inline-block text-primary uppercase font-bold text-sm tracking-wider mb-2">تجربه کنید</span>
            <span className="block">ویژگی‌های کلیدی</span>
            <div className="h-1 w-24 bg-primary mt-4 mx-auto"></div>
          </h2>
          <p className="text-light-dark mt-6">
            اکتیو لجندز با ترکیب گرافیک خیره‌کننده، گیم‌پلی نوآورانه و داستان‌سرایی غنی،
            تجربه‌ای فراموش‌نشدنی را برای شما رقم می‌زند.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureItem 
            icon={<Monitor className="text-primary h-6 w-6" />}
            title="گرافیک خیره‌کننده"
            description="تجربه بصری فوق‌العاده با جدیدترین تکنولوژی‌های رندرینگ"
          />
          
          <FeatureItem 
            icon={<Sword className="text-primary h-6 w-6" />}
            title="سیستم مبارزه پیشرفته"
            description="سیستم مبارزه عمیق و پاسخگو که ترکیبی از مهارت و استراتژی است"
          />
          
          <FeatureItem 
            icon={<Users className="text-primary h-6 w-6" />}
            title="بازی چند نفره"
            description="با دوستان خود تیم تشکیل دهید یا در مقابل بازیکنان دیگر رقابت کنید"
          />
          
          <FeatureItem 
            icon={<Map className="text-primary h-6 w-6" />}
            title="نقشه‌های متنوع"
            description="نقشه‌های متنوع و زیبا با محیط‌های تعاملی و استراتژیک"
          />
          
          <FeatureItem 
            icon={<Code className="text-primary h-6 w-6" />}
            title="هوش مصنوعی پیشرفته"
            description="سیستم هوش مصنوعی پیشرفته که رقبای چالش‌برانگیز را شبیه‌سازی می‌کند"
          />
          
          <div className="bg-primary p-6 rounded-lg text-dark-darker">
            <h3 className="text-xl font-heading mb-3">به زودی</h3>
            <p className="font-medium">قهرمانان جدید، نقشه‌ها و حالت‌های بازی جدید در راه هستند!</p>
            <div className="mt-4 h-1 w-16 bg-dark-darker"></div>
            <p className="mt-4 text-sm">برای دریافت اخبار جدید در خبرنامه ما عضو شوید!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
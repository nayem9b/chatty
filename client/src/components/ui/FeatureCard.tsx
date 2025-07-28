import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradient?: 'primary' | 'secondary' | false;
}

export const FeatureCard = ({ icon, title, description, gradient = false }: FeatureCardProps) => {
  const getGradientClass = () => {
    if (gradient === 'primary') return 'bg-gradient-primary text-primary-foreground glow-effect';
    if (gradient === 'secondary') return 'bg-gradient-secondary text-secondary-foreground';
    return 'bg-card/50 backdrop-blur-xl border border-border hover:border-primary/50';
  };

  return (
    <div className={`group relative p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${getGradientClass()}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className={`text-3xl ${gradient ? 'text-inherit' : 'text-primary'}`}>
          {icon}
        </div>
        <h3 className={`text-xl font-semibold ${gradient ? 'text-inherit' : 'text-foreground'}`}>
          {title}
        </h3>
      </div>
      <p className={`${gradient ? 'text-inherit opacity-90' : 'text-muted-foreground'} leading-relaxed`}>
        {description}
      </p>
      
      {/* Decorative element */}
      <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-primary rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
    </div>
  );
};
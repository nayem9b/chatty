import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Lock, Smartphone, Palette, Bot, Clock } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Lightning Fast",
    description: "Experience instant messaging with our optimized real-time infrastructure and low-latency technology.",
    color: "text-cyan-500"
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: "End-to-End Encryption",
    description: "Your conversations are secured with military-grade encryption, ensuring complete privacy and security.",
    color: "text-blue-500"
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Cross Platform",
    description: "Seamless synchronization across all your devices - mobile, desktop, and web applications.",
    color: "text-indigo-500"
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Beautiful Design",
    description: "Modern, intuitive interface with dark/light themes and customizable appearance options.",
    color: "text-pink-500"
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: "AI Assistant",
    description: "Smart replies, message summarization, and intelligent organization powered by AI.",
    color: "text-amber-500"
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Always Improving",
    description: "Regular updates with new features, performance improvements, and security enhancements.",
    color: "text-emerald-500"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    } 
  },
};

const FeatureCard = ({ icon, title, description, color }: { icon: React.ReactNode, title: string, description: string, color: string }) => (
  <Card className="h-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300 overflow-hidden group">
    <div className="relative overflow-hidden">
      <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full ${color.replace('text', 'bg')} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
      <CardHeader className="relative z-10">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color} bg-opacity-10 ${color.replace('text', 'bg')} group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardContent>
    </div>
  </Card>
);

export const FeaturesSection = () => {
  return (
    <section className="py-24 relative w-full overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-cyan-500/5 to-transparent" />
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px 0px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="px-3 py-1 text-sm font-medium bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mb-4">
            <span className="mr-2">✨</span> Key Features
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Everything You Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Packed with powerful features to enhance your communication experience
            and boost your productivity.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={feature.color}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

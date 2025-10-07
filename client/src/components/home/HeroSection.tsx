import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChatAnimation } from "../ui/ChatAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MessageSquare, Sparkles, Zap } from "lucide-react";

const stats = [
  { value: "10M+", label: "Active Users", icon: <MessageSquare className="w-4 h-4" /> },
  { value: "99.9%", label: "Uptime", icon: <Zap className="w-4 h-4" /> },
  { value: "5.0", label: "Rating", icon: <Sparkles className="w-4 h-4" /> },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-10 w-72 h-72 bg-cyan-500/10 dark:bg-cyan-400/10 rounded-full filter blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-10 w-80 h-80 bg-blue-500/10 dark:bg-blue-400/10 rounded-full filter blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8 py-20">
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <Badge variant="outline" className="px-3 py-1 text-sm font-medium bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <span className="mr-2">✨</span> Introducing v2.0
          </Badge>
          
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
              Modern Chat, <br />
              <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent dark:from-white dark:to-white/80">
                Reimagined
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Experience the next generation of real-time communication with our AI-powered platform. 
              Connect, collaborate, and create like never before.
            </p>
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
            }}>
              <Button
                size="lg"
                className="group h-14 px-8 text-base font-medium rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/20 dark:shadow-cyan-400/20 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
            <motion.div variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } }
            }}>
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 text-base font-medium rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
              >
                View Demo
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-3 gap-4 pt-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { 
                      duration: 0.4, 
                      delay: 0.2 + index * 0.1 
                    } 
                  }
                }}
                className="text-left"
              >
                <Card className="h-full border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400">
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Chat Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 dark:from-cyan-400/5 dark:via-blue-400/5 dark:to-indigo-400/5 rounded-3xl -z-10" />
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-2xl">
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="text-xs font-medium text-white mx-auto">chat.app</div>
            </div>
            <div className="pt-10 px-4 pb-4">
              <ChatAnimation />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

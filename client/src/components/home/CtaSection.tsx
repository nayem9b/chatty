import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export const CtaSection = () => {
  const features = [
    "No credit card required",
    "14-day free trial",
    "Cancel anytime"
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1000px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px 0px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-2xl"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-indigo-500/5" />
          
          {/* Decorative elements */}
          <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
          
          <div className="relative z-10">
            <div className="px-8 py-12 sm:p-16">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Ready to Transform Your Communication?
                </h2>
                <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                  Join thousands of teams who have already upgraded their communication experience. 
                  Get started today and see the difference for yourself.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto"
                  >
                    <Button
                      size="lg"
                      className="group w-full sm:w-auto h-14 px-8 text-base font-medium rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/20 dark:shadow-cyan-400/20 transition-all duration-200"
                    >
                      Get Started Free
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto h-14 px-8 text-base font-medium rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
                    >
                      Schedule a Demo
                    </Button>
                  </motion.div>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700"
                    >
                      <Check className="h-4 w-4 text-cyan-500" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { value: "10M+", label: "Users" },
                  { value: "99.9%", label: "Uptime" },
                  { value: "24/7", label: "Support" },
                  { value: "5.0", label: "Rating" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="p-4"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

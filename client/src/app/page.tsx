"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FeatureCard } from '../components/ui/FeatureCard';


const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            // src={chatHeroImage}
            alt="Chat Hero"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/30 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-32 right-10 w-32 h-32 bg-secondary/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
                Chat Like Never Before
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Experience the future of communication with our ultra-modern chat platform. 
                Connect, share, and collaborate with stunning animations and seamless design.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:scale-105 transition-transform duration-200 text-lg px-8 py-6 rounded-2xl">
                Start Chatting ✨
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/50 hover:bg-primary/10 text-lg px-8 py-6 rounded-2xl"
              >
                Watch Demo 🎥
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10M+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-warm">5★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Chat Animation */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* <ChatAnimation /> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient-primary">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the features that make our chat platform the best choice for modern communication
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              icon="🚀"
              title="Lightning Fast"
              description="Experience instant messaging with our optimized real-time infrastructure"
            />
            <FeatureCard
              icon="🔒"
              title="Secure & Private"
              description="End-to-end encryption ensures your conversations stay completely private"
              gradient="primary"
            />
            <FeatureCard
              icon="🌐"
              title="Cross Platform"
              description="Seamlessly sync across all your devices - mobile, desktop, and web"
            />
            <FeatureCard
              icon="🎨"
              title="Beautiful Design"
              description="Modern, intuitive interface that makes chatting a delightful experience"
              gradient="secondary"
            />
            <FeatureCard
              icon="⚡"
              title="Smart Features"
              description="AI-powered suggestions, smart replies, and intelligent organization"
            />
            <FeatureCard
              icon="👥"
              title="Team Ready"
              description="Perfect for teams with channels, file sharing, and collaboration tools"
              gradient="primary"
            />
          </div>
          
          {/* Image Slider */}
          <div className="max-w-4xl mx-auto">
            {/* <ImageSlider /> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-primary rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern opacity-20" />
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Transform Your Communication?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Join millions of users who have already upgraded their chat experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-8 py-6 rounded-2xl hover:scale-105 transition-transform duration-200"
                >
                  Get Started Free 🎉
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 rounded-2xl border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Sales 📞
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

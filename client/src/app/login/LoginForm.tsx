'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Mail, Lock, Eye, EyeOff, Loader2, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentBg, setCurrentBg] = useState(0);

  const backgrounds = [
    'https://source.unsplash.com/random/1600x900/?nature',
    'https://source.unsplash.com/random/1600x900/?city',
    'https://source.unsplash.com/random/1600x900/?beach',
    'https://source.unsplash.com/random/1600x900/?mountains',
    'https://source.unsplash.com/random/1600x900/?sunset'
  ];

  useEffect(() => {
    // Only run on client-side
    if (typeof window !== 'undefined') {
      // Check for URL error (simulating Next.js searchParams)
      const urlParams = new URLSearchParams(window.location.search);
      const urlError = urlParams.get('error');
      
      if (urlError) {
        setError('Authentication failed. Please try again.');
      }
    }

    // Background image changer
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // This is a mock authentication - in a real app, you would call your API
      const result = await mockSignIn({ email, password });
      
      if (result.error) {
        setError(result.error);
      } else {
        // Redirect to callback URL or home page
        const urlParams = new URLSearchParams(window.location.search);
        const callbackUrl = urlParams.get('callbackUrl') || '/';
        window.location.href = callbackUrl;
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Mock sign-in function (replace with actual API call)
  const mockSignIn = (credentials: { email: string; password: string }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simple validation for demo purposes
        if (credentials.email === 'demo@example.com' && credentials.password === 'password') {
          resolve({ success: true });
        } else {
          resolve({ error: 'Invalid email or password' });
        }
      }, 1500);
    });
  };

  return (
    <>
      <Head>
        <title>Modern Login Page</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen flex items-center justify-center p-4" style={{
        fontFamily: "'Inter', sans-serif",
        background: `linear-gradient(135deg, rgba(255,240,179,0.8) 0%, rgba(255,224,102,0.8) 100%), url('${backgrounds[currentBg]}') no-repeat center center fixed`,
        backgroundSize: 'cover',
        transition: 'background-image 1s ease-in-out'
      }}>
        <div className="card w-full max-w-md rounded-2xl overflow-hidden border border-opacity-20 border-gray-300" style={{
          backdropFilter: 'blur(16px)',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
        }}>
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
              <p className="text-gray-600">Sign in to your account to continue</p>
            </div>
            
            {error && (
              <div className="mb-4 p-4 rounded-lg bg-red-50 text-red-600 flex items-start">
                <AlertCircle className="w-5 h-5 mr-2 mt-0.5" />
                <span className="text-sm">{error}</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                  <input 
                    type="email" 
                    id="email" 
                    className="input-field w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-100" 
                    placeholder="name@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500 hover:underline">Forgot password?</a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="w-5 h-5 text-gray-400" />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    id="password" 
                    className="input-field w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-100" 
                    placeholder="••••••••"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                      transition: 'all 0.3s ease'
                    }}
                  />
                  <button 
                    type="button" 
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="remember-me" 
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Remember me</label>
              </div>
              
              <button 
                type="submit" 
                disabled={isLoading}
                className="btn-primary w-full py-3 px-4 rounded-lg text-white font-medium flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  transition: 'all 0.3s ease'
                }}
              >
                <span>{isLoading ? 'Signing in...' : 'Sign in'}</span>
                {isLoading && <Loader2 className="w-5 h-5 ml-2 animate-spin" />}
              </button>
            </form>
            
            <div className="divider my-6" style={{
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              color: '#6b7280'
            }}>
              <span className="mx-2">or continue with</span>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <button 
                className="social-btn flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50"
                style={{ transition: 'all 0.3s ease' }}
              >
                <i data-lucide="github" className="w-5 h-5 mr-2"></i>
                <span className="text-sm font-medium">GitHub</span>
              </button>
              <button 
                className="social-btn flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50"
                style={{ transition: 'all 0.3s ease' }}
              >
                <i data-lucide="google" className="w-5 h-5 mr-2"></i>
                <span className="text-sm font-medium">Google</span>
              </button>
            </div>
            
            <div className="mt-6 text-center text-sm text-gray-600">
              Don't have an account? 
              <a href="#" className="text-indigo-600 hover:text-indigo-500 hover:underline ml-1">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
'use client'

import { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Separator } from "../ui/separator";
import { ArrowLeft, Eye, EyeOff, Chrome, Wallet } from "lucide-react";
import { useApp, UserType } from "../../contexts/AppContext";
import { toast } from "sonner";

export function AuthScreen() {
  const { setCurrentScreen, login, signup } = useApp();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('signup');

  // Form states
  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    password: '',
    userType: 'fan' as UserType
  });

  const [signinForm, setSigninForm] = useState({
    email: '',
    password: ''
  });

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const success = await signup(signupForm.email, signupForm.password, signupForm.name, signupForm.userType);
      if (success) {
        toast.success("Account created successfully!");
      }
    } catch (error) {
      toast.error("Failed to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const success = await login(signinForm.email, signinForm.password);
      if (success) {
        toast.success("Welcome back!");
      }
    } catch (error) {
      toast.error("Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialAuth = (provider: string) => {
    toast.info(`${provider} authentication coming soon!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 flex items-center justify-center p-4">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative"
      >
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={() => setCurrentScreen('landing')}
          className="mb-6 text-white hover:bg-white/10 p-2"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-2xl text-white">Momint</span>
          </div>
          <p className="text-purple-200">Join the NFT revolution</p>
        </div>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-3xl p-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-white/5 rounded-2xl p-1">
              <TabsTrigger 
                value="signup" 
                className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-purple-900 text-white"
              >
                Sign Up
              </TabsTrigger>
              <TabsTrigger 
                value="signin"
                className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-purple-900 text-white"
              >
                Sign In
              </TabsTrigger>
            </TabsList>

            <TabsContent value="signup" className="space-y-6 mt-6">
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={signupForm.name}
                    onChange={(e) => setSignupForm(prev => ({ ...prev, name: e.target.value }))}
                    className="bg-white/5 border-white/20 text-white placeholder:text-purple-200 focus:border-purple-400"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-email" className="text-white">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="Enter your email"
                    value={signupForm.email}
                    onChange={(e) => setSignupForm(prev => ({ ...prev, email: e.target.value }))}
                    className="bg-white/5 border-white/20 text-white placeholder:text-purple-200 focus:border-purple-400"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-password" className="text-white">Password</Label>
                  <div className="relative">
                    <Input
                      id="signup-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      value={signupForm.password}
                      onChange={(e) => setSignupForm(prev => ({ ...prev, password: e.target.value }))}
                      className="bg-white/5 border-white/20 text-white placeholder:text-purple-200 focus:border-purple-400 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-200 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-white">I am a...</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      type="button"
                      variant={signupForm.userType === 'fan' ? 'white' : 'outline'}
                      onClick={() => setSignupForm(prev => ({ ...prev, userType: 'fan' }))}
                      className="h-12"
                    >
                      Fan
                    </Button>
                    <Button
                      type="button"
                      variant={signupForm.userType === 'influencer' ? 'white' : 'outline'}
                      onClick={() => setSignupForm(prev => ({ ...prev, userType: 'influencer' }))}
                      className="h-12"
                    >
                      Creator
                    </Button>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="gradient"
                  disabled={isLoading}
                  className="w-full h-12 rounded-2xl transition-all duration-300 transform hover:scale-105"
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signin" className="space-y-6 mt-6">
              <form onSubmit={handleSignin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signin-email" className="text-white">Email</Label>
                  <Input
                    id="signin-email"
                    type="email"
                    placeholder="Enter your email"
                    value={signinForm.email}
                    onChange={(e) => setSigninForm(prev => ({ ...prev, email: e.target.value }))}
                    className="bg-white/5 border-white/20 text-white placeholder:text-purple-200 focus:border-purple-400"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signin-password" className="text-white">Password</Label>
                  <div className="relative">
                    <Input
                      id="signin-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={signinForm.password}
                      onChange={(e) => setSigninForm(prev => ({ ...prev, password: e.target.value }))}
                      className="bg-white/5 border-white/20 text-white placeholder:text-purple-200 focus:border-purple-400 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-200 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="gradient"
                  disabled={isLoading}
                  className="w-full h-12 rounded-2xl transition-all duration-300 transform hover:scale-105"
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>

                <div className="text-center">
                  <button
                    type="button"
                    className="text-purple-200 hover:text-white transition-colors"
                    onClick={() => toast.info("Password reset coming soon!")}
                  >
                    Forgot your password?
                  </button>
                </div>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-6">
            <div className="relative">
              <Separator className="bg-white/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-purple-900 px-4 text-purple-200 text-sm">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => handleSocialAuth('Google')}
                className="h-12 border-white/20 text-white hover:bg-white/10 rounded-2xl"
              >
                <Chrome className="w-5 h-5 mr-2" />
                Google
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => handleSocialAuth('MetaMask')}
                className="h-12 border-white/20 text-white hover:bg-white/10 rounded-2xl"
              >
                <Wallet className="w-5 h-5 mr-2" />
                MetaMask
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
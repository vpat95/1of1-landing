import {
  ArrowRight,
  Bot,
  CheckCircle,
  Database,
  Globe,
  Mail,
  Menu,
  MessageSquare,
  Mic,
  Phone,
  Play,
  Settings,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-cyan-900/30"></div>
        <div
          className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x / 8,
            top: mousePosition.y / 8,
            transform: "translate(-50%, -50%)",
          }}
        ></div>
        <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl">VoiceFlow AI</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-sm">
          <a
            href="#services"
            className="hover:text-purple-400 transition-colors"
          >
            Services
          </a>
          <a href="#demo" className="hover:text-purple-400 transition-colors">
            Demo
          </a>
          <a
            href="#pricing"
            className="hover:text-purple-400 transition-colors"
          >
            Pricing
          </a>
        </div>

        {/* Desktop CTA Button */}
        <button className="hidden md:block bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={toggleMobileMenu}
          ></div>

          {/* Mobile Menu */}
          <div className="absolute top-0 right-0 w-64 h-full bg-black/95 backdrop-blur-md border-l border-white/20 p-6">
            <div className="flex flex-col space-y-6">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg">Menu</span>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-4">
                <a
                  href="#services"
                  className="text-lg hover:text-purple-400 transition-colors py-2 border-b border-white/10"
                  onClick={toggleMobileMenu}
                >
                  Services
                </a>
                <a
                  href="#demo"
                  className="text-lg hover:text-purple-400 transition-colors py-2 border-b border-white/10"
                  onClick={toggleMobileMenu}
                >
                  Demo
                </a>
                <a
                  href="#pricing"
                  className="text-lg hover:text-purple-400 transition-colors py-2 border-b border-white/10"
                  onClick={toggleMobileMenu}
                >
                  Pricing
                </a>
              </div>

              {/* Mobile CTA Button */}
              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all mt-6">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative z-10 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Hero Content */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Bot className="w-4 h-4 text-purple-400" />
              <span className="text-sm">AI-Powered Business Automation</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                AI Everything.
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                The Limit is Your Imagination.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Intelligent automation workflows with voice cloning. Connect any
              system, trigger any action, scale infinitely.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Start Demo</span>
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all">
                View Docs
              </button>
            </div>
          </div>

          {/* Core Services - Side by Side */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Voice Cloning */}
            <div className="bg-gradient-to-r from-purple-500/15 to-cyan-500/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Mic className="w-6 h-6 text-purple-400" />
                  <h3 className="text-lg font-bold">Voice Cloning</h3>
                </div>
                <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full">
                  99.8% Accurate
                </span>
              </div>

              {/* Compact Waveform */}
              <div className="flex items-center justify-center h-16 space-x-1 mb-4">
                {Array.from({ length: 35 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-t from-purple-500 to-cyan-400 rounded-full animate-pulse"
                    style={{
                      width: "2px",
                      height: `${Math.random() * 40 + 10}px`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  ></div>
                ))}
              </div>

              <p className="text-sm text-gray-300 mb-3">
                Clone your voice for AI agents, assistants, and automation
                workflows
              </p>
              <div className="flex items-center text-xs text-gray-400">
                <CheckCircle className="w-3 h-3 text-green-400 mr-1" />
                <span>Real-time • 50+ languages • 5-min setup</span>
              </div>
            </div>

            {/* Workflow Automation */}
            <div className="bg-gradient-to-r from-cyan-500/15 to-purple-500/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-bold">Smart Workflows</h3>
                </div>
                <span className="text-xs text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded-full">
                  1M+ API Calls
                </span>
              </div>

              {/* Workflow Visual */}
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-500/30 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-purple-400" />
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
                <div className="w-10 h-10 bg-cyan-500/30 rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-cyan-400" />
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
                <div className="flex space-x-1">
                  <div className="w-8 h-8 bg-green-500/30 rounded flex items-center justify-center">
                    <Mail className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="w-8 h-8 bg-orange-500/30 rounded flex items-center justify-center">
                    <Phone className="w-4 h-4 text-orange-400" />
                  </div>
                  <div className="w-8 h-8 bg-blue-500/30 rounded flex items-center justify-center">
                    <Database className="w-4 h-4 text-blue-400" />
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-300 mb-3">
                Connect any system: Email, SMS, phone calls, databases, APIs
              </p>
              <div className="flex items-center text-xs text-gray-400">
                <CheckCircle className="w-3 h-3 text-green-400 mr-1" />
                <span>Visual builder • Custom triggers • Enterprise ready</span>
              </div>
            </div>
          </div>

          {/* Integration Examples + Stats Row */}
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {/* Popular Workflows */}
            <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-semibold mb-4 text-center">
                Popular Integration Workflows
              </h3>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="flex justify-center items-center space-x-1 mb-2">
                    <div className="w-6 h-6 bg-blue-500/20 rounded flex items-center justify-center">
                      <MessageSquare className="w-3 h-3 text-blue-400" />
                    </div>
                    <ArrowRight className="w-3 h-3 text-gray-400" />
                    <div className="w-6 h-6 bg-purple-500/20 rounded flex items-center justify-center">
                      <Bot className="w-3 h-3 text-purple-400" />
                    </div>
                    <ArrowRight className="w-3 h-3 text-gray-400" />
                    <div className="w-6 h-6 bg-green-500/20 rounded flex items-center justify-center">
                      <Mail className="w-3 h-3 text-green-400" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Support</h4>
                  <p className="text-xs text-gray-400">Ticket → AI → Email</p>
                </div>

                <div className="text-center">
                  <div className="flex justify-center items-center space-x-1 mb-2">
                    <div className="w-6 h-6 bg-orange-500/20 rounded flex items-center justify-center">
                      <Phone className="w-3 h-3 text-orange-400" />
                    </div>
                    <ArrowRight className="w-3 h-3 text-gray-400" />
                    <div className="w-6 h-6 bg-purple-500/20 rounded flex items-center justify-center">
                      <Mic className="w-3 h-3 text-purple-400" />
                    </div>
                    <ArrowRight className="w-3 h-3 text-gray-400" />
                    <div className="w-6 h-6 bg-cyan-500/20 rounded flex items-center justify-center">
                      <Database className="w-3 h-3 text-cyan-400" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Sales</h4>
                  <p className="text-xs text-gray-400">Call → Voice → CRM</p>
                </div>

                <div className="text-center">
                  <div className="flex justify-center items-center space-x-1 mb-2">
                    <div className="w-6 h-6 bg-cyan-500/20 rounded flex items-center justify-center">
                      <Database className="w-3 h-3 text-cyan-400" />
                    </div>
                    <ArrowRight className="w-3 h-3 text-gray-400" />
                    <div className="w-6 h-6 bg-purple-500/20 rounded flex items-center justify-center">
                      <Settings className="w-3 h-3 text-purple-400" />
                    </div>
                    <ArrowRight className="w-3 h-3 text-gray-400" />
                    <div className="w-6 h-6 bg-blue-500/20 rounded flex items-center justify-center">
                      <MessageSquare className="w-3 h-3 text-blue-400" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Data</h4>
                  <p className="text-xs text-gray-400">
                    Trigger → Process → Notify
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-3">
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-xs text-gray-400">Active Automation</div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-bold text-cyan-400">50+</div>
                <div className="text-xs text-gray-400">Integrations</div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-bold text-purple-400">5min</div>
                <div className="text-xs text-gray-400">Setup Time</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of companies automating with AI
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all flex items-center justify-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>Start Free Trial</span>
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-4 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl">VoiceFlow AI</span>
            </div>
            <div className="text-gray-400 text-sm text-center md:text-right">
              © 2025 VoiceFlow AI. Enterprise-ready • SOC2 Compliant • 99.9%
              Uptime
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

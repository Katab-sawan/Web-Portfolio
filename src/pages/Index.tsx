
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe, CreditCard, Send, TrendingUp, Shield, Smartphone, Users } from "lucide-react";
import { useState } from "react";
import { WalletDashboard } from "@/components/WalletDashboard";
import { CurrencyExchange } from "@/components/CurrencyExchange";
import { TransferMoney } from "@/components/TransferMoney";

const Index = () => {
  const [activeView, setActiveView] = useState<'landing' | 'wallet' | 'exchange' | 'transfer'>('landing');

  const mvpFeatures = [
    {
      icon: Globe,
      title: "Multi-currency Wallet",
      description: "Hold and exchange currencies at interbank rates",
      badge: "Core MVP"
    },
    {
      icon: CreditCard,
      title: "Global Spending Card",
      description: "Spend worldwide using real exchange rates",
      badge: "Essential"
    },
    {
      icon: Send,
      title: "Instant Transfers",
      description: "Send money globally with low fees",
      badge: "Network Effect"
    },
    {
      icon: TrendingUp,
      title: "Smart Budgeting",
      description: "Track spending and set financial limits",
      badge: "User Retention"
    }
  ];

  const targetUsers = [
    "Frequent travelers",
    "Digital nomads", 
    "International freelancers",
    "Tech-savvy millennials"
  ];

  if (activeView === 'wallet') {
    return <WalletDashboard onBack={() => setActiveView('landing')} />;
  }

  if (activeView === 'exchange') {
    return <CurrencyExchange onBack={() => setActiveView('landing')} />;
  }

  if (activeView === 'transfer') {
    return <TransferMoney onBack={() => setActiveView('landing')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-purple-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Revolut MVP</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-blue-200">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
              Get Started
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-6 bg-blue-500/20 text-blue-200 border-blue-400/30">
          Fintech MVP Demo
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Banking for the
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {" "}Global Generation
          </span>
        </h1>
        <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
          Exchange currencies at real rates, spend globally without fees, and send money instantly. 
          The financial super app that travels with you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-8"
            onClick={() => setActiveView('wallet')}
          >
            Try Demo Wallet <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-blue-400 text-blue-200 hover:bg-blue-400/10"
          >
            Watch Demo
          </Button>
        </div>
      </section>

      {/* MVP Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Core MVP Features
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            The essential features that solve real problems for our target users
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mvpFeatures.map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <feature.icon className="w-8 h-8 text-blue-400 group-hover:text-purple-400 transition-colors" />
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-200 text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-white group-hover:text-blue-200 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-blue-200">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Try the MVP Experience
          </h2>
          <p className="text-blue-200 text-lg">
            Experience the core features that validate our product-market fit
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card 
            className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border-white/20 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 cursor-pointer group"
            onClick={() => setActiveView('wallet')}
          >
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-white">Wallet Dashboard</CardTitle>
              <CardDescription className="text-blue-200">
                View balances, transactions, and spending insights
              </CardDescription>
            </CardHeader>
          </Card>

          <Card 
            className="bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-sm border-white/20 hover:from-green-500/30 hover:to-blue-500/30 transition-all duration-300 cursor-pointer group"
            onClick={() => setActiveView('exchange')}
          >
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-white">Currency Exchange</CardTitle>
              <CardDescription className="text-blue-200">
                Exchange currencies at real interbank rates
              </CardDescription>
            </CardHeader>
          </Card>

          <Card 
            className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border-white/20 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 cursor-pointer group"
            onClick={() => setActiveView('transfer')}
          >
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Send className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-white">Send Money</CardTitle>
              <CardDescription className="text-blue-200">
                Instant global transfers with low fees
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Target Users */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Built for Early Adopters
              </h2>
              <p className="text-blue-200 text-lg mb-8">
                Our MVP targets specific user segments who face real pain points with traditional banking
              </p>
              <ul className="space-y-4">
                {targetUsers.map((user, index) => (
                  <li key={index} className="flex items-center text-blue-200">
                    <Users className="w-5 h-5 text-blue-400 mr-3" />
                    {user}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
              <Card className="relative bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Shield className="w-6 h-6 text-green-400 mr-2" />
                    MVP Validation Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-blue-200">
                    <span>User Sign-ups</span>
                    <span className="text-green-400">↗ +125%</span>
                  </div>
                  <div className="flex justify-between text-blue-200">
                    <span>Card Usage</span>
                    <span className="text-green-400">↗ +89%</span>
                  </div>
                  <div className="flex justify-between text-blue-200">
                    <span>FX Transactions</span>
                    <span className="text-green-400">↗ +203%</span>
                  </div>
                  <div className="flex justify-between text-blue-200">
                    <span>Referral Rate</span>
                    <span className="text-green-400">↗ +67%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-white/10">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
              <Smartphone className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-semibold">Revolut MVP Demo</span>
          </div>
          <p className="text-blue-200 text-sm">
            A demonstration of fintech MVP principles and core banking features
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

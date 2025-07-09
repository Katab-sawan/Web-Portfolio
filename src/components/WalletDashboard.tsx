
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CreditCard, TrendingUp, TrendingDown, Eye, EyeOff, Plus, Send } from "lucide-react";
import { useState } from "react";

interface WalletDashboardProps {
  onBack: () => void;
}

export const WalletDashboard = ({ onBack }: WalletDashboardProps) => {
  const [showBalance, setShowBalance] = useState(true);
  
  const currencies = [
    { code: 'USD', symbol: '$', balance: 2847.32, change: '+2.4%', trend: 'up' },
    { code: 'EUR', symbol: '€', balance: 1253.18, change: '+1.8%', trend: 'up' },
    { code: 'GBP', symbol: '£', balance: 892.45, change: '-0.5%', trend: 'down' },
    { code: 'JPY', symbol: '¥', balance: 125430, change: '+0.3%', trend: 'up' }
  ];

  const recentTransactions = [
    { id: 1, type: 'spend', merchant: 'Starbucks London', amount: -4.50, currency: 'GBP', time: '2 hours ago' },
    { id: 2, type: 'transfer', merchant: 'From Alex M.', amount: 125.00, currency: 'USD', time: '5 hours ago' },
    { id: 3, type: 'exchange', merchant: 'USD → EUR', amount: -200.00, currency: 'USD', time: '1 day ago' },
    { id: 4, type: 'spend', merchant: 'Amazon', amount: -67.99, currency: 'USD', time: '2 days ago' }
  ];

  const totalBalance = currencies.reduce((sum, curr) => {
    // Convert all to USD for display (simplified)
    const rate = curr.code === 'USD' ? 1 : curr.code === 'EUR' ? 1.1 : curr.code === 'GBP' ? 1.3 : 0.007;
    return sum + (curr.balance * rate);
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-purple-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onBack}
              className="text-white hover:text-blue-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold text-white">Wallet</h1>
          </div>
          <Badge className="bg-green-500/20 text-green-200 border-green-400/30">
            Live Demo
          </Badge>
        </div>
      </header>

      <div className="container mx-auto px-4 pb-8">
        {/* Total Balance Card */}
        <Card className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border-white/20 mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">Total Balance</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowBalance(!showBalance)}
                className="text-blue-200 hover:text-white"
              >
                {showBalance ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              </Button>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-bold text-white">
                {showBalance ? `$${totalBalance.toFixed(2)}` : '••••••'}
              </span>
              <span className="text-green-400 text-sm flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                +4.2% this month
              </span>
            </div>
          </CardHeader>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Currency Balances */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Currency Accounts</h2>
              <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                <Plus className="w-4 h-4 mr-2" />
                Add Currency
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {currencies.map((currency) => (
                <Card key={currency.code} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{currency.code}</span>
                        </div>
                        <CardTitle className="text-white text-lg">{currency.code}</CardTitle>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`${currency.trend === 'up' ? 'border-green-400 text-green-400' : 'border-red-400 text-red-400'}`}
                      >
                        {currency.change}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-white">
                        {showBalance ? `${currency.symbol}${currency.balance.toLocaleString()}` : '••••••'}
                      </span>
                      {currency.trend === 'up' ? (
                        <TrendingUp className="w-5 h-5 text-green-400" />
                      ) : (
                        <TrendingDown className="w-5 h-5 text-red-400" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 h-16">
                <div className="text-center">
                  <Send className="w-6 h-6 mx-auto mb-1" />
                  <span className="text-sm">Send</span>
                </div>
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 h-16">
                <div className="text-center">
                  <TrendingUp className="w-6 h-6 mx-auto mb-1" />
                  <span className="text-sm">Exchange</span>
                </div>
              </Button>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 h-16">
                <div className="text-center">
                  <Plus className="w-6 h-6 mx-auto mb-1" />
                  <span className="text-sm">Top Up</span>
                </div>
              </Button>
            </div>
          </div>

          {/* Recent Transactions */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-6">Recent Activity</h2>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-0">
                {recentTransactions.map((transaction, index) => (
                  <div 
                    key={transaction.id} 
                    className={`p-4 ${index !== recentTransactions.length - 1 ? 'border-b border-white/10' : ''}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.type === 'spend' ? 'bg-red-500/20' :
                          transaction.type === 'transfer' ? 'bg-green-500/20' : 'bg-blue-500/20'
                        }`}>
                          {transaction.type === 'spend' ? (
                            <CreditCard className="w-5 h-5 text-red-400" />
                          ) : transaction.type === 'transfer' ? (
                            <TrendingUp className="w-5 h-5 text-green-400" />
                          ) : (
                            <TrendingUp className="w-5 h-5 text-blue-400" />
                          )}
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm">{transaction.merchant}</p>
                          <p className="text-blue-200 text-xs">{transaction.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-semibold ${transaction.amount > 0 ? 'text-green-400' : 'text-white'}`}>
                          {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)} {transaction.currency}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

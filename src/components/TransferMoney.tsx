
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Send, Globe, Clock, Shield, UserPlus, Zap } from "lucide-react";
import { useState } from "react";

interface TransferMoneyProps {
  onBack: () => void;
}

export const TransferMoney = ({ onBack }: TransferMoneyProps) => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [message, setMessage] = useState('');

  const currencies = ['USD', 'EUR', 'GBP', 'JPY'];
  
  const recentContacts = [
    { name: 'Alex Morgan', email: 'alex.m@email.com', avatar: 'AM', lastSent: '2 days ago' },
    { name: 'Sarah Johnson', email: 'sarah.j@email.com', avatar: 'SJ', lastSent: '1 week ago' },
    { name: 'Mike Chen', email: 'mike.c@email.com', avatar: 'MC', lastSent: '2 weeks ago' },
  ];

  const transferMethods = [
    { 
      id: 'instant', 
      name: 'Instant Transfer', 
      time: 'Within seconds', 
      fee: 'Free', 
      icon: Zap,
      description: 'To other Revolut users'
    },
    { 
      id: 'bank', 
      name: 'Bank Transfer', 
      time: '1-3 business days', 
      fee: 'Free', 
      icon: Globe,
      description: 'To any bank account globally'
    }
  ];

  const [selectedMethod, setSelectedMethod] = useState('instant');

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
            <h1 className="text-2xl font-bold text-white">Send Money</h1>
          </div>
          <Badge className="bg-green-500/20 text-green-200 border-green-400/30">
            Instant & Global
          </Badge>
        </div>
      </header>

      <div className="container mx-auto px-4 pb-8 max-w-4xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Transfer Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-6">
              <CardHeader>
                <CardTitle className="text-white">Send Money</CardTitle>
                <CardDescription className="text-blue-200">
                  Send money instantly to anyone, anywhere in the world
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Recipient */}
                <div className="space-y-2">
                  <Label className="text-blue-200">Recipient</Label>
                  <div className="flex space-x-2">
                    <Input
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                      placeholder="Email, phone, or @username"
                      className="bg-white/20 border-white/30 text-white placeholder:text-blue-200 flex-1"
                    />
                    <Button 
                      variant="outline" 
                      className="border-white/30 text-blue-200 hover:bg-white/20"
                    >
                      <UserPlus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Amount */}
                <div className="space-y-2">
                  <Label className="text-blue-200">Amount</Label>
                  <div className="flex space-x-2">
                    <select 
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="bg-white/20 border border-white/30 rounded-md px-3 py-2 text-white min-w-[100px]"
                    >
                      {currencies.map(curr => (
                        <option key={curr} value={curr} className="bg-blue-900">
                          {curr}
                        </option>
                      ))}
                    </select>
                    <Input
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="bg-white/20 border-white/30 text-white placeholder:text-blue-200 flex-1 text-right text-2xl font-bold"
                    />
                  </div>
                </div>

                {/* Transfer Method */}
                <div className="space-y-3">
                  <Label className="text-blue-200">Transfer Method</Label>
                  <div className="space-y-2">
                    {transferMethods.map((method) => (
                      <div
                        key={method.id}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          selectedMethod === method.id
                            ? 'border-blue-400 bg-blue-500/20'
                            : 'border-white/20 bg-white/10 hover:bg-white/20'
                        }`}
                        onClick={() => setSelectedMethod(method.id)}
                      >
                        <div className="flex items-center space-x-3">
                          <method.icon className={`w-5 h-5 ${
                            selectedMethod === method.id ? 'text-blue-400' : 'text-white'
                          }`} />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="text-white font-medium">{method.name}</h3>
                              <Badge 
                                variant="outline" 
                                className="border-green-400 text-green-400 text-xs"
                              >
                                {method.fee}
                              </Badge>
                            </div>
                            <p className="text-blue-200 text-sm">{method.description}</p>
                            <p className="text-blue-300 text-xs flex items-center mt-1">
                              <Clock className="w-3 h-3 mr-1" />
                              {method.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label className="text-blue-200">Message (Optional)</Label>
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="What's this for?"
                    className="bg-white/20 border-white/30 text-white placeholder:text-blue-200"
                  />
                </div>

                {/* Transfer Summary */}
                {amount && (
                  <div className="bg-blue-500/20 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between text-blue-200">
                      <span>Amount</span>
                      <span className="text-white font-semibold">
                        {amount} {currency}
                      </span>
                    </div>
                    <div className="flex justify-between text-blue-200">
                      <span>Fee</span>
                      <span className="text-green-400 font-semibold">FREE</span>
                    </div>
                    <div className="flex justify-between text-blue-200">
                      <span>Exchange Rate</span>
                      <span className="text-white">Real-time rate</span>
                    </div>
                    <Separator className="bg-white/20" />
                    <div className="flex justify-between text-blue-200">
                      <span>Recipient gets</span>
                      <span className="text-white font-bold text-lg">
                        {amount} {currency}
                      </span>
                    </div>
                  </div>
                )}

                <Button 
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg py-6"
                  disabled={!recipient || !amount}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Money
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Contacts */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Recent Contacts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentContacts.map((contact, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 cursor-pointer transition-colors"
                    onClick={() => setRecipient(contact.email)}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">{contact.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium text-sm">{contact.name}</p>
                      <p className="text-blue-200 text-xs">{contact.email}</p>
                      <p className="text-blue-300 text-xs">Last sent: {contact.lastSent}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Transfer Features */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Transfer Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Instant Transfers</p>
                    <p className="text-blue-200 text-sm">Money arrives in seconds</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Global Reach</p>
                    <p className="text-blue-200 text-sm">Send to 200+ countries</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Bank-level Security</p>
                    <p className="text-blue-200 text-sm">Your money is protected</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Transfers */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Recent Transfers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white text-sm font-medium">Alex Morgan</p>
                    <p className="text-blue-200 text-xs">2 hours ago</p>
                  </div>
                  <span className="text-white font-semibold">$125.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white text-sm font-medium">Sarah Johnson</p>
                    <p className="text-blue-200 text-xs">1 day ago</p>
                  </div>
                  <span className="text-white font-semibold">€75.50</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white text-sm font-medium">Mike Chen</p>
                    <p className="text-blue-200 text-xs">3 days ago</p>
                  </div>
                  <span className="text-white font-semibold">£45.00</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

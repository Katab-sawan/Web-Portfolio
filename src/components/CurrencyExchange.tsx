
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowUpDown, TrendingUp, Clock, Shield } from "lucide-react";
import { useState, useEffect } from "react";

interface CurrencyExchangeProps {
  onBack: () => void;
}

export const CurrencyExchange = ({ onBack }: CurrencyExchangeProps) => {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [fromAmount, setFromAmount] = useState('1000');
  const [toAmount, setToAmount] = useState('');

  // Mock exchange rates
  const exchangeRates = {
    'USD-EUR': 0.92,
    'USD-GBP': 0.79,
    'USD-JPY': 149.50,
    'EUR-USD': 1.09,
    'EUR-GBP': 0.86,
    'EUR-JPY': 162.80,
    'GBP-USD': 1.27,
    'GBP-EUR': 1.16,
    'GBP-JPY': 189.20,
    'JPY-USD': 0.0067,
    'JPY-EUR': 0.0061,
    'JPY-GBP': 0.0053,
  };

  const currencies = [
    { code: 'USD', name: 'US Dollar', balance: 2847.32 },
    { code: 'EUR', name: 'Euro', balance: 1253.18 },
    { code: 'GBP', name: 'British Pound', balance: 892.45 },
    { code: 'JPY', name: 'Japanese Yen', balance: 125430 }
  ];

  useEffect(() => {
    const rate = exchangeRates[`${fromCurrency}-${toCurrency}` as keyof typeof exchangeRates] || 1;
    const calculated = (parseFloat(fromAmount) * rate).toFixed(2);
    setToAmount(calculated);
  }, [fromAmount, fromCurrency, toCurrency]);

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const currentRate = exchangeRates[`${fromCurrency}-${toCurrency}` as keyof typeof exchangeRates] || 1;
  const fromBalance = currencies.find(c => c.code === fromCurrency)?.balance || 0;
  const marketRate = currentRate;
  const revolutRate = currentRate * 0.999; // Slightly better rate

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
            <h1 className="text-2xl font-bold text-white">Currency Exchange</h1>
          </div>
          <Badge className="bg-green-500/20 text-green-200 border-green-400/30">
            Real-time Rates
          </Badge>
        </div>
      </header>

      <div className="container mx-auto px-4 pb-8 max-w-4xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Exchange Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-6">
              <CardHeader>
                <CardTitle className="text-white">Exchange Currency</CardTitle>
                <CardDescription className="text-blue-200">
                  Convert at interbank rates with no hidden fees
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* From Currency */}
                <div className="space-y-2">
                  <Label className="text-blue-200">From</Label>
                  <div className="flex space-x-2">
                    <select 
                      value={fromCurrency}
                      onChange={(e) => setFromCurrency(e.target.value)}
                      className="bg-white/20 border border-white/30 rounded-md px-3 py-2 text-white min-w-[100px]"
                    >
                      {currencies.map(currency => (
                        <option key={currency.code} value={currency.code} className="bg-blue-900">
                          {currency.code}
                        </option>
                      ))}
                    </select>
                    <Input
                      value={fromAmount}
                      onChange={(e) => setFromAmount(e.target.value)}
                      placeholder="Amount"
                      className="bg-white/20 border-white/30 text-white placeholder:text-blue-200 flex-1"
                    />
                  </div>
                  <p className="text-sm text-blue-200">
                    Available: {fromBalance.toLocaleString()} {fromCurrency}
                  </p>
                </div>

                {/* Swap Button */}
                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleSwapCurrencies}
                    className="border-white/30 text-blue-200 hover:bg-white/20 rounded-full w-10 h-10 p-0"
                  >
                    <ArrowUpDown className="w-4 h-4" />
                  </Button>
                </div>

                {/* To Currency */}
                <div className="space-y-2">
                  <Label className="text-blue-200">To</Label>
                  <div className="flex space-x-2">
                    <select 
                      value={toCurrency}
                      onChange={(e) => setToCurrency(e.target.value)}
                      className="bg-white/20 border border-white/30 rounded-md px-3 py-2 text-white min-w-[100px]"
                    >
                      {currencies.map(currency => (
                        <option key={currency.code} value={currency.code} className="bg-blue-900">
                          {currency.code}
                        </option>
                      ))}
                    </select>
                    <Input
                      value={toAmount}
                      readOnly
                      className="bg-white/10 border-white/20 text-white flex-1"
                    />
                  </div>
                </div>

                {/* Exchange Rate Info */}
                <div className="bg-blue-500/20 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between text-blue-200">
                    <span>Exchange Rate</span>
                    <span className="text-white font-semibold">
                      1 {fromCurrency} = {currentRate.toFixed(4)} {toCurrency}
                    </span>
                  </div>
                  <div className="flex justify-between text-blue-200">
                    <span>Fee</span>
                    <span className="text-green-400 font-semibold">FREE</span>
                  </div>
                  <div className="flex justify-between text-blue-200 border-t border-white/20 pt-2">
                    <span>You'll receive</span>
                    <span className="text-white font-bold text-lg">
                      {toAmount} {toCurrency}
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-lg py-6">
                  Exchange Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Rate Comparison & Info */}
          <div className="space-y-6">
            {/* Rate Comparison */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                  Rate Comparison
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Traditional Banks</span>
                    <span className="text-red-400">{(marketRate * 0.97).toFixed(4)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Market Rate</span>
                    <span className="text-white">{marketRate.toFixed(4)}</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-green-500/20 rounded-lg">
                    <span className="text-green-400 font-semibold">Revolut Rate</span>
                    <span className="text-green-400 font-bold">{revolutRate.toFixed(4)}</span>
                  </div>
                </div>
                <Badge className="w-full justify-center bg-green-500/20 text-green-200 border-green-400/30">
                  Save ${((marketRate * 0.97 - revolutRate) * parseFloat(fromAmount)).toFixed(2)}
                </Badge>
              </CardContent>
            </Card>

            {/* Exchange Features */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Why Exchange with Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Interbank Rates</p>
                    <p className="text-blue-200 text-sm">Real exchange rates, no markup</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Instant Exchange</p>
                    <p className="text-blue-200 text-sm">Currency converted immediately</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Smart Alerts</p>
                    <p className="text-blue-200 text-sm">Get notified of rate changes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Exchanges */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Recent Exchanges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-blue-200">500 USD → EUR</span>
                  <span className="text-white">460.00 EUR</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-blue-200">200 GBP → USD</span>
                  <span className="text-white">254.00 USD</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-blue-200">1000 JPY → EUR</span>
                  <span className="text-white">6.10 EUR</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

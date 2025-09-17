import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { Calculator, Clock, Calendar } from "lucide-react";

export function PricingCalculator() {
  const [provider, setProvider] = useState("");
  const [planType, setPlanType] = useState("");
  const [usagePattern, setUsagePattern] = useState("");
  const [customHours, setCustomHours] = useState("");
  const [result, setResult] = useState(null);

  const providers = {
    kvps: {
      name: "K CLOUD VPS",
      plans: {
        "1gb": { monthly: 550, hourly: 1.1 },
        "2gb": { monthly: 1100, hourly: 2.2 },
        "4gb": { monthly: 2200, hourly: 4.4 }
      }
    },
    ovps: {
      name: "O CLOUD VPS",
      plans: {
        "1gb": { monthly: 896, hourly: 1.8 },
        "2gb": { monthly: 1796, hourly: 3.6 },
        "4gb": { monthly: 3596, hourly: 7.2 }
      }
    },
    cvps: {
      name: "C CLOUD VPS",
      plans: {
        "1gb": { monthly: 682, hourly: 1.4 },
        "2gb": { monthly: 1364, hourly: 2.8 },
        "4gb": { monthly: 2728, hourly: 5.6 }
      }
    }
  };

  const usagePatterns = {
    weekend: { name: "週末のみ（土日8時間ずつ）", hours: 64 },
    evening: { name: "平日夜間（平日3時間ずつ）", hours: 60 },
    fulltime: { name: "常時稼働", hours: 720 },
    custom: { name: "カスタム", hours: 0 }
  };

  const calculateCost = () => {
    if (!provider || !planType || !usagePattern) return;

    const plan = providers[provider].plans[planType];
    let hours = usagePatterns[usagePattern].hours;
    
    if (usagePattern === "custom" && customHours) {
      hours = parseInt(customHours);
    }

    const hourlyCost = Math.round(plan.hourly * hours);
    const monthlyCost = plan.monthly;
    const savings = monthlyCost - hourlyCost;
    const recommendedBilling = hourlyCost < monthlyCost ? "時間課金" : "月額課金";

    setResult({
      providerName: providers[provider].name,
      planName: planType.toUpperCase(),
      hours,
      hourlyCost,
      monthlyCost,
      savings: Math.abs(savings),
      cheaper: hourlyCost < monthlyCost ? "hourly" : "monthly",
      recommendedBilling
    });
  };

  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">コスト計算ツール</h2>
          <p className="text-muted-foreground">
            使用パターンに応じて、月額課金と時間課金のどちらがお得か計算します
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                計算条件
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>VPSプロバイダー</Label>
                <Select value={provider} onValueChange={setProvider}>
                  <SelectTrigger>
                    <SelectValue placeholder="プロバイダーを選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kvps">Kクラウド VPS</SelectItem>
                    <SelectItem value="ovps">Oクラウド VPS</SelectItem>
                    <SelectItem value="cvps">Cクラウド VPS</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>プラン</Label>
                <Select value={planType} onValueChange={setPlanType}>
                  <SelectTrigger>
                    <SelectValue placeholder="プランを選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1gb">1GB</SelectItem>
                    <SelectItem value="2gb">2GB</SelectItem>
                    <SelectItem value="4gb">4GB</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>使用パターン</Label>
                <Select value={usagePattern} onValueChange={setUsagePattern}>
                  <SelectTrigger>
                    <SelectValue placeholder="使用パターンを選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekend">週末のみ（土日8時間ずつ）</SelectItem>
                    <SelectItem value="evening">平日夜間（平日3時間ずつ）</SelectItem>
                    <SelectItem value="fulltime">常時稼働</SelectItem>
                    <SelectItem value="custom">カスタム</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {usagePattern === "custom" && (
                <div className="space-y-2">
                  <Label>月間使用時間</Label>
                  <Input
                    type="number"
                    placeholder="例: 100"
                    value={customHours}
                    onChange={(e) => setCustomHours(e.target.value)}
                  />
                </div>
              )}

              <button
                onClick={calculateCost}
                disabled={!provider || !planType || !usagePattern || (usagePattern === "custom" && !customHours)}
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
              >
                計算する
              </button>
            </CardContent>
          </Card>

          {result && (
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  計算結果
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <Badge variant="outline" className="mb-2">
                    {result.providerName} - {result.planName}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    月間 {result.hours} 時間使用
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Calendar className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                    <p className="text-sm text-muted-foreground">月額課金</p>
                    <p className="text-2xl">{result.monthlyCost}円</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Clock className="h-6 w-6 mx-auto mb-2 text-green-600" />
                    <p className="text-sm text-muted-foreground">時間課金</p>
                    <p className="text-2xl">{result.hourlyCost}円</p>
                  </div>
                </div>

                <div className={`p-4 rounded-lg ${result.cheaper === "hourly" ? "bg-green-100 border border-green-200" : "bg-blue-100 border border-blue-200"}`}>
                  <div className="text-center">
                    <Badge variant={result.cheaper === "hourly" ? "default" : "secondary"} className="mb-2">
                      おすすめ: {result.recommendedBilling}
                    </Badge>
                    <p className="text-lg">
                      {result.savings}円お得！
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {result.cheaper === "hourly" ? "短時間利用なら時間課金がお得です" : "長時間利用なら月額課金がお得です"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
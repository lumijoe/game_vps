import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Check, X } from "lucide-react";

const providers = [
  {
    name: "k CLOUD VPS",
    logo: "🏢",
    plans: [
      { name: "1GB", ram: "1GB", cpu: "1コア", price: "550円", hourly: "1.1円" },
      { name: "2GB", ram: "2GB", cpu: "2コア", price: "1,100円", hourly: "2.2円" },
      { name: "4GB", ram: "4GB", cpu: "4コア", price: "2,200円", hourly: "4.4円" }
    ],
    features: {
      gameTemplate: true,
      autoSetup: true,
      hourlyBilling: true,
      mod: true,
      support: "24時間"
    }
  },
  {
    name: "O CLOUD VPS",
    logo: "🌐",
    plans: [
      { name: "1GB", ram: "1GB", cpu: "2コア", price: "896円", hourly: "1.8円" },
      { name: "2GB", ram: "2GB", cpu: "3コア", price: "1,796円", hourly: "3.6円" },
      { name: "4GB", ram: "4GB", cpu: "4コア", price: "3,596円", hourly: "7.2円" }
    ],
    features: {
      gameTemplate: true,
      autoSetup: true,
      hourlyBilling: true,
      mod: true,
      support: "平日"
    }
  },
  {
    name: "C CLOUD VPS",
    logo: "☁️",
    plans: [
      { name: "1GB", ram: "1GB", cpu: "1コア", price: "682円", hourly: "1.4円" },
      { name: "2GB", ram: "2GB", cpu: "2コア", price: "1,364円", hourly: "2.8円" },
      { name: "4GB", ram: "4GB", cpu: "4コア", price: "2,728円", hourly: "5.6円" }
    ],
    features: {
      gameTemplate: true,
      autoSetup: true,
      hourlyBilling: true,
      mod: true,
      support: "平日"
    }
  },
  {
    name: "S CLOUD VPS",
    logo: "🌸",
    plans: [
      { name: "1GB", ram: "1GB", cpu: "1コア", price: "880円", hourly: "×" },
      { name: "2GB", ram: "2GB", cpu: "3コア", price: "1,760円", hourly: "×" },
      { name: "4GB", ram: "4GB", cpu: "4コア", price: "3,520円", hourly: "×" }
    ],
    features: {
      gameTemplate: false,
      autoSetup: false,
      hourlyBilling: false,
      mod: true,
      support: "平日"
    }
  }
];

export function ComparisonTable() {
  return (
    <section className="px-6 py-16 bg-gray-50" id="providerspec">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">VPSプロバイダー比較</h2>
          <p className="text-muted-foreground">
            主要VPSサービスの料金とゲーマー向け機能を比較
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {providers.map((provider, index) => (
            <Card key={index} className="relative">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{provider.logo}</div>
                <CardTitle className="text-lg">{provider.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* 料金プラン */}
                <div className="space-y-3">
                  <h4>料金プラン</h4>
                  {provider.plans.map((plan, planIndex) => (
                    <div key={planIndex} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">{plan.ram}</span>
                        <Badge variant="outline">{plan.price}/月</Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {plan.cpu} • {plan.hourly !== "×" ? `${plan.hourly}/時` : "時間課金なし"}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 機能比較 */}
                <div className="space-y-3">
                  <h4>ゲーマー向け機能</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span>ゲーム用テンプレート</span>
                      {provider.features.gameTemplate ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <X className="h-4 w-4 text-red-600" />
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span>自動構築</span>
                      {provider.features.autoSetup ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <X className="h-4 w-4 text-red-600" />
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span>時間課金</span>
                      {provider.features.hourlyBilling ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <X className="h-4 w-4 text-red-600" />
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span>MOD対応</span>
                      {provider.features.mod ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <X className="h-4 w-4 text-red-600" />
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span>サポート</span>
                      <span className="text-xs">{provider.features.support}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Check className="h-4 w-4 text-green-600" />
              <span>対応</span>
            </div>
            <div className="flex items-center gap-1">
              <X className="h-4 w-4 text-red-600" />
              <span>非対応</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Gamepad2, 
  Shield, 
  Zap, 
  Settings, 
  Users, 
  HardDrive,
  Clock,
  DollarSign
} from "lucide-react";

export function FeaturesSection() {
  const tips = [
    {
      icon: Users,
      title: "プレイヤー数で決める",
      description: "マイクラなら1-4人で2GB、5-10人で4GB、11人以上で8GBが目安。MOD使用時は1段階上のスペックを推奨。",
      color: "blue"
    },
    {
      icon: Settings,
      title: "自動構築機能を活用",
      description: "ゲーム用テンプレートがあるVPSなら、複雑な設定不要で即座にサーバー開始できます。",
      color: "green"
    },
    {
      icon: Clock,
      title: "時間課金で無駄を削減",
      description: "週末だけプレイするなら時間課金がお得。月720時間未満の利用なら時間課金を検討しましょう。",
      color: "yellow"
    },
    {
      icon: Shield,
      title: "MOD対応の重要性",
      description: "公式サーバーではMODが使えません。カスタマイズ性を重視するならVPS一択です。",
      color: "purple"
    }
  ];

  const gameGuides = [
    {
      game: "Minecraft",
      icon: "⛏️",
      minSpec: "2GB/1コア",
      recommendedSpec: "4GB/2コア",
      notes: "バニラなら2GB、大量MODなら8GB推奨"
    },
    {
      game: "ARK: Survival Evolved",
      icon: "🦕",
      minSpec: "6GB/2コア",
      recommendedSpec: "12GB/4コア",
      notes: "重いゲームのため高スペック必須"
    },
    {
      game: "Rust",
      icon: "🔧",
      minSpec: "4GB/2コア",
      recommendedSpec: "8GB/4コア",
      notes: "プレイヤー数に応じてスケールアップ"
    },
    {
      game: "Valheim",
      icon: "⚔️",
      minSpec: "2GB/2コア",
      recommendedSpec: "4GB/2コア",
      notes: "軽量でVPS初心者にもおすすめ"
    }
  ];

  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">ゲーマー向けVPS選びのポイント</h2>
          <p className="text-muted-foreground">
            失敗しないVPS選択のための重要なポイントをまとめました
          </p>
        </div>

        {/* Tips Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tips.map((tip, index) => {
            const IconComponent = tip.icon;
            const colorClasses = {
              blue: "text-blue-600 bg-blue-100",
              green: "text-green-600 bg-green-100",
              yellow: "text-yellow-600 bg-yellow-100",
              purple: "text-purple-600 bg-purple-100"
            };

            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${colorClasses[tip.color]} flex items-center justify-center mb-4`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tip.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Game Guide Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gamepad2 className="h-6 w-6" />
              ゲーム別推奨スペック一覧
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {gameGuides.map((guide, index) => (
                <div key={index} className="p-4 border rounded-lg bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{guide.icon}</span>
                    <h4>{guide.game}</h4>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">最小スペック:</span>
                      <Badge variant="outline">{guide.minSpec}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">推奨スペック:</span>
                      <Badge variant="default">{guide.recommendedSpec}</Badge>
                    </div>
                    <p className="text-muted-foreground mt-2 text-xs">
                      💡 {guide.notes}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl">
          <h3 className="mb-4">今すぐVPSを選んでゲームを始めよう！</h3>
          <p className="mb-6 opacity-90">
            適切なスペックのVPSを選んで、友達と快適なゲーム体験を楽しみましょう
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
              スペック診断をもう一度
            </button>
            <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              比較表を見る
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
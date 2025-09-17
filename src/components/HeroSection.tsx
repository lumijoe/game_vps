import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Server, Users, Zap, Settings } from "lucide-react";

export function HeroSection() {
  return (
    <section className="px-6 py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="mb-6 text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ゲーマー向けVPS選びガイド
          </h1>
          <p className="mb-8 text-xl text-muted-foreground max-w-3xl mx-auto">
            M-game、A-game、R-game...あなたのゲームに最適なVPSを見つけよう。
            人数とゲームに応じた推奨スペックから、コスパ最強のサーバーまで徹底比較。
          </p>
          {/* <Button size="lg" className="mr-4">
            VPSを選ぶ
          </Button> */}
          <a data-slot="button" href="#spectest" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-6 has-[&gt;svg]:px-4 mr-4">
            VPSを選ぶ
          </a>
          <a data-slot="button" href="#providerspec" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[&gt;svg]:px-4">
           比較表を見る
          </a>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <Card className="p-6 text-center">
            <Users className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h3 className="mb-2">人数基準</h3>
            <p className="text-sm text-muted-foreground">
              1-4人なら2GB<br />
              5-10人なら4GB<br />
              11人以上なら8GB
            </p>
          </Card>
          
          <Card className="p-6 text-center">
            <Settings className="h-12 w-12 mx-auto mb-4 text-green-600" />
            <h3 className="mb-2">簡単設定</h3>
            <p className="text-sm text-muted-foreground">
              自動構築機能<br />
              ゲーム用テンプレート<br />
              初心者でも安心
            </p>
          </Card>
          
          <Card className="p-6 text-center">
            <Zap className="h-12 w-12 mx-auto mb-4 text-yellow-600" />
            <h3 className="mb-2">コスパ重視</h3>
            <p className="text-sm text-muted-foreground">
              時間課金対応<br />
              長期契約割引<br />
              週末だけでもOK
            </p>
          </Card>
          
          <Card className="p-6 text-center">
            <Server className="h-12 w-12 mx-auto mb-4 text-purple-600" />
            <h3 className="mb-2">MOD対応</h3>
            <p className="text-sm text-muted-foreground">
              カスタマイズ自由<br />
              プラグイン対応<br />
              独自設定可能
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
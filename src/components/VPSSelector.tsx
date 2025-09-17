import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const gameSpecs = {
  mgame: {
    name: "M-game",
    specs: {
      "1-4": { ram: "2GB", cpu: "1コア", storage: "20GB", price: "500-800円" },
      "5-10": { ram: "4GB", cpu: "2コア", storage: "40GB", price: "1000-1500円" },
      "11+": { ram: "8GB", cpu: "4コア", storage: "80GB", price: "2000-3000円" }
    }
  },
  agame: {
    name: "A-game",
    specs: {
      "1-4": { ram: "6GB", cpu: "2コア", storage: "100GB", price: "1500-2000円" },
      "5-10": { ram: "12GB", cpu: "4コア", storage: "200GB", price: "3000-4000円" },
      "11+": { ram: "16GB", cpu: "6コア", storage: "300GB", price: "5000-6000円" }
    }
  },
  rgame: {
    name: "R-game",
    specs: {
      "1-4": { ram: "4GB", cpu: "2コア", storage: "50GB", price: "1000-1500円" },
      "5-10": { ram: "8GB", cpu: "4コア", storage: "100GB", price: "2000-3000円" },
      "11+": { ram: "16GB", cpu: "6コア", storage: "200GB", price: "4000-5000円" }
    }
  }
};

export function VPSSelector() {
  const [selectedGame, setSelectedGame] = useState("");
  const [playerCount, setPlayerCount] = useState("");
  const [recommendation, setRecommendation] = useState(null);

  const getPlayerRange = (count: number) => {
    if (count <= 4) return "1-4";
    if (count <= 10) return "5-10";
    return "11+";
  };

  const handleRecommend = () => {
    if (selectedGame && playerCount) {
      const count = parseInt(playerCount);
      const range = getPlayerRange(count);
      const spec = gameSpecs[selectedGame].specs[range];
      setRecommendation({
        game: gameSpecs[selectedGame].name,
        players: count,
        ...spec
      });
    }
  };

  return (
    <section className="px-6 py-16 bg-white" id="spectest">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">VPS推奨スペック診断</h2>
          <p className="text-muted-foreground">
            ゲームと人数を選択して、最適なVPSスペックを確認しましょう
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>ゲーム情報を入力</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="game">ゲーム選択</Label>
                <Select value={selectedGame} onValueChange={setSelectedGame}>
                  <SelectTrigger>
                    <SelectValue placeholder="ゲームを選択してください" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mgame">M-game</SelectItem>
                    <SelectItem value="agame">A-game</SelectItem>
                    <SelectItem value="rgame">R-game</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="players">想定プレイヤー数</Label>
                <Input
                  id="players"
                  type="number"
                  placeholder="例: 5"
                  value={playerCount}
                  onChange={(e) => setPlayerCount(e.target.value)}
                />
              </div>
            </div>

            <Button onClick={handleRecommend} className="w-full" disabled={!selectedGame || !playerCount}>
              推奨スペックを確認
            </Button>
          </CardContent>
        </Card>

        {recommendation && (
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="default">{recommendation.game}</Badge>
                推奨スペック
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">メモリ</p>
                  <p className="text-2xl">{recommendation.ram}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">CPU</p>
                  <p className="text-2xl">{recommendation.cpu}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">ストレージ</p>
                  <p className="text-2xl">{recommendation.storage}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">月額目安</p>
                  <p className="text-2xl">{recommendation.price}</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm">
                  <strong>💡 ポイント:</strong> {recommendation.players}人でのプレイなら、
                  上記スペックで快適にゲームをお楽しみいただけます。
                  MODを多用する場合は、メモリを1段階上げることをおすすめします。
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
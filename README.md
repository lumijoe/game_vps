# 起動メモ
```git clone``` ```npm install``` ```npm run dev```

# React + TypeScript + Vite

以下詳細あり

# ゲーマー向けVPS選びガイド 🎮
サンプルサイト（対応中）

## 🎯 サイトの特徴

- **人数別推奨スペック提案** - プレイ人数に応じた最適なメモリ・CPUを提案
- **ゲーム別要件チェック** - 各ゲームに必要なスペックを一覧で比較
- **料金計算機** - 使用時間や期間に応じた料金をリアルタイム計算
- **VPS比較表** - 主要VPSサービスの性能・価格を一目で比較

## 📦 主な機能

### 1. VPSセレクター
- プレイ人数を入力するだけで推奨スペックを表示
- ゲームタイトル別の最適構成を提案
- 初心者にも分かりやすいガイド付き

### 2. 比較テーブル
- 主要VPSプロバイダーの性能比較
- 価格、スペック、サポート体制を総合評価
- フィルター・ソート機能で最適なプランを発見

### 3. 料金計算ツール
- 時間課金・月額課金の比較
- 長期利用時の割引計算
- 予算に応じたプラン提案

### 4. ゲーム別推奨設定
- Minecraft、ARK、Rust、Valheim等の推奨スペック
- MOD使用時の追加要件
- サーバー設定のベストプラクティス

## 🛠 技術スタック

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3 + shadcn/ui
- **Icons**: Lucide React
- **Package Manager**: npm

## 🚀 開発環境のセットアップ

```bash
# リポジトリのクローン
git clone https://github.com/lumijoe/game_vps.git
cd game_vps

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Lint
npm run lint
```

## 📁 プロジェクト構成

```
game_vps/
├── src/
│   ├── components/
│   │   ├── HeroSection.tsx      # ヒーローセクション
│   │   ├── VPSSelector.tsx      # VPS選択ツール
│   │   ├── ComparisonTable.tsx  # 比較表
│   │   ├── PricingCalculator.tsx # 料金計算機
│   │   ├── FeaturesSection.tsx  # 機能紹介
│   │   └── ui/                  # shadcn/uiコンポーネント
│   ├── App.tsx                  # メインアプリケーション
│   ├── main.tsx                 # エントリーポイント
│   └── index.css                # グローバルスタイル
├── public/                      # 静的ファイル
├── tailwind.config.js          # Tailwind設定
├── vite.config.ts              # Vite設定
└── package.json                # プロジェクト設定
```

## 🎨 デザインシステム

- **カラースキーム**: ブルー・パープルのグラデーション
- **レスポンシブ対応**: モバイル・タブレット・デスクトップ


### 使用ライブラリ
- [shadcn/ui](https://ui.shadcn.com/) - [MITライセンス](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md)
- [Unsplash](https://unsplash.com) - [Unsplashライセンス](https://unsplash.com/license)

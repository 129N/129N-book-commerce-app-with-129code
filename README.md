


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Next.js × microCMS × Stripe 決済 ECサイト / EC site with Next.js × microCMS × Stripe

このプロジェクトは、Next.js、microCMS、Stripe を用いたシンプルなECサイトです。Vercelでデプロイされています。  
This project is a simple e-commerce site using Next.js, microCMS, and Stripe. It is deployed on Vercel.

---

## 🔧 使用技術 / Tech Stack

- [Next.js](https://nextjs.org/) - React ベースのフレームワーク  
  React-based framework for server-side rendering and static site generation.

- [microCMS](https://microcms.io/) - ヘッドレスCMS（APIベース）  
  Headless CMS for content management via API.

- [Stripe](https://stripe.com/jp) - クレジットカード決済システム  
  Payment system for handling credit card payments.

- [Vercel](https://vercel.com/) - デプロイとホスティングサービス  
  Platform for deployment and hosting.

---

## 📦 機能一覧 / Features

- 商品一覧ページ  
  Product list page

- 商品詳細ページ  
  Product detail page

- Stripeによるクレジットカード決済  
  Credit card payment via Stripe

- 注文完了ページ  
  Order confirmation page

- Vercelでの自動デプロイ  
  Auto deployment via Vercel

---

## 🚀 セットアップ方法 / Getting Started

### 1. リポジトリのクローン / Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name



### 2.パッケージのインストール / Install dependencies

First, run the development server:

```bash
npm install
# or
yarn install
```

### 3.環境変数の設定 / Setup environment variables

プロジェクトルートに .env.local ファイルを作成し、以下を記述してください：
Create a .env.local file at the root of the project and add the following:

```bash
# microCMS
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key

# Stripe
STRIPE_SECRET_KEY=your-stripe-secret-key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
```


### 4. 開発サーバーの起動 / Start development server

http://localhost:3000 にアクセスできます。
You can access it at http://localhost:3000.

```bash
npm run dev
# or
yarn dev
```

--- 

## 🧾 Stripe 決済について / About Stripe Payments
テストモードでは以下のカード番号を使用してください：
Use the following card number for testing in Stripe:

```bash
カード番号 / Card Number: 4242 4242 4242 4242
有効期限 / Exp: Any future date
CVC: 任意の3桁 / Any 3 digits

```

## 📦 デプロイ（Vercel） / Deployment with Vercel
Vercelはmainブランチへのpushで自動的にデプロイします。
Vercel automatically deploys on push to the main branch.

手動デプロイも可能です：
You can also deploy manually:

Vercel にログイン / Log in to Vercel

プロジェクトを新規作成 / Create a new project

環境変数を設定 / Add environment variables

デプロイ開始 / Start deployment




# Federico（ゲームクリエイターズアカデミー）HP

子ども向けオンラインゲーム制作スクール「Federico」のランディングページ。
Scratch / Unity / Roblox で本格的なゲームづくりを学べることを訴求する。

> 旧称「GCA（GAME CREATOR ACADEMY）」からリブランディング済み。ディレクトリ名 `gca-hp` はそのまま残しているが、サイト上の表記はすべて Federico に統一されている。

## ディレクトリ構成

```
gca-hp/
├── index.html        # ページ本体（Tailwind含め完全に1ファイル）
├── CLAUDE.md         # 本ファイル
└── assets/           # 画像素材
    ├── federico_logo.svg / .png     # Federico ロゴ（ヘッダー）
    ├── hero_right.png               # ヒーロー右側のメイン写真（PCで作業する子ども）
    ├── about_img.png                # About セクションの右画像
    ├── scratch_cat.png              # Scratch クラスカード内のScratchキャット
    ├── scratch_img.png              # Scratch / Roblox カード内のサムネ
    ├── unity_logo.png / .svg        # Unity クラスカードのロゴ
    ├── unity_img.jpg                # Unity クラスカード内のサムネ
    ├── roblox.png                   # Roblox クラスカードのアイコン
    ├── lesson_img_1.png 〜 4.png    # レッスンスタイル 4 カードのイラスト
    ├── icon1.png 〜 icon4.png       # 旧「4つの力」用アイコン（現バージョンでは未使用）
    └── logo.svg                     # 旧 GCA ロゴ（現バージョンでは未使用）
```

## 技術スタック

- **Tailwind CSS v3** — Play CDN（`<script src="https://cdn.tailwindcss.com"></script>`）で読み込み。ビルド不要。
- **Google Fonts** — Noto Sans JP（本文）/ Inter（英字）
- 単一の `index.html` で完結。外部CSSファイル無し。
- Q&A アコーディオン・モバイルメニュー・TOPボタン表示制御は末尾の素のJSで実装。

## ページ構成（順番に対応するセクション）

1. **ヘッダー**（sticky）— Federico ロゴ＋ナビ 4 項目＋ピンクの「無料体験お申し込み」ボタン＋ティールの「ログイン」ボタン
2. **HERO** — 「好きが未来をつくる。」のタグライン + ティールハイライトされた「ゲームをつくる力 / 自信 / 成長」 + 説明文 + `hero_right.png`
3. **News お知らせ・キャンペーン**（`#news`）— サムネ枠＋日付＋バッジ＋見出し＋抜粋本文のリスト
4. **About Federicoについて**（`#about`）— 左に説明文、右に `about_img.png`。背景 `#EEFBF8`
5. **Course コース**（`#course`）— Scratch（オレンジ） / Unity（グレー） / Roblox（青） の 3 カード。最後に「すべてのコースを見る」ボタン
6. **Lesson Style レッスンスタイル**（`#lesson-style`）— 4 カード（オンライン完結 / 少人数制個別指導 / 伴走型サポート / 進捗の可視化）＋「レッスンスタイルを詳しく見る」ボタン
7. **Q&A よくあるご質問**（`#qa`）— アコーディオン式 3 項目。背景 `#F5F5F5`
8. **フッター** — `#18B293` 背景に「Copyright 2026 Tsuzurhythm Inc.」のみ
9. **TOPへ戻るボタン** — 右下フローティング。スクロール 400px 超で表示

## デザインルール

`tailwind.config.theme.extend` でカスタム値を定義済み：

| トークン | 値 | 用途 |
|---|---|---|
| `brand` | `#18B293` | プライマリ（ティール） |
| `brand-dark` | `#0E8E76` | プライマリ濃色 |
| `pink` | `#FF4F7B` | 「無料体験」CTA |
| `ink` / `ink-soft` / `ink-gray` | `#333333` / `#4D4D4D` / `#737373` | テキスト 3 段階 |
| `scratch` | `#FFAB19` | Scratch クラス |
| `unity` | `#4D4D4D` | Unity クラス |
| `roblox` | `#335FFF` | Roblox クラス |
| `bg-soft` | `#EEFBF8` | About セクション背景 |
| `bg-gray` | `#F5F5F5` | Q&A セクション背景 |

### セクション見出しの共通スタイル
`<style type="text/tailwindcss">` 内のコンポーネントクラス：
- `.section-eyebrow` — 英字キャッチ（ブランド色、Interフォント、20px）
- `.section-title` — 日本語見出し（ink色、28–32px、太字）
- `.section-lead` — リード文（ink色、15–16px）

### HERO 見出しのハイライト
`.hero-key` クラスがティール背景＋白文字のキーワード塊（「ゲームをつくる力」「自信」「成長」）。`.hero-tagline` `.hero-conn` で文字サイズの強弱を作る。フォントサイズは `clamp()` でレスポンシブ化。

### 角丸
- ボタン（outline）: `rounded-full`
- Course カード: `rounded-[15px]`
- Lesson Style カード: `rounded-[10px]`
- News サムネ: `rounded-[15px]`

## レスポンシブ

Tailwind 標準ブレークポイントを使用：
- `lg`（1024px〜）— ナビ表示、HERO 2 カラム、Course 2+1 カラム、Lesson Style 4 カラム
- `md`（768px〜）— ヘッダーのログインボタン表示、Course 内 2 カラム、News サムネ横並び
- `sm`（640px〜）— 無料体験ボタン表示、Lesson Style 2 カラム
- `< sm` — 全て 1 列スタック、モバイルメニュー有効

## ローカル確認

```bash
cd /Users/inagaki/work/gca-hp
python3 -m http.server 8000
# ブラウザで http://localhost:8000/ を開く
```

ヘッドレス Chrome でのキャプチャ:
```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --headless --disable-gpu --hide-scrollbars \
  --window-size=1440,5200 \
  --screenshot=/tmp/federico.png http://localhost:8000/index.html
```

## 注意点

- **`@apply` の警告** — IDE/エディタの CSS linter は `@apply` 等の Tailwind 独自構文を理解しないので警告を出すことがあるが、実行時には Play CDN がコンパイルするため動作に問題は無い（無視してよい）。
- **Play CDN は本番非推奨** — 初回読み込み時に JS で Tailwind をコンパイルするため重い。本番運用に切り替える場合は `tailwindcss-cli` / `postcss` で事前ビルドし、生成 CSS を `<link>` で読み込む構成へ変える。
- `assets/federico_logo.svg` は中身が base64 エンコードされた PNG データ。直接 `Read` しようとすると数十万トークンに達するので注意（先頭のみ `head -c` で確認可）。
- **Roblox カードの説明文** — 現状は Figma 元データ通り「本格的な 2D/3D ゲーム制作に挑戦。プロも使う Unity でスキルを磨こう！」のまま（Figma 側のテキストコピペで Roblox 固有のコピーが未確定）。確定後に差し替えが必要。
- **News セクションのサムネ** — 現状はプレースホルダー枠（白＋枠線）。記事用の画像が用意でき次第差し替え。
- Q&A はアコーディオン式。`.qa-toggle` クリックで `.qa-body` の表示を切り替える素の JS で動作。
- 旧アセット（`logo.svg` / `mindrender_img.jpg` / `icon1〜4.png`）はバージョン履歴のために残しているが現バージョンでは未参照。

## コンポーネントの作成単位について

コンポーネントの粒度は「Atomic design」に基づき、
その責務に応じて以下7つのレベルに分割、作成する。

- atoms
- molecules
- organisms

## Atoms（原子）

最も基本的なUI要素（例：ボタン、入力フィールド、ラベル）。<br/>
components/atomsディレクトリに配置。

## Molecules（分子）

複数の原子を組み合わせた機能的なUIグループ（例：フォーム、カード）。<br/>
components/moleculesディレクトリに配置。

## Organisms（有機体）

複数の分子（場合によっては原子も）を組み合わせて、より複雑なUIセクションを形成（例：ヘッダー、フッター）。<br/>
components/organismsディレクトリに配置。

## Layouts（レイアウト）

本来のAtomic Designには存在しない。<br/>
レイアウトパターンをコンポーネントとして作成する。
ページ間で共通のタグを記載したHTMLのスケルトン等


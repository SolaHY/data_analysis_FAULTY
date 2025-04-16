<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>特徴 - DataViz</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="styles.css">
</head>
<body class="bg-light">
    <header>
        <?php include 'header.html'; ?>
    </header>

    <!-- メインコンテンツ -->
    <main class="py-5">
        <div class="container">
            <h1 class="text-center mb-5">DataVizの特徴</h1>
            
            <!-- 主要な特徴 -->
            <div class="row g-4 mb-5">
                <div class="col-md-4">
                    <div class="card h-100 shadow-sm feature-card">
                        <div class="card-body text-center">
                            <i class="bi bi-graph-up display-4 text-primary mb-3"></i>
                            <h3 class="h5">直感的なデータ可視化</h3>
                            <p class="text-muted">複雑なデータを分かりやすいグラフやチャートで表示し、重要な情報を一目で把握できます。</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 shadow-sm feature-card">
                        <div class="card-body text-center">
                            <i class="bi bi-lightning-charge display-4 text-primary mb-3"></i>
                            <h3 class="h5">リアルタイム分析</h3>
                            <p class="text-muted">データは自動的に更新され、常に最新の情報を確認できます。ビジネスの動きをリアルタイムで把握。</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 shadow-sm feature-card">
                        <div class="card-body text-center">
                            <i class="bi bi-gear display-4 text-primary mb-3"></i>
                            <h3 class="h5">カスタマイズ性</h3>
                            <p class="text-muted">ビジネスのニーズに合わせて、ダッシュボードを自由にカスタマイズできます。</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- インタラクティブデモセクション -->
            <section class="interactive-demo py-5">
                <h2 class="text-center mb-4">インタラクティブデモ</h2>
                <div class="card shadow-sm">
                    <div class="card-body">
                        <div class="row align-items-center mb-4">
                            <div class="col-md-6">
                                <h3 class="h5">リアルタイムデータ可視化</h3>
                                <p class="text-muted">以下のグラフは、JavaScriptを使用してリアルタイムでデータを生成・表示しています。</p>
                            </div>
                            <div class="col-md-6 text-md-end">
                                <button id="update-data" class="btn btn-primary">
                                    <i class="bi bi-arrow-clockwise me-2"></i>データを更新
                                </button>
                            </div>
                        </div>
                        <div id="demo-chart" class="w-100" style="height: 200px;"></div>
                    </div>
                </div>
            </section>

            <!-- 詳細な特徴リスト -->
            <section class="detailed-features py-5">
                <h2 class="text-center mb-4">詳細な機能</h2>
                <div class="row g-4">
                    <div class="col-md-6">
                        <div class="card h-100 shadow-sm">
                            <div class="card-body">
                                <h3 class="h5 mb-3">インタラクティブグラフ</h3>
                                <ul class="list-unstyled">
                                    <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>ズーム・パン機能</li>
                                    <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>データポイントのホバー表示</li>
                                    <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>カスタムツールチップ</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card h-100 shadow-sm">
                            <div class="card-body">
                                <h3 class="h5 mb-3">カスタムレポート作成</h3>
                                <ul class="list-unstyled">
                                    <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>ドラッグ＆ドロップでレイアウト</li>
                                    <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>テンプレート機能</li>
                                    <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>自動スケジュール設定</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>

    <footer>
        <?php include 'footer.html'; ?>
    </footer>

    <!-- Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- D3.js -->
    <script src="https://d3js.org/d3.v7.min.js"></script>
    <!-- Custom JavaScript -->
    <script src="features.js"></script>
</body>
</html> 
</html> 
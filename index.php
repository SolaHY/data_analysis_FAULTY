<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DataViz - データ分析ダッシュボード</title>
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

    <!-- ヒーローセクション -->
    <section class="hero py-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h1 class="display-4 fw-bold mb-4">データ分析を、もっとシンプルに。</h1>
                    <p class="lead mb-4">DataVizは、複雑なデータを直感的に理解できるダッシュボードを提供します。ビジネスの意思決定をサポートし、成長を加速させます。</p>
                    <div class="d-flex gap-3">
                        <a href="demo.php" class="btn btn-primary btn-lg">
                            <i class="bi bi-play-circle me-2"></i>デモを体験
                        </a>
                        <a href="contact.php" class="btn btn-outline-primary btn-lg">
                            <i class="bi bi-envelope me-2"></i>お問い合わせ
                        </a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <img src="https://via.placeholder.com/600x400" alt="DataViz Dashboard" class="img-fluid rounded shadow">
                </div>
            </div>
        </div>
    </section>

    <!-- 特徴セクション -->
    <section class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">主な特徴</h2>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body text-center">
                            <i class="bi bi-graph-up display-4 text-primary mb-3"></i>
                            <h3 class="h5">直感的なデータ可視化</h3>
                            <p class="text-muted">複雑なデータを分かりやすいグラフやチャートで表示し、重要な情報を一目で把握できます。</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body text-center">
                            <i class="bi bi-lightning-charge display-4 text-primary mb-3"></i>
                            <h3 class="h5">リアルタイム分析</h3>
                            <p class="text-muted">データは自動的に更新され、常に最新の情報を確認できます。ビジネスの動きをリアルタイムで把握。</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body text-center">
                            <i class="bi bi-gear display-4 text-primary mb-3"></i>
                            <h3 class="h5">カスタマイズ性</h3>
                            <p class="text-muted">ビジネスのニーズに合わせて、ダッシュボードを自由にカスタマイズできます。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <?php include 'footer.html'; ?>
    </footer>

    <!-- Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>デモ - DataViz</title>
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

    <!-- デモセクション -->
    <section class="py-5 mt-5">
        <div class="container">
            <h1 class="text-center mb-5">データ分析デモ</h1>
            <p class="text-center text-muted mb-5">実際のデータ分析機能を体験してください。</p>

            <!-- データ操作コントロール -->
            <div class="card mb-4 shadow-sm">
                <div class="card-body">
                    <div class="row g-3 mb-3">
                        <div class="col-md-3">
                            <label for="date-range" class="form-label">期間</label>
                            <select id="date-range" class="form-select">
                                <option value="7">過去7日間</option>
                                <option value="30" selected>過去30日間</option>
                                <option value="90">過去90日間</option>
                                <option value="365">過去1年間</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="category" class="form-label">カテゴリ</label>
                            <select id="category" class="form-select">
                                <option value="all" selected>すべて</option>
                                <option value="sales">売上</option>
                                <option value="traffic">トラフィック</option>
                                <option value="users">ユーザー</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="min-value" class="form-label">最小値</label>
                            <input type="number" id="min-value" class="form-control" placeholder="最小値">
                        </div>
                        <div class="col-md-3">
                            <label for="max-value" class="form-label">最大値</label>
                            <input type="number" id="max-value" class="form-control" placeholder="最大値">
                        </div>
                    </div>
                    <button class="btn btn-primary" id="apply-filters">
                        <i class="bi bi-filter me-2"></i>フィルターを適用
                    </button>
                </div>
            </div>

            <!-- ローディングインジケーター -->
            <div class="text-center py-5 d-none" id="loading">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <p class="mt-3">データを読み込んでいます...</p>
            </div>

            <!-- データ結果表示 -->
            <div id="data-results">
                <!-- サマリーカード -->
                <div class="row g-3 mb-4">
                    <div class="col-md-3">
                        <div class="card shadow-sm summary-card h-100">
                            <div class="card-body">
                                <h6 class="text-muted mb-2">総データ数</h6>
                                <h3 class="mb-0" id="total-count">0</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card shadow-sm summary-card h-100">
                            <div class="card-body">
                                <h6 class="text-muted mb-2">平均値</h6>
                                <h3 class="mb-0" id="average-value">0</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card shadow-sm summary-card h-100">
                            <div class="card-body">
                                <h6 class="text-muted mb-2">最大値</h6>
                                <h3 class="mb-0" id="max-data-value">0</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card shadow-sm summary-card h-100">
                            <div class="card-body">
                                <h6 class="text-muted mb-2">最小値</h6>
                                <h3 class="mb-0" id="min-data-value">0</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- グラフカード -->
                <div class="card shadow-sm mb-4">
                    <div class="card-header bg-white py-3">
                        <h5 class="mb-0">データトレンド</h5>
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-center gap-3 mb-3" id="chart-legend">
                            <div class="d-flex align-items-center">
                                <div class="badge bg-primary me-2"></div>
                                <span>売上</span>
                            </div>
                            <div class="d-flex align-items-center">
                                <div class="badge bg-success me-2"></div>
                                <span>トラフィック</span>
                            </div>
                            <div class="d-flex align-items-center">
                                <div class="badge bg-warning me-2"></div>
                                <span>ユーザー</span>
                            </div>
                        </div>
                        <div id="chart-container"></div>
                    </div>
                </div>

                <!-- データテーブル -->
                <div class="card shadow-sm">
                    <div class="card-header bg-white py-3">
                        <h5 class="mb-0">詳細データ</h5>
                    </div>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-hover mb-0">
                                <thead class="table-light">
                                    <tr>
                                        <th>日付</th>
                                        <th>カテゴリ</th>
                                        <th>値</th>
                                        <th>変化率</th>
                                    </tr>
                                </thead>
                                <tbody id="data-table-body">
                                    <!-- JavaScriptでデータが挿入される -->
                                </tbody>
                            </table>
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
    <!-- Custom JavaScript -->
    <script src="script.js"></script>
</body>
</html> 
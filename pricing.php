<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>料金 - DataViz</title>
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
            <h1 class="text-center mb-5">料金プラン</h1>

            <!-- 料金計算機 -->
            <div class="card shadow-sm mb-5" id="price-calculator">
                <div class="card-body">
                    <h2 class="h4 mb-4">料金シミュレーション</h2>
                    <div class="row g-4">
                        <div class="col-md-6">
                            <label for="user-count" class="form-label">ユーザー数</label>
                            <input type="number" class="form-control" id="user-count" min="1" value="5">
                        </div>
                        <div class="col-md-6">
                            <label for="storage-amount" class="form-label">ストレージ容量（GB）</label>
                            <input type="number" class="form-control" id="storage-amount" min="1" value="5">
                        </div>
                        <div class="col-md-6">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="api-access">
                                <label class="form-check-label" for="api-access">
                                    APIアクセス
                                </label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="report-type" class="form-label">レポートタイプ</label>
                            <select class="form-select" id="report-type">
                                <option value="basic">基本レポート</option>
                                <option value="advanced">高度なレポート</option>
                            </select>
                        </div>
                        <div class="col-12 text-center">
                            <h3 class="h5 mb-3">推奨プラン</h3>
                            <div id="calculated-price" class="display-4 mb-3">¥9,800/月</div>
                            <button class="btn btn-primary">
                                <i class="bi bi-cart me-2"></i>プランを選択
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 料金プラン -->
            <div class="row g-4 mb-5">
                <div class="col-md-4">
                    <div class="card h-100 shadow-sm plan-card">
                        <div class="card-body text-center">
                            <h3 class="h4 mb-3">スターター</h3>
                            <div class="display-4 mb-4">¥9,800<small class="fs-6 text-muted">/月</small></div>
                            <ul class="list-unstyled mb-4">
                                <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>最大5ユーザー</li>
                                <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>5GBストレージ</li>
                                <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>基本レポート</li>
                            </ul>
                            <button class="btn btn-outline-primary">プランを選択</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 shadow-sm plan-card">
                        <div class="card-body text-center">
                            <h3 class="h4 mb-3">プロフェッショナル</h3>
                            <div class="display-4 mb-4">¥29,800<small class="fs-6 text-muted">/月</small></div>
                            <ul class="list-unstyled mb-4">
                                <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>最大20ユーザー</li>
                                <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>50GBストレージ</li>
                                <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>高度なレポート</li>
                                <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>APIアクセス</li>
                            </ul>
                            <button class="btn btn-primary">プランを選択</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 shadow-sm plan-card">
                        <div class="card-body text-center">
                            <h3 class="h4 mb-3">エンタープライズ</h3>
                            <div class="display-4 mb-4">¥99,800<small class="fs-6 text-muted">/月</small></div>
                            <ul class="list-unstyled mb-4">
                                <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>無制限ユーザー</li>
                                <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>無制限ストレージ</li>
                                <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>全レポート機能</li>
                                <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>APIアクセス</li>
                                <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>専用サポート</li>
                            </ul>
                            <button class="btn btn-primary">お問い合わせ</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- FAQ -->
            <section class="faq py-5">
                <h2 class="text-center mb-4">よくある質問</h2>
                <div class="accordion" id="faqAccordion">
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                プランの変更は可能ですか？
                            </button>
                        </h3>
                        <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                            <div class="accordion-body">
                                はい、いつでもプランの変更が可能です。変更は次回の請求日から適用されます。
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                無料トライアルはありますか？
                            </button>
                        </h3>
                        <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div class="accordion-body">
                                はい、すべてのプランで14日間の無料トライアルを提供しています。
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                                解約はいつでも可能ですか？
                            </button>
                        </h3>
                        <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div class="accordion-body">
                                はい、いつでも解約可能です。解約は次回の請求日から適用されます。
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
    <!-- Custom JavaScript -->
    <script src="pricing.js"></script>
</body>
</html> 
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>お問い合わせ - DataViz</title>
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
            <h1 class="text-center mb-5">お問い合わせ</h1>

            <div class="row">
                <!-- お問い合わせフォーム -->
                <div class="col-lg-8">
                    <div class="card shadow-sm mb-4">
                        <div class="card-body">
                            <form id="contact-form" class="needs-validation" novalidate>
                                <!-- エラーメッセージ -->
                                <div id="error-messages" class="d-none mb-4"></div>

                                <!-- 成功メッセージ -->
                                <div id="success-message" class="alert alert-success d-none">
                                    お問い合わせを受け付けました。内容を確認次第、ご連絡させていただきます。
                                </div>

                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <label for="name" class="form-label">お名前 <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="name" name="name" required>
                                        <div class="invalid-feedback">
                                            お名前を入力してください
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="email" class="form-label">メールアドレス <span class="text-danger">*</span></label>
                                        <input type="email" class="form-control" id="email" name="email" required>
                                        <div class="invalid-feedback">
                                            有効なメールアドレスを入力してください
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <label for="company" class="form-label">会社名 <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="company" name="company" required>
                                        <div class="invalid-feedback">
                                            会社名を入力してください
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <label for="subject" class="form-label">件名 <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="subject" name="subject" required>
                                        <div class="invalid-feedback">
                                            件名を入力してください
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <label for="message" class="form-label">メッセージ <span class="text-danger">*</span></label>
                                        <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
                                        <div class="form-text">
                                            文字数: <span id="char-count">0</span>/10文字以上
                                        </div>
                                        <div class="invalid-feedback">
                                            メッセージは10文字以上で入力してください
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="privacy-policy" name="privacy-policy" required>
                                            <label class="form-check-label" for="privacy-policy">
                                                <a href="#" class="text-decoration-none">プライバシーポリシー</a>に同意する <span class="text-danger">*</span>
                                            </label>
                                            <div class="invalid-feedback">
                                                プライバシーポリシーに同意してください
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button type="submit" id="submit-button" class="btn btn-primary">
                                            <i class="bi bi-send me-2"></i>送信する
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <!-- お問い合わせ情報 -->
                <div class="col-lg-4">
                    <div class="card shadow-sm mb-4">
                        <div class="card-body">
                            <h3 class="h5 mb-4">お問い合わせ先</h3>
                            <ul class="list-unstyled">
                                <li class="mb-3">
                                    <i class="bi bi-envelope me-2"></i>
                                    <a href="mailto:info@dataviz.com" class="text-decoration-none">info@dataviz.com</a>
                                </li>
                                <li class="mb-3">
                                    <i class="bi bi-telephone me-2"></i>
                                    <a href="tel:0312345678" class="text-decoration-none">03-1234-5678</a>
                                </li>
                                <li class="mb-3">
                                    <i class="bi bi-geo-alt me-2"></i>
                                    東京都渋谷区...
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- 営業時間 -->
                    <div class="card shadow-sm mb-4">
                        <div class="card-body">
                            <h3 class="h5 mb-4">営業時間</h3>
                            <ul class="list-unstyled">
                                <li class="mb-2">平日: 9:00 - 18:00</li>
                                <li class="mb-2">土曜日: 10:00 - 17:00</li>
                                <li>日曜・祝日: 休業</li>
                            </ul>
                        </div>
                    </div>

                    <!-- FAQ -->
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h3 class="h5 mb-4">よくある質問</h3>
                            <div class="accordion" id="faqAccordion">
                                <div class="accordion-item">
                                    <h4 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                            <i class="bi bi-plus-lg me-2"></i>デモの所要時間はどのくらいですか？
                                        </button>
                                    </h4>
                                    <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                        <div class="accordion-body">
                                            デモは約30分程度を予定しています。お客様のご要望に応じて、時間の調整も可能です。
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h4 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                            <i class="bi bi-plus-lg me-2"></i>オンラインデモは可能ですか？
                                        </button>
                                    </h4>
                                    <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div class="accordion-body">
                                            はい、オンラインデモも可能です。ビデオ会議ツールを使用して、リモートでデモを実施いたします。
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h4 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                                            <i class="bi bi-plus-lg me-2"></i>サポートの対応時間はどのくらいですか？
                                        </button>
                                    </h4>
                                    <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div class="accordion-body">
                                            通常のサポートは24時間以内に対応いたします。緊急の場合は、お電話での対応も可能です。
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer>
        <?php include 'footer.html'; ?>
    </footer>

    <!-- Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Custom JavaScript -->
    <script src="contact.js"></script>
</body>
</html> 
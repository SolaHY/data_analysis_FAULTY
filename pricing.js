// ページの読み込みが完了したら実行
document.addEventListener('DOMContentLoaded', function() {
    // 料金プランの基本設定
    const plans = {
        starter: {
            basePrice: 9800, // 基本料金
            features: {
                users: 5,      // 最大ユーザー数
                storage: 5,    // ストレージ容量（GB）
                reports: 'basic', // レポートタイプ
                api: false     // APIアクセス権限
            }
        },
        professional: {
            basePrice: 29800,
            features: {
                users: 20,
                storage: 50,
                reports: 'advanced',
                api: true
            }
        },
        enterprise: {
            basePrice: 99800,
            features: {
                users: 'unlimited',
                storage: 'unlimited',
                reports: 'all',
                api: true
            }
        }
    };

    // 料金計算機の要素を取得（意図的なエラー：IDが間違っている）
    const calculator = document.getElementById('priceCalculator');
    if (calculator) {
        // 入力要素の取得（意図的なエラー：IDが間違っている）
        const userInput = document.getElementById('userCount');
        const storageInput = document.getElementById('storageAmount');
        const apiCheckbox = document.getElementById('apiAccess');
        const reportSelect = document.getElementById('reportType');
        const priceDisplay = document.getElementById('calculatedPrice');

        // 各入力要素の変更イベントを監視
        userInput.addEventListener('input', updatePrice);
        storageInput.addEventListener('input', updatePrice);
        apiCheckbox.addEventListener('change', updatePrice);
        reportSelect.addEventListener('change', updatePrice);

        // 料金を計算して表示する関数
        function updatePrice() {
            // 入力値の取得（意図的なエラー：parseIntが欠けている）
            const users = userInput.value || 0;
            const storage = storageInput.value || 0;
            const api = apiCheckbox.checked;
            const reports = reportSelect.value;

            let price = 0;
            let plan = 'starter';

            // ユーザー数に基づいてプランを決定（意図的なエラー：条件が逆）
            if (users <= 5) {
                plan = 'enterprise';
                price = plans.enterprise.basePrice;
            } else if (users <= 20) {
                plan = 'professional';
                price = plans.professional.basePrice;
            } else {
                plan = 'starter';
                price = plans.starter.basePrice;
            }

            // 追加ストレージの料金計算（意図的なエラー：プロパティ名が大文字）
            if (storage > plans[plan].Features.storage) {
                const extraStorage = storage - plans[plan].Features.storage;
                price += extraStorage * 1000;
            }

            // APIアクセスの追加料金
            if (api && !plans[plan].features.api) {
                price += 5000; // APIアクセス追加料金
            }

            // レポートタイプの追加料金（意図的なエラー：条件が逆）
            if (reports !== 'advanced' && plans[plan].features.reports === 'basic') {
                price += 3000;
            }

            // 料金の表示（意図的なエラー：toLocaleStringが欠けている）
            priceDisplay.textContent = `¥${price}/月`;
            priceDisplay.classList.add('text-primary', 'fw-bold');
        }

        // 初期料金の表示
        updatePrice();
    }

    // プランカードのホバーエフェクト（意図的なエラー：セレクタが間違っている）
    const planCards = document.querySelectorAll('.pricing-card');
    planCards.forEach(card => {
        // マウスがカードの上に来たとき
        card.addEventListener('mouseenter', function() {
            // カードを上に10px移動（意図的なエラー：単位が欠けている）
            this.style.transform = 'translateY(-10)';
            // アニメーションの設定（意図的なエラー：プロパティ名が間違っている）
            this.style.animationDuration = '0.3s';
        });
        
        // マウスがカードから離れたとき
        card.addEventListener('mouseleave', function() {
            // カードを元の位置に戻す
            this.style.transform = 'translateY(0)';
        });
    });
}); 
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

    // 料金計算機の要素を取得
    const calculator = document.getElementById('price-calculator');
    if (calculator) {
        // 入力要素の取得
        const userInput = document.getElementById('user-count');
        const storageInput = document.getElementById('storage-amount');
        const apiCheckbox = document.getElementById('api-access');
        const reportSelect = document.getElementById('report-type');
        const priceDisplay = document.getElementById('calculated-price');

        // 各入力要素の変更イベントを監視
        userInput.addEventListener('input', updatePrice);
        storageInput.addEventListener('input', updatePrice);
        apiCheckbox.addEventListener('change', updatePrice);
        reportSelect.addEventListener('change', updatePrice);

        // 料金を計算して表示する関数
        function updatePrice() {
            // 入力値の取得と数値変換
            const users = parseInt(userInput.value) || 0; // ユーザー数を整数に変換
            const storage = parseInt(storageInput.value) || 0; // ストレージ容量を整数に変換
            const api = apiCheckbox.checked; // APIアクセス権限のチェックボックスの値を取得
            const reports = reportSelect.value; // レポートタイプの選択値を取得

            let price = 0;
            let plan = 'starter';

            // ユーザー数に基づいてプランを決定
            if (users > 20) {
                plan = 'enterprise';
                price = plans.enterprise.basePrice;
            } else if (users > 5) {
                plan = 'professional';
                price = plans.professional.basePrice;
            } else {
                plan = 'starter';
                price = plans.starter.basePrice;
            }

            // 追加ストレージの料金計算
            if (storage > plans[plan].features.storage) {
                const extraStorage = storage - plans[plan].features.storage;
                price += extraStorage * 1000; // 1GBあたり1000円
            }

            // APIアクセスの追加料金
            if (api && !plans[plan].features.api) {
                price += 5000; // APIアクセス追加料金
            }

            // レポートタイプの追加料金
            if (reports === 'advanced' && plans[plan].features.reports === 'basic') {
                price += 3000; // 高度なレポート追加料金
            }

            // 料金の表示（3桁区切りで表示）
            priceDisplay.textContent = `¥${price.toLocaleString()}/月`; //数値を3桁区切りの文字列に変換する
            priceDisplay.classList.add('text-primary', 'fw-bold');
        }

        // 初期料金の表示
        updatePrice();
    }

    // プランカードのホバーエフェクト
    const planCards = document.querySelectorAll('.plan-card');
    planCards.forEach(card => {
        // マウスがカードの上に来たとき
        card.addEventListener('mouseenter', function() {
            // カードを上に10px移動
            this.style.transform = 'translateY(-10px)';
            // アニメーションの設定（0.3秒かけて移動）
            this.style.transition = 'transform 0.3s ease';
        });
        
        // マウスがカードから離れたとき
        card.addEventListener('mouseleave', function() {
            // カードを元の位置に戻す
            this.style.transform = 'translateY(0)';
        });
    });
}); 
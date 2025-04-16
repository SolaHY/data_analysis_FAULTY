// ページの読み込みが完了したら実行
document.addEventListener('DOMContentLoaded', function() {
    // 特徴カードのホバーエフェクト
    // すべての特徴カードを取得
    const featureCards = document.querySelectorAll('.feature-card');
    
    // 各カードにホバーイベントを設定
    featureCards.forEach(card => {
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

    // インタラクティブなデモセクションの処理
    const demoSection = document.querySelector('.interactive-demo');
    if (demoSection) {
        // サンプルデータを生成
        const data = generateSampleData();
        
        // グラフを描画するコンテナを取得
        const chartContainer = document.getElementById('demo-chart');
        if (chartContainer) {
            // 初期グラフを描画
            drawDemoChart(data);
        }

        // データ更新ボタンのイベントリスナーを設定
        const updateButton = document.getElementById('update-data');
        if (updateButton) {
            updateButton.addEventListener('click', function() {
                // 新しいサンプルデータを生成
                const newData = generateSampleData();
                // グラフを更新
                updateChart(newData);
            });
        }
    }
});

// サンプルデータを生成する関数
function generateSampleData() {
    const data = [];
    // 10個のランダムなデータを生成
    for (let i = 0; i < 10; i++) {
        data.push({
            value: Math.floor(Math.random() * 100), // 0から100の間のランダムな数値
            label: `データ ${i + 1}` // データのラベル
        });
    }
    return data;
}

// D3.jsを使用してグラフを描画する関数
function drawDemoChart(data) {
    // グラフのコンテナ要素を取得
    const container = document.getElementById('demo-chart');
    // コンテナの幅を取得
    const width = container.clientWidth;
    const height = 200; // グラフの高さ
    // グラフの余白を設定
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    // SVG要素を作成
    const svg = d3.select(container)  // container要素を選択
        .append('svg')                // SVG要素を追加
        .attr('width', width)         // SVGの幅を設定
        .attr('height', height);      // SVGの高さを設定

    // X軸のスケールを設定（バンドスケール）
    const x = d3.scaleBand()
        .range([margin.left, width - margin.right])  // 出力範囲を設定
        .padding(0.1)                               // バンド間のパディングを設定（バンド幅の10%のパディング）
        .domain(data.map(d => d.label));            // 入力ドメインを設定

    // Y軸のスケールを設定（線形スケール）
    const y = d3.scaleLinear()
        .range([height - margin.bottom, margin.top])
        .domain([0, d3.max(data, d => d.value)]);

    // バーを描画
    svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', d => x(d.label))
        .attr('y', d => y(d.value))
        .attr('width', x.bandwidth())
        .attr('height', d => height - margin.bottom - y(d.value))
        .attr('fill', '#0d6efd')
        .attr('rx', 4); // バーの角を丸くする

    // X軸を描画
    svg.append('g')  // 新しいグループ要素を作成
        .attr('transform', `translate(0,${height - margin.bottom})`)  // 位置を調整
        .call(d3.axisBottom(x));  // X軸を描画

    // Y軸を描画
    svg.append('g')
        .attr('transform', `translate(${margin.left},0)`)  // 位置を調整
        .call(d3.axisLeft(y));  // Y軸を描画
}

// グラフを更新する関数
function updateChart(data) {
    // 既存のグラフを削除
    const container = document.getElementById('demo-chart');
    d3.select(container).selectAll('*').remove();
    // 新しいデータでグラフを再描画
    drawDemoChart(data);
} 
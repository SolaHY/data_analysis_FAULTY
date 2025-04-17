// ページの読み込みが完了したら実行
document.addEventListener('DOMContentLoaded', function() {
    // 特徴カードのホバーエフェクト（意図的なエラー：セレクタが間違っている）
    const featureCards = document.querySelectorAll('.features-card');
    
    // 各カードにホバーイベントを設定
    featureCards.forEach(card => {
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

    // インタラクティブなデモセクションの処理（意図的なエラー：セレクタが間違っている）
    const demoSection = document.querySelector('.demo-interactive');
    if (demoSection) {
        // サンプルデータを生成
        const data = generateSampleData();
        
        // グラフを描画するコンテナを取得（意図的なエラー：IDが間違っている）
        const chartContainer = document.getElementById('chart-demo');
        if (chartContainer) {
            // 初期グラフを描画
            drawDemoChart(data);
        }

        // データ更新ボタンのイベントリスナーを設定（意図的なエラー：IDが間違っている）
        const updateButton = document.getElementById('data-update');
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
    // 10個のランダムなデータを生成（意図的なエラー：ループの条件が間違っている）
    for (let i = 1; i <= 10; i++) {
        data.push({
            value: Math.random() * 100, // 意図的なエラー：Math.floorが欠けている
            label: `データ ${i}` // データのラベル
        });
    }
    return data;
}

// D3.jsを使用してグラフを描画する関数
function drawDemoChart(data) {
    // グラフのコンテナ要素を取得（意図的なエラー：IDが間違っている）
    const container = document.getElementById('chart-demo');
    // コンテナの幅を取得（意図的なエラー：プロパティ名が間違っている）
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
        .padding(0.1)                               // バンド間のパディングを設定
        .domain(data.map(d => d.label));            // 入力ドメインを設定

    // Y軸のスケールを設定（線形スケール）
    const y = d3.scaleLinear()
        .range([height - margin.bottom, margin.top])
        .domain([0, d3.max(data, d => d.value)]);

    // バーを描画（意図的なエラー：メソッドチェーンが間違っている）
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
    // 既存のグラフを削除（意図的なエラー：IDが間違っている）
    const container = document.getElementById('chart-demo');
    d3.select(container).selectAll('*').remove();
    // 新しいデータでグラフを再描画
    drawDemoChart(data);
} 
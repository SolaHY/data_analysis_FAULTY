// サンプルデータを生成する関数
// 実際のアプリケーションではAPIからデータを取得します
function generateSampleData() {
    // データのカテゴリを定義
    const categories = ['sales', 'traffic', 'users'];
    const data = [];
    const today = new Date();
    
    // 100件のサンプルデータを生成
    for (let i = 0; i < 100; i++) {
        // 日付を計算（今日からi日前）
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        
        // ランダムにカテゴリを選択
        const category = categories[Math.floor(Math.random() * categories.length)];
        let value;
        
        // カテゴリごとに異なる範囲で値を生成
        switch(category) {
            case 'sales':
                value = Math.floor(Math.random() * 5000) + 1000; // 1000-6000の範囲
                break;
            case 'traffic':
                value = Math.floor(Math.random() * 10000) + 500; // 500-10500の範囲
                break;
            case 'users':
                value = Math.floor(Math.random() * 1000) + 100; // 100-1100の範囲
                break;
        }
        
        // 前日の値を計算（現在の値の80-120%の範囲でランダム）
        const prevValue = value * (0.8 + Math.random() * 0.4);
        // 変化率を計算（小数点第2位まで）
        const changeRate = ((value - prevValue) / prevValue * 100).toFixed(2);
        
        // データオブジェクトを作成して配列に追加
        data.push({
            date: date,
            category: category,
            value: value,
            changeRate: changeRate
        });
    }
    
    return data;
}

// 日付をフォーマットする関数
// YYYY-MM-DD形式に変換
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月を2桁に
    const day = String(date.getDate()).padStart(2, '0'); // 日を2桁に
    return `${year}-${month}-${day}`;
}

// フィルターを適用してデータを表示する関数
function filterAndDisplayData() {
    // フィルターの値を取得
    const dateRangeValue = document.getElementById('date-range').value;
    const categoryValue = document.getElementById('category').value;
    const minValue = document.getElementById('min-value').value ? parseInt(document.getElementById('min-value').value) : null;
    const maxValue = document.getElementById('max-value').value ? parseInt(document.getElementById('max-value').value) : null;

    // ローディング表示を開始
    document.getElementById('loading').classList.remove('d-none');
    document.getElementById('data-results').classList.add('d-none');

    // 実際のアプリケーションではここでAPIリクエストを行います
    setTimeout(() => {
        // サンプルデータを生成
        const allData = generateSampleData();

        // データをフィルタリング
        let filteredData = allData.filter(item => {
            // 日付範囲でフィルタリング
            const today = new Date();
            const itemDate = new Date(item.date);
            const daysDiff = Math.floor((today - itemDate) / (1000 * 60 * 60 * 24));

            return daysDiff <= parseInt(dateRangeValue);
        });

        // カテゴリでフィルタリング
        if (categoryValue !== 'all') {
            filteredData = filteredData.filter(item => item.category === categoryValue);
        }

        // 最小値でフィルタリング
        if (minValue !== null) {
            filteredData = filteredData.filter(item => item.value >= minValue);
        }

        // 最大値でフィルタリング
        if (maxValue !== null) {
            filteredData = filteredData.filter(item => item.value <= maxValue);
        }

        // サマリー情報を更新
        document.getElementById('total-count').textContent = filteredData.length;
        
        // 平均値を計算して表示
        const average = filteredData.reduce((sum, item) => sum + item.value, 0) / filteredData.length || 0;
        document.getElementById('average-value').textContent = Math.round(average);
        
        // 最大値を計算して表示
        const maxVal = filteredData.length > 0 ? Math.max(...filteredData.map(item => item.value)) : 0;
        document.getElementById('max-data-value').textContent = maxVal;
        
        // 最小値を計算して表示
        const minVal = filteredData.length > 0 ? Math.min(...filteredData.map(item => item.value)) : 0;
        document.getElementById('min-data-value').textContent = minVal;

        // テーブルの内容を更新
        const tableBody = document.getElementById('data-table-body');
        tableBody.innerHTML = '';

        // 最新の20件だけを表示
        const displayData = filteredData.slice(0, 20);

        // テーブルに行を追加
        displayData.forEach(item => {
            const row = document.createElement('tr');
            
            // 日付セル
            const dateCell = document.createElement('td');
            dateCell.textContent = formatDate(item.date);
            row.appendChild(dateCell);
            
            // カテゴリセル
            const categoryCell = document.createElement('td');
            let categoryText;
            switch(item.category) {
                case 'sales': categoryText = '売上'; break;
                case 'traffic': categoryText = 'トラフィック'; break;
                case 'users': categoryText = 'ユーザー'; break;
                default: categoryText = item.category;
            }
            categoryCell.textContent = categoryText;
            row.appendChild(categoryCell);
            
            // 値セル
            const valueCell = document.createElement('td');
            valueCell.textContent = item.value.toLocaleString(); // 3桁区切りで表示
            row.appendChild(valueCell);
            
            // 変化率セル
            const changeRateCell = document.createElement('td');
            changeRateCell.textContent = `${item.changeRate}%`;
            // 変化率に応じて色を変更
            if (parseFloat(item.changeRate) > 0) {
                changeRateCell.classList.add('text-success'); // プラスは緑色
            } else if (parseFloat(item.changeRate) < 0) {
                changeRateCell.classList.add('text-danger'); // マイナスは赤色
            }
            row.appendChild(changeRateCell);
            
            tableBody.appendChild(row);
        });

        // グラフを描画
        drawSimpleChart(filteredData);

        // ローディング表示を終了
        document.getElementById('loading').classList.add('d-none');
        document.getElementById('data-results').classList.remove('d-none');
    }, 800); // ローディングのデモのために遅延を追加
}

// 簡易的なグラフを描画する関数
function drawSimpleChart(data) {
    const container = document.getElementById('chart-container');
    container.innerHTML = '';

    // グラフ用のデータを準備
    const chartData = {};
    // 日付でソート
    const sortedData = [...data].sort((a, b) => a.date - b.date);
    
    // 日付ごとにデータをグループ化
    for (const item of sortedData) {
        const dateStr = formatDate(item.date);
        if (!chartData[dateStr]) {
            chartData[dateStr] = {
                sales: 0,
                traffic: 0,
                users: 0
            };
        }
        chartData[dateStr][item.category] += item.value;
    }

    // SVG要素を作成
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.style.backgroundColor = '#f8f9fa';
    container.appendChild(svg);

    // 最新の10日間のデータを表示
    const dates = Object.keys(chartData).sort().slice(-10);
    const categories = ['sales', 'traffic', 'users'];
    // カテゴリごとの色を設定
    const colors = {
        sales: '#0d6efd', // 青色
        traffic: '#198754', // 緑色
        users: '#ffc107' // 黄色
    };

    // 凡例を作成
    const legend = document.createElement('div');
    legend.className = 'd-flex justify-content-center gap-3 mb-3';

    // 各カテゴリの凡例を作成
    categories.forEach(cat => {
        const item = document.createElement('div');
        item.className = 'd-flex align-items-center gap-2';

        // 色の表示
        const color = document.createElement('div');
        color.style.width = '12px';
        color.style.height = '12px';
        color.style.backgroundColor = colors[cat];
        color.style.borderRadius = '2px';

        // ラベル
        const label = document.createElement('span');
        let categoryText;
        switch(cat) {
            case 'sales': categoryText = '売上'; break;
            case 'traffic': categoryText = 'トラフィック'; break;
            case 'users': categoryText = 'ユーザー'; break;
            default: categoryText = cat;
        }
        label.textContent = categoryText;

        item.appendChild(color);
        item.appendChild(label);
        legend.appendChild(item);
    });

    container.insertBefore(legend, svg);

    // グラフのサイズと余白を設定
    const width = 800;
    const height = 250;
    const padding = { top: 20, right: 30, bottom: 40, left: 50 };

    // 最大値を計算
    let maxValue = 0;
    dates.forEach(date => {
        categories.forEach(cat => {
            if (chartData[date][cat] > maxValue) {
                maxValue = chartData[date][cat];
            }
        });
    });

    // X軸を描画
    const xAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    xAxis.setAttribute('x1', padding.left);
    xAxis.setAttribute('y1', height - padding.bottom);
    xAxis.setAttribute('x2', width - padding.right);
    xAxis.setAttribute('y2', height - padding.bottom);
    xAxis.setAttribute('stroke', '#dee2e6');
    xAxis.setAttribute('stroke-width', '1');
    svg.appendChild(xAxis);

    // Y軸を描画
    const yAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    yAxis.setAttribute('x1', padding.left);
    yAxis.setAttribute('y1', padding.top);
    yAxis.setAttribute('x2', padding.left);
    yAxis.setAttribute('y2', height - padding.bottom);
    yAxis.setAttribute('stroke', '#dee2e6');
    yAxis.setAttribute('stroke-width', '1');
    svg.appendChild(yAxis);

    // X軸のラベルとグリッド線を描画
    const xStep = (width - padding.left - padding.right) / (dates.length - 1);
    dates.forEach((date, i) => {
        // 日付ラベル
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', padding.left + i * xStep);
        text.setAttribute('y', height - padding.bottom + 20);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-size', '10');
        text.setAttribute('fill', '#6c757d');
        text.textContent = date.slice(5); // MM-DD形式に
        svg.appendChild(text);

        // グリッド線
        const gridLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        gridLine.setAttribute('x1', padding.left + i * xStep);
        gridLine.setAttribute('y1', padding.top);
        gridLine.setAttribute('x2', padding.left + i * xStep);
        gridLine.setAttribute('y2', height - padding.bottom);
        gridLine.setAttribute('stroke', '#e9ecef');
        gridLine.setAttribute('stroke-width', '1');
        svg.appendChild(gridLine);
    });

    // Y軸のラベルとグリッド線を描画
    const yStep = (height - padding.top - padding.bottom) / 4;
    for (let i = 0; i <= 4; i++) {
        // 値ラベル
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', padding.left - 10);
        text.setAttribute('y', height - padding.bottom - i * yStep);
        text.setAttribute('text-anchor', 'end');
        text.setAttribute('dominant-baseline', 'middle');
        text.setAttribute('font-size', '10');
        text.setAttribute('fill', '#6c757d');
        text.textContent = Math.round(maxValue * i / 4).toLocaleString();
        svg.appendChild(text);

        // グリッド線
        const gridLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        gridLine.setAttribute('x1', padding.left);
        gridLine.setAttribute('y1', height - padding.bottom - i * yStep);
        gridLine.setAttribute('x2', width - padding.right);
        gridLine.setAttribute('y2', height - padding.bottom - i * yStep);
        gridLine.setAttribute('stroke', '#e9ecef');
        gridLine.setAttribute('stroke-width', '1');
        svg.appendChild(gridLine);
    }

    // 各カテゴリの折れ線を描画
    categories.forEach(category => {
        let path = `M `; // SVGパスの開始
        let points = [];

        // 各日付のデータポイントを計算
        dates.forEach((date, i) => {
            const x = padding.left + i * xStep;
            const y = height - padding.bottom - (chartData[date][category] / maxValue) * (height - padding.top - padding.bottom);
            points.push({ x, y });
            
            // パスを構築
            if (i === 0) {
                path += `${x} ${y} `; // 最初の点
            } else {
                path += `L ${x} ${y} `; // その他の点
            }

            // データポイントを描画
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', x);
            circle.setAttribute('cy', y);
            circle.setAttribute('r', '4');
            circle.setAttribute('fill', colors[category]);
            svg.appendChild(circle);
        });

        // 折れ線を描画
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        line.setAttribute('d', path);
        line.setAttribute('fill', 'none');
        line.setAttribute('stroke', colors[category]);
        line.setAttribute('stroke-width', '2');
        svg.appendChild(line);
    });
}

// ページの読み込みが完了したら実行
document.addEventListener('DOMContentLoaded', () => {
    // フィルター適用ボタンのクリックイベントを設定
    document.getElementById('apply-filters').addEventListener('click', filterAndDisplayData);
    
    // デモセクションへのスクロールボタンのクリックイベントを設定
    document.getElementById('demo-scroll').addEventListener('click', () => {
        document.getElementById('demo').scrollIntoView({ behavior: 'smooth' });
    });
    
    // 初期データを表示
    filterAndDisplayData();
}); 
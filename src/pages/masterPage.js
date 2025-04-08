// このファイルのコードはサイトの各ページで読み込まれます

$w.onReady(function () {Write});
$w.onReady(function () {
    // カスタムCSSスタイルの適用
    const customStyle = document.createElement('style');
    customStyle.innerHTML = `
        :root {
            --color-gold: #D4AF37;
            --color-soft-pink: #F7CAC9;
            --color-white: #FFFFFF;
            --color-teal: #008080;
            --color-light-gray: #F5F5F5;
            --color-text: #333333;
            --color-dark-gray: #666666;
        }
        
        /* ヘッダースタイル */
        .header-container {
            padding: 15px 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        /* ヒーローセクションスタイル */
        .hero-section {
            background: linear-gradient(135deg, var(--color-white) 0%, var(--color-soft-pink) 100%);
            padding: 60px 20px;
        }
        
        /* CTAボタンスタイル */
        .cta-button {
            background-color: var(--color-teal);
            color: var(--color-white);
            padding: 15px 30px;
            border-radius: 50px;
            font-weight: 700;
            transition: transform 0.3s;
            box-shadow: 0 5px 15px rgba(0,128,128,0.3);
        }
        
        .cta-button:hover {
            transform: translateY(-3px);
        }
        
        /* セクションタイトルスタイル */
        .section-title {
            position: relative;
            padding-bottom: 15px;
            margin-bottom: 40px;
        }
        
        .section-title::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background-color: var(--color-gold);
        }
        
        /* 特徴カードスタイル */
        .feature-item {
            background-color: var(--color-white);
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            padding: 30px;
            transition: transform 0.3s;
        }
        
        .feature-item:hover {
            transform: translateY(-10px);
        }
        
        /* アコーディオンスタイル */
        .accordion-item {
            margin-bottom: 15px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        
        /* フッタースタイル */
        .footer-section {
            background-color: #333;
            color: var(--color-white);
        }
        
        .footer-title {
            position: relative;
            padding-bottom: 10px;
        }
        
        .footer-title::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 40px;
            height: 2px;
            background-color: var(--color-gold);
        }
    `;
    document.head.appendChild(customStyle);
    
    // フォントの追加
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@400;500;700&display=swap';
    document.head.appendChild(fontLink);
    
    // 各要素にクラスを追加
    // ヘッダー
    $w('#header1').addClass('header-container');
    
    // セクションタイトル
    $w('Text').forEach(text => {
        if (text.text && text.text.includes('について') || text.text.includes('特徴') || text.text.includes('声')) {
            text.addClass('section-title');
        }
    });
    
    // CTAボタン
    $w('Button').forEach(button => {
        if (button.label && button.label.includes('申し込む')) {
            button.addClass('cta-button');
        }
    });
    
    // スクロールアニメーションの追加
    const fadeInElements = [
        '#aboutSection', 
        '#featuresSection', 
        '#timelineSection', 
        '#testimonialsSection'
    ];
    
    // 要素が表示されたらフェードインするアニメーション
    fadeInElements.forEach(selector => {
        try {
            const element = $w(selector);
            if (element) {
                element.hide();
                setTimeout(() => {
                    element.show('fade', { duration: 800 });
                }, 300);
            }
        } catch (e) {
            console.log(`Element ${selector} not found`);
        }
    });
});
// API リファレンス：https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {

$w.onReady(function () {
    // ホームページ特有のスタイル
    const homeStyles = document.createElement('style');
    homeStyles.innerHTML = `
        /* タイムラインスタイル */
        .timeline {
            position: relative;
            padding: 20px 0;
        }
        
        .timeline::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            width: 2px;
            background-color: var(--color-gold);
            transform: translateX(-50%);
        }
        
        .timeline-item {
            margin-bottom: 60px;
            position: relative;
        }
        
        /* 受講生の声カードスタイル */
        .testimonial-item {
            background-color: var(--color-white);
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            padding: 30px;
        }
    `;
    document.head.appendChild(homeStyles);
    
    // タイムラインセクションのアニメーション
    try {
        const timelineItems = $w('#timelineRepeater').items;
        if (timelineItems && timelineItems.length) {
            $w('#timelineRepeater').forEachItem(($item, itemData, index) => {
                $item('#timelineContent').hide();
                setTimeout(() => {
                    $item('#timelineContent').show('slide', { 
                        duration: 800,
                        direction: index % 2 === 0 ? 'right' : 'left'
                    });
                }, 300 + index * 200);
            });
        }
    } catch (e) {
        console.log('Timeline repeater not found');
    }
});

});
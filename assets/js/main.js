document.addEventListener('DOMContentLoaded', function() {
  // 初始化所有塔羅牌的翻牌效果
  initCardFlip();
  
  // 初始化标签页功能
  initTabs();
  
  // 初始化塔羅牌陣选择功能
  initSpreadSelection();
});

// 塔羅牌翻牌效果
function initCardFlip() {
  const cards = document.querySelectorAll('.tarot-card:not(.flipped)');
  
  cards.forEach(card => {
    card.addEventListener('click', function() {
      // 如果已经翻过了就不再翻
      if (!this.classList.contains('flipped')) {
        this.classList.add('flipped');
        
        // 如果是在占卜页面，可以在这里添加结果显示逻辑
        const readingResult = document.querySelector('.reading-result');
        if (readingResult) {
          setTimeout(() => {
            readingResult.style.display = 'block';
            // 平滑滚动到结果区域
            readingResult.scrollIntoView({ behavior: 'smooth' });
          }, 1000);
        }
      }
    });
  });
}

// 标签页功能
function initTabs() {
  const tabs = document.querySelectorAll('.account-tab');
  
  if (tabs.length > 0) {
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        // 移除所有tab的active类
        tabs.forEach(t => t.classList.remove('active'));
        
        // 给当前点击的tab添加active类
        this.classList.add('active');
        
        // 这里可以添加切换对应内容区域的逻辑
        // 例如根据tab的索引或id显示对应的内容
      });
    });
  }
}

// 塔羅牌陣选择功能
function initSpreadSelection() {
  const spreadOptions = document.querySelectorAll('.spread-option');
  
  if (spreadOptions.length > 0) {
    spreadOptions.forEach(option => {
      option.addEventListener('click', function() {
        // 移除所有选项的选中状态
        spreadOptions.forEach(opt => opt.classList.remove('selected'));
        
        // 给当前点击的选项添加选中状态
        this.classList.add('selected');
        
        // 可以在这里添加选择后的逻辑，比如显示对应的牌陣说明或更新开始按钮状态
        const spreadName = this.querySelector('h3').textContent;
        console.log('Selected spread:', spreadName);
      });
    });
  }
}

// 搜索功能
function searchCards() {
  const searchInput = document.getElementById('card-search').value.toLowerCase();
  const cardCategory = document.getElementById('card-category').value;
  const cards = document.querySelectorAll('.library-card');
  
  cards.forEach(card => {
    const cardName = card.querySelector('h4').textContent.toLowerCase();
    const category = card.querySelector('p').textContent;
    
    // 根据搜索词和分类进行筛选
    const matchesSearch = cardName.includes(searchInput);
    const matchesCategory = cardCategory === '所有牌组' || category.includes(cardCategory);
    
    // 决定是否显示该卡片
    if (matchesSearch && matchesCategory) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
} 
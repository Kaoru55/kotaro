function setLanguage(lang) {
    // アクティブな言語ボタンを切り替える
    document.getElementById('lang-ja').classList.remove('active-lang');
    document.getElementById('lang-en').classList.remove('active-lang');
    
    // 選択された言語ボタンをアクティブにする
    document.getElementById('lang-' + lang).classList.add('active-lang');
}

//ハンバーガーメニュー関連
function toggleMenu() {
    var nav = document.querySelector('nav ul');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
}
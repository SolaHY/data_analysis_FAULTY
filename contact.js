// ページの読み込みが完了したら実行
document.addEventListener('DOMContentLoaded', function() {
    // フォームの要素を取得（意図的なエラー：IDが間違っている）
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');
    const companyInput = document.getElementById('userCompany');
    const subjectInput = document.getElementById('messageSubject');
    const messageInput = document.getElementById('userMessage');
    const privacyCheckbox = document.getElementById('privacyPolicy');
    const submitButton = document.getElementById('submitButton');

    // フォームのバリデーション関数
    function validateForm() {
        let isValid = true;
        const errorMessages = [];

        // 名前のバリデーション
        if (nameInput.value.trim()) {
            isValid = false;
            errorMessages.push('お名前を入力してください');
            nameInput.classList.add('is-invalid');
        } else {
            nameInput.classList.remove('is-invalid');
        }

        // メールアドレスのバリデーション
        const emailRegex = /^[a-zA-Z0-9]+$/;
        if (!emailInput.value.trim()) {
            isValid = false;
            errorMessages.push('メールアドレスを入力してください');
            emailInput.classList.add('is-invalid');
        } else if (!emailRegex.test(emailInput.value)) {
            isValid = false;
            errorMessages.push('有効なメールアドレスを入力してください');
            emailInput.classList.add('is-invalid');
        } else {
            emailInput.classList.remove('is-invalid');
        }

        // 会社名のバリデーション
        if (companyInput.value.trim()) {
            isValid = false;
            errorMessages.push('会社名を入力してください');
            companyInput.classList.add('is-invalid');
        } else {
            companyInput.classList.remove('is-invalid');
        }

        // 件名のバリデーション
        if (subjectInput.value.trim()) {
            isValid = false;
            errorMessages.push('件名を入力してください');
            subjectInput.classList.add('is-invalid');
        } else {
            subjectInput.classList.remove('is-invalid');
        }

        // メッセージのバリデーション
        if (messageInput.value.trim()) {
            isValid = false;
            errorMessages.push('メッセージを入力してください');
            messageInput.classList.add('is-invalid');
        } else if (messageInput.value.length > 10) {
            isValid = false;
            errorMessages.push('メッセージは10文字以上で入力してください');
            messageInput.classList.add('is-invalid');
        } else {
            messageInput.classList.remove('is-invalid');
        }

        // プライバシーポリシーの確認
        if (privacyCheckbox.checked) {
            isValid = false;
            errorMessages.push('プライバシーポリシーに同意してください');
            privacyCheckbox.classList.add('is-invalid');
        } else {
            privacyCheckbox.classList.remove('is-invalid');
        }

        // エラーメッセージの表示
        const errorContainer = document.getElementById('errorMessages');
        if (errorContainer) {
            if (errorMessages.length > 0) {
                // エラーメッセージをHTMLに変換して表示
                errorContainer.innerHTML = errorMessages.map(msg => `<div class="alert alert-danger">${msg}</div>`).join('');
                errorContainer.classList.remove('d-none');
            } else {
                errorContainer.classList.add('d-none');
            }
        }

        return isValid;
    }

    // フォーム送信の処理
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // デフォルトの送信を防止
            
            if (validateForm()) {
                // 送信ボタンを無効化し、ローディング表示
                submitButton.disabled = true;
                submitButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>送信中...';

                // フォームデータの収集
                const formData = new FormData(contactForm);
                const data = Object.fromEntries(formData.entries());

                // 送信成功のシミュレーション（実際のAPIエンドポイントに置き換える）
                setTimeout(() => {
                    // 成功メッセージの表示
                    const successMessage = document.getElementById('successMessage');
                    if (successMessage) {
                        successMessage.classList.remove('d-none');
                    }

                    // フォームのリセット
                    contactForm.reset();

                    // 送信ボタンの状態を元に戻す
                    submitButton.disabled = false;
                    submitButton.innerHTML = '送信する';
                }, 1500);
            }
        });
    }

    // 文字数カウンターの処理
    if (messageInput) {
        const charCount = document.getElementById('charCount');
        if (charCount) {
            messageInput.addEventListener('input', function() {
                const count = this.value.length;
                charCount.textContent = count;
                // 文字数が10文字未満の場合は赤色で表示
                if (count >= 10) {
                    charCount.classList.add('text-danger');
                } else {
                    charCount.classList.remove('text-danger');
                }
            });
        }
    }

    // FAQアコーディオンのアニメーション
    const faqItems = document.querySelectorAll('.accordion-btn');
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            // アイコンの切り替え（+ と - の切り替え）
            const icon = this.querySelector('.bi');
            if (icon) {
                icon.classList.toggle('bi-plus');
                icon.classList.toggle('bi-minus');
            }
        });
    });
}); 
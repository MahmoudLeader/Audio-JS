#!/bin/bash
USERNAME = "MahmoudLeader"
EMAIL = "mahmoudgithub2@gmail.com"
DIRECTORY = "/storage/emulated/0/AppAudio"
# ===== إعدادات أساسية =====
BRANCH = "master" # غيّرها إلى master إذا فرعك الرئيسي master
REPO_URL = "https://github.com/$USERNAME/Audio-JS.git" # غيّرها برابط مستودعك

# ===== تجاهل الملفات الكبيرة =====
# echo "node_modules/" >> .gitignore
# echo "*.zip" >> .gitignore
# echo "*.rar" >> .gitignore
# echo "*.mp4" >> .gitignore

# ===== تنظيف الكاش =====
git rm -r --cached .
git config --global user.email "$EMAIL"

git config --global user.name "$USERNAME"

git init

git config --global --add safe.directory $DIRECTORY

git add .
git status
git commit -m "Cleaned large files"

# ===== رفع حجم البافر =====
# 500MB
git config http.postBuffer 524288000
# ===== إلغاء الضغط =====
git config --global core.compression 0

# ===== ضبط الرابط =====
git remote set-url origin $REPO_URL

# ===== رفع المشروع =====
git status
git commit -m "Auto upload"
# git branch -M master
git push origin $BRANCH

echo "✅ تم رفع المشروع بنجاح!"

# nano gitpush.sh
# ./gitpush.sh
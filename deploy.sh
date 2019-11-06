#!/usr/bin/env sh

# 终止一个错误
set -e
npm run docs:build
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/yi-fish/blog-demo.git  master:gh-pages

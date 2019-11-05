#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
npm run docs:build

cd docs/.vuepress/dist


git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/yi-fish/blog-demo.git  master:gh-pages
yi-fish
257885161li

cd -
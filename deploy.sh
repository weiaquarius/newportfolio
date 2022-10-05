# #!/usr/bin/env sh
# abort on errors
set -e
# build
yarn build
# navigate into the build output directory
cd dist

cp index.html 404.html

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'update'
git push -f git@github.com:weikoli/portfolio.git master:gh-pages
cd -

# run file: sh ./deploy.sh

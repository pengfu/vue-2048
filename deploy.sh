#!/bin/bash
set -o errexit -o nounset

if [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi

rev=$(git rev-parse --short HEAD)


git init
git config user.name "pengfu"
git config user.email "pengfoo@126.com"

git remote add upstream "https://$GH_TOKEN@github.com/pengfu/vue-2048.git"
git fetch upstream
git reset upstream/gh-pages

echo "pengfoo@126.com" > CNAME

touch .

cp -r dist/* ./

git add -A .
git commit -m "rebuild pages at ${rev}"
git push -q upstream HEAD:gh-pages

yarnpkg run build

cp build/index.html functions/index.html
firebase deploy

# DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/../build" && pwd )"
# echo $DIR
# aws s3 sync $DIR s3://gen.co/qr/ --acl=public-read \
#   --exclude ".DS_Store" \
#   --exclude ".git/*"

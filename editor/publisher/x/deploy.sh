mkdir -p build
curl http://localhost:3000 > ./build/index.html
# node index.js

# pandoc "./posts/adam-wathan.md" --css style.css --pdf-engine=prince -o build/test.pdf
# pandoc "./posts/adam-wathan.md" -o build/test.html
# pandoc "./posts/adam-wathan.md" -o build/test.epub
# pandoc "./build/index.html" --pdf-engine=prince -o build/test.pdf
# pandoc "./build/index.html" --pdf-engine=prince -o build/microconf-2018.epub
# pandoc "./build/index.html" --pdf-engine=prince -o build/microconf-2018.mobi

prince ./build/index.html
open ./build/index.pdf

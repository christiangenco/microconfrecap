mkdir -p build
# pandoc "./posts/adam-wathan.md" --css style.css --pdf-engine=prince -o build/test.pdf
# pandoc "./posts/adam-wathan.md" -o build/test.html
pandoc "./posts/adam-wathan.md" -o build/test.epub

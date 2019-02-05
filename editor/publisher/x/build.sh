node generatePosts.js
sleep 1

mkdir -p build
# curl http://localhost:3000/patrick-mckenzie > ./build/index.html
# curl http://localhost:3000/justin-jackson > ./build/index.html
# curl http://localhost:3000/mojca-mars > ./build/index.html
# curl http://localhost:3000/courtland-allen  > ./build/index.html
# curl http://localhost:3000/marie-poulin  > ./build/index.html
# curl http://localhost:3000/mike-taber  > ./build/index.html
# curl http://localhost:3000/val-geisler  > ./build/index.html
# curl http://localhost:3000/matt-molter  > ./build/index.html
# curl http://localhost:3000/chad-deshon > ./build/index.html
# curl http://localhost:3000/brian-parks > ./build/index.html
# curl http://localhost:3000/ankur-nagpal > ./build/index.html
# curl http://localhost:3000/anna-jacobsen > ./build/index.html
# curl http://localhost:3000/claire-suellentrop > ./build/index.html
# curl http://localhost:3000/jordan-gal > ./build/index.html
curl http://localhost:3000/dave-collins > ./build/index.html

# curl http://localhost:3000/garrett-dimon  > ./build/index.html

# pandoc "./posts/adam-wathan.md" --css style.css --pdf-engine=prince -o build/test.pdf
# pandoc "./posts/adam-wathan.md" -o build/test.html
# pandoc "./posts/adam-wathan.md" -o build/test.epub
# pandoc "./build/index.html" --pdf-engine=prince -o build/test.pdf
# pandoc "./build/index.html" --pdf-engine=prince -o build/microconf-2018.epub
# pandoc "./build/index.html" --pdf-engine=prince -o build/microconf-2018.mobi

prince ./build/index.html --pdf-title="Microconf Recap 2018" --pdf-author="Christian Genco @cgenco" #--no-default-style
open ./build/index.pdf

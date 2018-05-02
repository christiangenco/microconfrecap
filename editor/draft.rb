require 'json'

bio = JSON.parse(`ruby twitter_bio.rb #{ARGV.first}`)

name = bio['name']
# last = name.split(' ').last
filename = name.downcase.sub(' ', '-')

File.open("drafts/#{filename}.md", 'w') do |f|
  f.puts ''"
---
title:
speaker: #{bio.to_json}
date:
conference:
description: Microconf 2018 talk recap
image:
isPublic: true
---

# tl;dr
  "''.strip
end

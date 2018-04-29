require 'json'

bio = JSON.parse(`ruby generate_bio.rb #{ARGV.first}`)

name = bio['name']
last = name.split(' ').last

File.open("drafts/#{last.downcase}.md", 'w') do |f|
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

require 'json'
require 'active_support/inflector'

speakers = JSON.parse(File.read('./speakers.json'))

speakers.each do |speaker|
  speaker['name'] = ActiveSupport::Inflector.titleize(speaker['name'])
  last_name = speaker['name'].split(' ').last.downcase

  speaker['twitter'] = ''
  speaker['website'] = ''

  path = "drafts/#{last_name}.md"
  File.open(path, 'w') do |f|
    f.puts ''"
---
title:
speaker: #{speaker}
date:
conference:
description: Microconf 2018 talk recap
image:
isPublic: true
---

# tl;dr
  "''.strip
  end
end

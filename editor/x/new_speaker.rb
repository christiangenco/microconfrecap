#!/usr/bin/env ruby

require 'json'
require 'erb'

def get_bio(screen_name)
  url = "https://wt-christian-gen-co-0.run.webtask.io/twitterwebtask?screen_name=#{screen_name}"

  twitter = JSON.parse(`curl #{url}`)
  # puts twitter.to_json

  website = nil

  # I'm thirstin' for :try
  if twitter['entities'] && twitter['entities']['url'] && twitter['entities']['url']['urls'] && twitter['entities']['url']['urls'].first
    website = twitter['entities']['url']['urls'].first['expanded_url']
  end

  bio = {
    'name' => twitter['name'],
    'twitter' => twitter['screen_name'],
    'location' => twitter['location'],
    'description' => twitter['description'],
    'verified' => twitter['verified'],
    'image' => (twitter['profile_image_url_https'] || '').sub('_normal', ''),
    'website' => website
  }
end

speaker = get_bio(ARGV.first)

filename = speaker["name"].downcase.gsub(" ", "-") + ".md"
filepath = "./drafts/#{filename}"

renderer = ERB.new(DATA.read)
File.open(filepath, 'w'){|f| f.puts renderer.result}
puts filepath


# Dir.glob('./drafts/*').each do |path|
#   draft = File.read(path)
#   draft =~ /\nspeaker\: (.+)$/
#   speaker_line = Regexp.last_match(1)
#   speaker_json = speaker_line.gsub('=>', ':')
#   speaker = JSON.parse(speaker_json)
#
#   # new_filename = speaker['name'].downcase.sub(' ', '_')
#   # new_path = "posts/#{new_filename}.md"
#   # `mv #{path} #{new_path}`
#
#   screen_name = speaker['twitter']
#   twitter_bio = get_bio(screen_name)
#
#   new_bio = speaker.merge(twitter_bio)
#
#   new_draft = draft.sub(speaker_line, new_bio.to_json)
#
#   File.open(path, 'w') { |f| f.puts new_draft }
#
#   # exit
# end
__END__
---
title: Microconf Talk
speaker: <%= speaker.to_json %>
date:
conference: growth2019
description: Microconf 2019 talk recap
image:
isPublic: false
---

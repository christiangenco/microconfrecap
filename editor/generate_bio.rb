require 'json'

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

puts get_bio(ARGV.first).to_json

# Dir.glob('./drafts/*').each do |path|
#   draft = File.read(path)
#   draft =~ /\nspeaker\: (.+)$/
#   speaker_line = Regexp.last_match(1)
#   speaker_json = speaker_line.gsub('=>', ':')
#   speaker = JSON.parse(speaker_json)
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

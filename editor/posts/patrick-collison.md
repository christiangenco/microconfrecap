---
title: "Q+A With Patrick Collison, Co-Founder of Stripe"
speaker: {"name":"Patrick Collison","title": "Co-Founder and CEO of Stripe","twitter":"patrickc","location":"patrick@stripe.com","description":"Fallibilist, optimist. Stripe CEO.","verified":true,"image":"https://pbs.twimg.com/profile_images/825622525342199809/_iAaSUQf.jpg","website":"http://patrickcollison.com"}
date: 2018-04-30 14:39:34
conference: growth
description: "Stripe is a big company - how do they fit into Microconf? They embody the bootstraper ethos - they took it a long way as two dudes in a garage with minimal funding."
image: https://i.imgur.com/XrddjTU.jpg
isPublic: true
---

![Patrick Collison at Microconf Growth 2018](https://i.imgur.com/H0XrmwJ.jpg)

Stripe is a big company - how do they fit into Microconf? They embody the bootstraper ethos - they took it a long way as two dudes in a garage with minimal funding.

> For several months, John slept in the garden of our one bedroom apartment.

**Today at Microconf you launched [LLCs on Atlas](https://stripe.com/atlas/guides/llc-vs-c-corp) - congrats!**

For a while, the top feature request of [Atlas](https://stripe.com/atlas) has been to support LLCs (a relatively new invention).

We want Atlas to work well for companies that are going to do well, and not a lot of huge companies are LLCs, but early on in a company you don't know what's going to happen. C-corps have a lot of overhead.

LLCs have a lot of options, so fit the ethos of the bootstrapper community better.

**You've launched [Stripe Atlas](https://stripe.com/atlas), now [Stripe LLC](https://stripe.com/atlas/guides/llc-vs-c-corp), the Software engineering magazine [Increment](https://increment.com/), and acquired [Indie Hackers](https://www.indiehackers.com/). These seem as an outsider like random things - can you comment on the overall umbrella of these?**

So many times in building Stripe, some stupid little speedbump almost stopped it from happening. Our thinking of building Stripe is to increase the number of internet businesses.

What determins the number of internet businesses in the world? Why is it that number instead of half that many or twice as many?

As far as we can tell, it's just a lot of these smaller roadbumps.

We're very inspired in the things Indie Hackers et. al are doing because we think it's making it easier to start businesses.

60% of customers on Atlas said they wouldn't have started their business if Atlas didn't exist, so we're continuing to look for opportunities like that.

> You don't need to be Mark Zuckerberg to do something incredibly meaningful.

There's a prevailing Ayn Randian idea of entrepreneurs as lone committed furrowplower, whereas the reality is that the community of people around you that understand your problems is underrated.

**Word of mouth of Stripe spread fast. Was that a deliberate decision on your and [John](https://twitter.com/collision)'s part, or did it just happen because you had a great product?**

We lucked out. The things we were competing against were comically bad. Our competitors forced you to fax things to them.

> Our competitors were like comic book villains - our competitors forced you to fax things to them

The banking industry when we started was a lot like the healthcare industry is right now. We all roll our eyes at the current solutions knowing that someone is going to come along and roll over the existing market with a much better product.

There's a thing that happens to people writing in a corporate voice - they start talking about synnergy and use a whole other vocabulary. We tried to avoid that at Stripe. Expressing yourself honestly isn't something you can generalize, and it lands with people.

**Are there any other marketing channels you've explored that have worked well?**

We don't have a great track record with names (Stripe was almost paydaemon or `/dev/payments`).

Most users discovered Stripe through our integrations with other products, and those integrations were possible because we had great APIs. We think our expertise is in making APIs (and definitely not naming things).

---

# Questions

**You've talked about very small customers on Stripe Atlas and sophisticated customers - how do you build your product so the new people aren't overwhelmed but the huge customers are still getting what they want?**

That's **the** core challenge of Stripe. Every feature you add makes the product worse for people who don't use that feature.

Stripe should be able to scale through every order of magnitude - from your first to your ten-millionth payment.

I'm pretty sure the right strategy is to go serve the customer at every scale, but how do you do that?

There are several torturous tactics we use, like partitioning features, using dynamic documentation that just shows you what we think you care about, slowly rolling out features, and using dynamic dashboards that only show you certain things in the sidebar.

We don't yet have a grand unified theory of how to scale like this - it's becoming an increasingly active discussion.

**How much of your success do you attribute to being in Silicon Valley? Could you have had the same success outside of Silicon Valley?**

Because we're serving technology companies, we're in a unique position of needing to be around other technology companies.

> I think a smaller fraction of the world's best engineers are outside Silicon Valley now than in the last four years.

I think it's less worthwhile to be in Silicon Valley now than in the last four years. One reason for this is that the cost of living is too high. Collaboration tools are also shifting the calculus towards distributed teams working better than they used to.

There are also top tier developers all over the world.

In the next twenty years, we're probably going to see less successful technology companies in Silicon Valley and more around the world.

**Do you support open source projects out of goodwill, or are you getting an ROI from it?**

A lot of things in the world aren't measurable but still have huge benefits.

At Stripe, we believe in improving open source software and projects like Indie Hackers even though we can't measure the ROI - it just feels important to us. Open source software isn't taken seriously enough by companies benefiting from it.

**How'd you deal with financial regulation?**

It was very difficult to convince a bank to partner with us - most of them were like 🙅‍.

> We were like three squirrels in a trenchcoat masquerading as a real business.

There's nothing special about us, though - we were just two guys from Ireland with no connections. Anyone could do this.

**Fraud and chargebacks suck - how are you guys thinking about that?**

> If your chargebacks give you heartburn, imagine seeing all of them.

It's net good that they exist because it gives consumers confidence to give a rando business their credentials to charge them. It's a great extension of trust that customers have this recourse.

There are fewer disputes per charge than there ever have been in the past - we think we'll get substantially better still over the next 12 months. Ultimately, though, there's something unsolvable there. It does need to remain easy for consumers to dispute a purchase. What interests me is if structurally we can move beyond that, but it's a complex ecosystem to shepherd.

We welcome feedback - positive or negative - at patrick@stripe.com. Please email me!

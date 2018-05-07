---
title: "From $0 To $10M ARR: The Tactics We Used To Scale Teachable"
speaker: {"image":"https://pbs.twimg.com/profile_images/922551419206553602/v-h5PUmH.jpg","name":"Ankur Nagpal","title":"CEO, Teachable","bioUrl":"https://www.microconf.com/growth/speakers/ankur-nagpal/","twitter":"ankurnagpal","website":"http://teachable.com","location":"New York, NY","description":"Founder @Teachable. Twenty inch blades on the impala. DMs open if you wanna holla.","verified":true}
date: 2018-05-01 13:39:03 UTC-07:00
conference: growth
description: Microconf 2018 talk recap
image: https://i.imgur.com/jl5QfLo.png
isPublic: true
---

<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fteamlanio%2Fvideos%2F1677114439003846%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>

<iframe sandbox="allow-scripts allow-same-origin" security="restricted" src="https://lan.io/blog/podcast/ankur-nagpal/embed/" width="100%" height="700" title="Rob Walling Recap Interview - Lanio" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" class="wp-embedded-content"></iframe>
<script type='text/javascript'>const wp = document.querySelector(".wp-embedded-content"); window.addEventListener("message", ({data, origin}) => {if(origin === "https://lan.io" && data && data.message === "height" && data.value) wp.height = data.value})</script>

https://twitter.com/patio11/status/991425694583341056

SaaS is supposed to be super exciting:

![Expectation of revenue](https://i.imgur.com/Gupffe5.png)

But in practice it was really boring for Teachable:

![Teachable had a boring revenue slope](https://i.imgur.com/nDPEiNk.png)

Here's how they did it over four years:

![Teachable's 4 year journey](https://i.imgur.com/dmSzJU4.png)

It took 64 people to get there.

![Teachable overview at 10M ARR](https://i.imgur.com/ehBQGCE.png)

# How Teachable architected growth on the backend

The growth model Teachable followed was:

* Growth was the priority.
* How can we leave as little to chance as possible?
* Let's take advantage of being small enough that we can strong-arm growth by doing things that do not scale.

They waned to account for where every dollar was coming from.

Here's how it played out in August 2015:

* end of July 2015 MRR: $25k
* Desire month-on-month growth rate: 30%

![Calculating needed revenue to hit a target MRR](https://i.imgur.com/36Rd3Yq.png)

`Math math math`, they needed $10,843 to hit 30% growth. Where does that come from?

If they _did nothing_, expected MRR would be $8k.

![Calculating expected MRR](https://i.imgur.com/pPyzoNO.png)

"Revenue to be found" is therefore `$10,843 - $8,000 = $2,843`.

By the end, they "had to find" like a hundred thousand dollars, which was unfeasable. Early on, this number was a necessity that drove all marketing strategies. The number is also small enough to actually hit, and much better than just flying blind.

By targeting such a high number, they had to drive tactics that would have a shot in hell to hit the numbers.

![Example plan to hit the numbers: add in a few partner promos](https://i.imgur.com/VJS5SMP.png)

## Growth Strategies at every growth stage

To find an exrtra **$500-$1k**/month, the strategy could be 1-1 direct sales based on personally sent cold e-mails.

To find an extra **$1k-3k**, the revenue could be found by 1-many sales to our audience by hosting a big webinar every month.

The next level up in growth, **$3k-$5k**, could be found by hosting a weekly reoccurring webinar every Thursday driving $1k in new MRR / week.

A strategy to finding an extra **$5k-$10k**/month could be layering on joint venture webinars with influencers in the space every week with target of $1k in MRR / partner.

> At every stage, the necessity of having to discover this revenue was the fuel behind all of our big growth innovations.

## Dismal Failures and Successful Strategies

**Idea 1**: Pitch customers with a predesigned website with their content refactored and uploaded from other sites to impress them upfront.

That failed because Seth Goden's people complained about piracy :(

**Idea 2**: A bot that tried to find e-mail addresses for everyone on Udemy and initiate a cold email from my personal Gmail telling them to use us instead.

That failed because the first person it "found" was the founder of Udemy :/

![yikes](https://i.imgur.com/wX1jeJA.png)

**Idea 3**: Instead of inviting partners to our audience one at a time, why not aggregate all of them and have them all promote the same bigger event they all contribute to - aka "the summit"?

Oh hey that worked! $25k in new MRR from the first event, and eventually up to $50k in new MRR from repeating those events. This was one of the big pivot points that made Teachable work.

**Idea 4**: Change the price of our Basic plan from $29 -> $39 since we added a bunch of functionality to it. We experimented with letting existing users claim it at the old price for a week before the change went into effect.

Oh hey that worked too! Usually in a SaaS, your LTVs will slowly go up over time with a price raise. By letting people get grandfathered into the old price, it drove $20k in new MRR for the duration of the campaign immediately.

> The necessity of "finding revenue" lead to the discovery of some of our best growth strategies.

Being driven by revenue goals helped sanity check projects that sounded great but wouldn't have driven growth.

Pulling this crazy growth out of nowhere month after month for 24 months had several secondary benefits:

* Built momentum and morale internally - everyone wants to work on a “winning team”
* Helped us raise capital at terms we wanted because of “traction”
* Growth begets growth - the bigger you get, the more your "mini-brand" grows

If Teachable failed to hit their growth, they could analyze why:

![If we failed to hit our growth goals, we'd know why](https://i.imgur.com/vOcEVZo.png)

## When things come crashing down

After you're at ~$500k MRR, the "found revenue" gets insane:

![Where the growth model breaks down](https://i.imgur.com/z7irlfb.png)

Even if you earn $50k in a summit, you're barely making a dent in finding 6 figures a month. **The strong arm method stops working.**

What do you do then? Look back to the product and customer. What if you could make another 5% from each existing customer?

## Effective Growth 2.0 Strategies

After this $500k MRR inflection point, you have to move one of:

* Organic new customers added per day
* Decreasing churn rate
* Average revenue per customer.

This method is more about repeatable growth and leveraging existing customers.

What does that look like?

**1. Over hire for customer success**: During their scaling process, Teachable had as little as 1 Customer Care rep supporting every 1,000 paying customers. Today, it is 1 to 600.

![Customer metrics for Teachable improved dramatically by focusing on customer success](https://i.imgur.com/xSLEnjM.png)

This also reduced churn. The difference between 5% and 6% churn at $500k MRR over 2 years will cover a payroll for **20-30 customer care agents**. Investing in customer success is worth it at this scale.

**2. Materially improve checkout product**: Since we make money of payment processing, increased revenue per customer without needing new customers.

![Improving the checkout to this slick single page increased sales from $250k/day to $400k/day](https://i.imgur.com/GanI2QT.png)

**3. Make the $99/month plan more attractive**: average customer revenue per paying customer jumped from $48/customer to $60/customer (today it's $67).

![Making the $99/month plan more attractive changed the slope of Teachable's growth rate](https://i.imgur.com/WMtfnBr.png)

## Don't make the same mistakes as Teachable

Teachable spent ~6 months after hitting $500k MRR trying to do one off activities to make the math work, which wasn't sustainable (but worked super well up to $500k MRR).

They now divide growth into **strong-armed growth** and **evergreen growth** (growth that moves organic customers added per day, churn rate, or average revenue per customer).

---

# Questions

**This seems to go against the advice of doing one thing well. How do you reconcile your one-off growth projects with that?**

We never found one strategy to grow that continued to work. There was no single channel we could focus on and still hit our numbers.

**How many people did you have dedicated to growth at each stage?**

It was never smaller than 4 people. Right now our growth team is like its own mini company (even with its own engineers) - about 16.

**Should I focus on growth or product first?**

Once you have some kind of product market fit, don't use product improvements as an excuse to not push on growth. You'll never feel ready enough.

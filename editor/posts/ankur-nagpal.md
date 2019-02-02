---
title: "From $0 To $10M ARR: The Tactics We Used To Scale Teachable"
speaker:
  {
    "image": "https://i.imgur.com/FIgF0rh.jpg",
    "name": "Ankur Nagpal",
    "title": "CEO, Teachable",
    "bioUrl": "https://www.microconf.com/growth/speakers/ankur-nagpal/",
    "twitter": "ankurnagpal",
    "website": "http://teachable.com",
    "location": "New York, NY",
    "description": "Founder @Teachable. Twenty inch blades on the impala. DMs open if you wanna holla.",
    "verified": true,
  }
date: 2018-05-01 13:39:03 UTC-07:00
conference: growth
description: Microconf 2018 talk recap
image: https://i.imgur.com/jl5QfLo.png
isPublic: true
---

<div class="iframe-wrapper"><iframe class="responsive-iframe" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fbusiness.facebook.com%2Fteamlanio%2Fvideos%2F1677114439003846%2F&show_text=0&width=560" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true" ></iframe></div>

You'll learn:

1. How to grow monthly recurring revenue (MRR) 30% every month for 30 months.
2. Strategies for growing past \$500k MRR.
3. How to increase average revenue per customer (ARPU) by 25% with one simple pricing change.

# Teachable's Revenue Snapshot

Software as a Service (SaaS) growth is supposed to be super exciting: peaks of irrational exuberance followed by a trough of disillusionment, a quick climb back up the slope of reality, and then a realization of your idea's actual value.

![Expectation of SaaS company value #large](https://i.imgur.com/Gupffe5.png)

In practice, growing to \$10M annual recurring revenue (ARR) for Teachable was slow and boring.

![Teachable's slow boring revenue graph from 0 to $10M ARR #large](https://i.imgur.com/VBlsGTl.png)

Teachable reached $10M ARR with 12,000 customers and an average revenue per customer (ARPU) of $67. These customers are supported by 64 full-time Teachable staff in New York City (4 in product, 15 in engineering, 16 in marketing, 21 customer operations, and 7 in finance, recruiting, and administrative).

How did Ankur Nagpal grow Teachable from 0 to \$10M ARR in just four years? By architecting growth on the backend.

# The Growth Model

In the early stages at \$10k monthly recurring revenue (MRR), growth wasn't something the Teachable team was conscious about. They thought they'd just build a product that nailed product-market fit, serve their customers really well, and write blog posts. Their thinking was that it would be great if they grew, but it didn't need to happen.

They shifted from that mentality to making growth their core company value. Teachable made growth the priority, tried to leave as little to chance as possible, and took advantage of being small enough that they could strong-arm growth by doing things that didn't scale.

[Andrew Guttormsen](https://twitter.com/AGuttormsen) - Teachable's head of growth - built Teachable's financial model of 30% MRR growth every month. Here's how Guttormsen's model played out for calculating how much recurring revenue Teachable would need to find for August 2015 (assuming a July MRR of \$25,818, desired growth rate of 30%, and expected churn of 12%):

```
starting_mrr           = $25,818
growthRate             = 1.3
expected_churn         = 0.12

desired_mrr            = growthRate * starting_mrr
                       = 1.3 * $25,818
                       = $33,563
expected_churn_revenue = expected_churn * starting_mrr
                       = 0.12 * $25,818
                       = -$3,098
needed_mrr             = desired_mrr - starting_mrr + expected_churn_revenue
                       = $33,563 - $25,818 - $3,098
                       = $10,843
```

Here's that same model expressed as a Javascript function:

```javascript
function neededMRR(startingMRR, growthRate, revenueChurnRate) {
  const desiredMRR = startingMRR * growthRate;
  const expectedChurnRevenue = startingMRR * revenueChurnRate;
  return desiredMRR - startingMRR + expectedChurnRevenue;
}

neededMRR(25818, 1.3, 0.12); // 10843.56
```

For Teachable to have a "successful" August 2015, therefore, they had to find \$10,843 in additional MRR.

Where does that \$10,843 come from? That became the singular goal of the marketing and growth teams.

There were some expected sources of growth, like organic upgrades (roughly +$100/day for 30 days = +$3,000 MRR), weekly Thursday webinar workshops that all new signups were invited to (+$1,000 MRR each 4 times a month = +$4,000 MRR), and enterprise sales (+\$1,000 MRR). Those known sources only account for `$3,000 + $4,000 + $1,000 = $8,000` of additional MRR of the needed \$10,843, so they had to get creative to find the additional `$10,843 - $8,000 = $2,843`.

Where does the remaining $2,843 MRR come from? Part of deciding to make growth a top priority for Teachable was to be okay doing dumb things that didn't scale and could only work for one month. Perhaps this month they could host three extra influencer/partner webinars at an expected value of $1,000 MRR each. That extra \$3,000 MRR could close the gap so Teachable could hit this month's growth target.

This is the process Teachable repeated every month. Early on, this "needed MRR" number was small enough to actually hit, and was a clarifying goal for the marketing and growth teams to focus on. "Needed MRR" was the single target focused on in meetings.

<!-- Later on, the "needed MRR" number ballooned into a hundred thousand dollars, which is where their model broke down, but it drove growth into ??????. -->

<!-- By targeting such a high number, they had to drive tactics that would have a shot in hell to hit the numbers. -->

# Growing Growth Strategies

As MRR went up, the amount of extra MRR Teachable needed to find to maintain 30% growth increased proportionally. That put the Teachable team in the position of finding increasingly more tactics to drive up MRR.

Their general strategy was to take things that were already working, like one-on-one direct cold emails followed by personal sales calls (which could drive an extra $500-$1k MRR in a month pretty reliably) and scale them.

But what happens when you need to find another $2k in MRR? Instead of one-on-one personal sales calls, they could host a big webinar with _five to ten_ customers at the same time. This adapted strategy could now find an extra \$1k-3k MRR.

How could Teachable scale up from that? They could schedule that webinar every _week_ instead of every month, so now a consistent $1k MRR was added every *week* for a total increase of $3k-5k MRR every month.

How could Teachable scale _that_ strategy? They could make each weekly webinar a joint venture with _influencers_ and capitalize on the influencer's existing audience, which translated to \$5k-10k MRR every month.

At every stage, the necessity of having to discover a specific amount of revenue was the fuel behind Teachable's big growth innovations.

# Growth Strategies

The necessity of "finding revenue" led to the discovery of some of Teachable's best growth strategies. Some - like scaling webinars - worked well, but there were many growth ideas that didn't work.

**Growth Idea 1**: Try pitching customers a website with their content already uploaded to the Teachable platform so they can see exactly what it would look like if they switched to Teachable. In practice, people were creeped out that someone had pirated their content.

**Growth Idea 2**: Try scraping all the people with courses on Udemy and send them a personal email. The first person that created a course on Udemy, however, was the founder of Udemy - Gagan Biyani.

![Gagan Biyani - the founder of Udemy - responded politely to an automatically generated email asking if he'd be interested in switching from Udemy to Nagpal's teaching platform. #large](https://i.imgur.com/wX1jeJA.png)

![Teachable Summit #small](https://i.imgur.com/fWf4jGb.jpg)

**Growth Idea 3**: Instead of inviting partners one at a time, try aggregating several partners at once and have them all promote one big event they're all contributing to?

This strategy resembled a small online conference and worked really well. The first event generated $25k in new MRR, and repeated events generated $50k MRR.

**Growth Idea 4**: Try raising the price of Basic plan from $29/month to $39/month and letting existing users claim the old price for a week before the price raise goes into effect.

Usually in a prise increase, user lifetime values (LTVs) increase slowly. By offering the old price, Teachable generated a \$20k new MRR spike in a week _and_ got the slowly increasing LTVs.

# Growth Driven Vision

Being driven by revenue goals helped sanity check projects that would have been fun but wouldn't have driven growth.

Pulling this crazy growth out of nowhere month after month for 24 months had several secondary benefits:

- Built momentum and morale internally - everyone wants to work on a “winning team”
- Helped Teachable raise capital at terms we wanted because of "traction"
- Growth begets growth - the bigger you get, the more your "mini-brand" grows

If Teachable failed to hit their growth, they could look at their growth model and see exactly why.

![If Teachable failed to hit their growth goals, their growth model showed them why #large](https://i.imgur.com/vOcEVZo.png)

# Where the Growth Model Breaks

30% MRR growth isn't sustainable. After $500k MRR, 30% growth necessitates $180,000 of new MRR each month, even with decreased churn of 6%: `neededMRR(500000, 1.3, 0.06) == 180000`.

<!-- ![Where the growth model breaks down](https://i.imgur.com/z7irlfb.png) -->

Even if Teachable could earn \$50k MRR by hosting a summit, they would be barely making a dent in the total number they needed to hit for the month. After a certain point, the strong arm method of growth stops working.

How did they grow after that point? By looking back to the product and customer.

## Effective Growth 2.0 Strategies

Teachable spent about 6 months after hitting $500k MRR trying to do one off activities to grow, but the model and strategies that got them to $500k MRR weren't working to grow further.

After the \$500k MRR inflection point, growth came most effectively from:

1. Increasing new customers added per day,
2. Decreasing churn rate, or
3. Increasing average revenue per customer (ARPU).

Here are some specific strategies Teachable used to move those three metrics.

**1. Over hire for customer success**: During their scaling process, Teachable had as little as 1 Customer Care rep supporting every 1,000 paying customers. Today, that ratio is 1 to 600.

![Customer metrics for Teachable improved dramatically by investing more in customer success, which reduced churn. #large](https://i.imgur.com/xSLEnjM.png)

Investing more in customer success also reduced churn. The difference between 5% and 6% churn at \$500k MRR over 2 years is a \$1.6M difference in ARR, which is enough to cover a payroll for **20-30 customer care agents**. Investing in customer success is worth it at this scale.

![Teachable's redesigned one-page course checkout is easier to use and more effective. #small](https://i.imgur.com/GanI2QT.png)

**2. Improve the checkout product**: If there's a part of your product that drives revenue, it makes sense to reinvest in improving that parts. For Teachable, that meant improving the course checkout page. Improving this page to a slick single flow with social proof increased course sales from $250k/day to $400k/day.

![Making the $99/month plan more attractive changed the slope of Teachable's growth rate](https://i.imgur.com/WMtfnBr.png)

**3. Charge more (kind of)**: Teachable's most popular plan used to be their cheapest $29/month plan. They put strategic effort towards making their second most expensive plan at $99/month the more attractive: they dropped all transaction fees for users on this plan and pulled most of the features from their most expensive $299/month plan into the $99/month plan.

By making their second most expensive plan more attractive, average customer revenue per paying customer (ARPU) jumped from $48/customer to $60/customer. ARPU has continued to compound to \$67.

# Questions

**This seems to go against the advice of doing one thing well. How do you reconcile your one-off growth projects with that?**

_We never found one strategy to grow that continued to work. There was no single channel we could focus on and still hit our numbers._

**How many people did you have dedicated to growth at each stage?**

_The growth team has never been smaller than 4 people, even at stage 1. In middle stages it was 4-8. Right now our growth team is like its own mini company (even with its own engineers) - about 16._

**Should I focus on growth or product first?**

_If we waited to grow until we felt really good about everything in our product, we would've never grown. Once you have some kind of product market fit, don't use product improvements as an excuse to not push on growth. You'll never feel like your product is ready._

Contact Ankur Nagpal on twitter at [@ankurnagpal](https://twitter.com/ankurnagpal).

<iframe sandbox="allow-scripts allow-same-origin" security="restricted" src="https://lan.io/blog/podcast/ankur-nagpal/embed/" width="100%" height="700" title="Rob Walling Recap Interview - Lanio" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" class="wp-embedded-content"></iframe>
<script type='text/javascript'>const wp = document.querySelector(".wp-embedded-content"); window.addEventListener("message", ({data, origin}) => {if(origin === "https://lan.io" && data && data.message === "height" && data.value) wp.height = data.value})</script>

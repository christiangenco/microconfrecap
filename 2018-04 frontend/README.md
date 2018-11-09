# Microconf Recap

http://www.microconf.com/starter/speakers/

```javascript
const speakers = [...document.querySelectorAll(".speaker")].map(speaker => {
  return {
    image: speaker.querySelector("img").src,
    name: speaker.querySelector(".speaker-name a").innerText,
    title: speaker.querySelector(".speaker-about").innerText,
    bioUrl: speaker.querySelector(".read-more-link").href,
  };
});
```

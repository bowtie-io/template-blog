---
location: 'about'
head:
  title:
  subtitle:
style:
  id: null
  class: null
  media:
    img:
      url_path:
      pattern: false
      parallax: false
      overlay: null
      blur: false
    video:
      url_path: null
      type: null  
      posterurl_path: null  
  sectioncolor:
  tint_color: 'rgba(0,0,0,0.0)'  
cta:
  headline:
  btnText:
  btnType:
  btnLink:
  subtext:
---


<div class="col-sm-7">
    <h4 class="text-left">Contact Us</h4>
    {% include widgets/contact-form.html %}
</div>

<div class="col-sm-5">
<h4 class="text-left">Connect</h4>
{% include social-links.html %}

<h4 class="text-left">Visit Us</h4>
{% include widgets/visit-us.html %}
</div>

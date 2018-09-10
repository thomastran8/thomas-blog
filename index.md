---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<h2>Welcome</h2>

Hi, my name is Thomas and this is my website. Here I cover topics relating to programming and computer technology! I blog several times a week and post my projects here, so be sure to visit here every now and then. Cheers!

<h2>Latest Post</h2>
{% for post in site.posts limit:1 %}
<li>
    <time>{{ post.date | date: "%b %-d, %Y" }}</time>
    <h3><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
</li>
{% endfor %}

<h2>Latest Project</h2>
<li>
    Coming Soon!
</li>
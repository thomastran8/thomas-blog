---
layout: page
title: Projects
permalink: /projects/
---

<!-- **Photos and links coming soon, for now check out my github page for the following projects**

## Web Development
PhotoQ Website
Reaction Test

## Artificial Intellgence
StarcraftII AI Bot

## Game Development
Fruit Turtle <br>
Pyramid Escape <br>
WalkMan <br>

Checkout [my github](https://github.com/thomastran8) for more projects -->

{% for project in site.categories.project %}
<li>
		<time>{{ project.date | date: "%b %-d, %Y" }}</time>
		<h3><a href="{{ project.url | prepend: site.baseurl }}">{{ project.title }}</a></h3>
</li>
{% endfor %}
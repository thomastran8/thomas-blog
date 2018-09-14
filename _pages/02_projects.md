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
<div class="post-ctn">
	<a href="{{ project.url | prepend: site.baseurl }}">
		<img src="{{ project.post-image }}" alt="project image" class="post-image">
	</a>
	<ul class="post-list">
			<time>{{ project.date | date: "%b %-d, %Y" }}</time>
			<h3><a href="{{ project.url | prepend: site.baseurl }}">{{ project.title }}</a></h3>
			<p>{{ project.excerpt | strip_html | truncatewords:20 }}</p>
	</ul>
</div>
{% endfor %}
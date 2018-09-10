---
layout: page
title: Posts
permalink: /posts/
---

{% for post in site.posts %}
<li>
		<time>{{ post.date | date: "%b %-d, %Y" }}</time>
		<h3><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
</li>
{% endfor %}

<p><i class="fas fa-rss-square"></i> subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>

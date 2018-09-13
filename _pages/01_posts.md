---
layout: page
title: Posts
permalink: /posts/
---

{% for post in site.categories.post %}
<div class="post-ctn">
	<a href="{{ post.url | prepend: site.baseurl }}">
		<img src="{{ post.post-image }}" alt="post image" class="post-image">
	</a>
	<ul>
			<time>{{ post.date | date: "%b %-d, %Y" }}</time>
			<h3><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
			{{ post.excerpt | strip_html | truncatewords:20 }}
	</ul>
</div>
{% endfor %}

<p><i class="fas fa-rss-square"></i> subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>

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
    <div>
        <a href="{{ project.url | prepend: site.baseurl }}" class="img-ctn post-image">
            <div class="img-wrap">
                <img src="{{ project.post-image }}" alt="project image">
            </div>
        </a>
    </div>
    <ul class="post-list">
        <time>{{ project.date | date: "%b %-d, %Y" }}</time>
        <h3><a href="{{ project.url | prepend: site.baseurl }}">{{ project.title }}</a></h3>
        <p>{{ project.excerpt | strip_html | truncatewords:10 }}</p>
        <a href="{{ project.url | prepend: site.baseurl }}#disqus_thread" class="comment-count">Comments</a>
    </ul>
</div>
{% endfor %}
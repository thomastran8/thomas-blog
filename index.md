---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<h2>Welcome</h2>

Hi, my name is Thomas and this is my website. Here I cover topics relating to programming and computer technology! I blog several times a week and post my projects here, so be sure to visit here every now and then. Cheers!

<h2>Latest Post</h2>
{% for post in site.categories.post limit:1 %}
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

<h2>Latest Project</h2>
{% for project in site.categories.project limit:1 %}
<div class="post-ctn">
    <a href="{{ project.url | prepend: site.baseurl }}">
		<img src="{{ project.post-image }}" alt="project image" class="post-image">
	</a>
    <ul>
        <time>{{ project.date | date: "%b %-d, %Y" }}</time>
        <h3><a href="{{ project.url | prepend: site.baseurl }}">{{ project.title }}</a></h3>
        {{ project.excerpt | strip_html | truncatewords:20 }}
    </ul>
</div>
{% endfor %}
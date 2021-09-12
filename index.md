---
layout: index
---

<h2>Hi, My Name is Thomas!</h2>

<div class="post-ctn">
    <div>
        <a href="{{ '/about' | prepend: site.baseurl }}" class="img-ctn post-image">
            <div class="img-wrap">
                <img src="/images/profile-small.jpg" alt="about">
            </div>
        </a>
    </div>
    <ul class="post-list">
        <time>{{ 'now' | date: "%Y" }}</time>
        <h3><a href="{{ '/about' | prepend: site.baseurl }}">About</a></h3>
        <p>Thank you for visiting my website! Here, I cover devops and gamedev topics! If you would like to know more about me, click this post. Cheers!</p>
    </ul>
</div>

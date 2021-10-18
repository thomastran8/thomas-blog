---
title:  "Portfolio Website"
date:   2021-10-09 10:00:00 '-0700'
post-image: /images/cat.jpg
has_syntax: true
---

<div id="lightgallery">
    <a href="/images/cat.jpg" data-sub-html="Cat loaf" class="img-ctn large-image">
        <div class="img-wrap">
            <img src="/images/cat.jpg">
            <i class="fas fa-search"></i>
        </div>
    </a>
    <a href="https://www.youtube.com/watch?v=7z9KPTI5ixI" data-poster="https://img.youtube.com/vi/7z9KPTI5ixI/0.jpg" data-sub-html="Cat sledding" class="img-ctn">
        <div class="img-wrap">
            <img src="https://img.youtube.com/vi/7z9KPTI5ixI/0.jpg">
            <i class="fas fa-play"></i>
        </div>
    </a>
</div>

You are actually viewing the portfolio website right now! Feel free to take a look around. Click on links, visit different pages of my website. Take in the view :)

Since you are on my portfolio website already, I included a photo of a cat and a video of a cat sledding. Enjoy!

## Purpose
I made this website as a compliment to my resume to showcase my experience and projects in more detail here. I also post updates of what I have learned in the "Posts" section of my website.

## How it's made
This website is made with Javascript, HTML, CSS, and markdown. All from scratch! I designed everything myself from what you see here. I also use a static site generator called Jekyll to compile them all together.

## Using Jekyll, the static site generator
I used a static site generator since I don't have anything to dynamically load for users on my page. Plus, it's very lightweight and the page loads very quickly. Another benefit of using a static site generator is that it is also modular. Jekyll uses "liquid" as a templating engine which allows me to reuse certain page designs multiple times for different areas of my website. For example, I have two project sections. One for software engineering and the other for game development. I am able to resuse the same project layout for both. Both sections have the same css styling and page format.

## Creating the typing effect for the site's title banner
If you haven't noticed yet, whenever you navigate to a different page of my website. The banner title changes to match the current web page of my website! It's a very fun effect! It mimics the way how programmers navigate different directories on a linux file system from a terminal. It isn't entirely accurate since I made all pages start at the root directory, denoted by the forward slash "/". Otherwise the banner title would be too long.

This typing effect uses a javascript file which I imported in called "typewriter.js" It is saved to my server so it does not need any external sites to load my website.

## Creating the photo gallery
Whenever a post is opened. A photo gallery is shown under the title banner. A main large photo is used to span the width of the main body of the page. I use it to grab the reader's attention to what the project or post is showcasing. Additional photos may be added to the site as smaller photos that chain together below the main photo.

This photo gallery uses a javascript file I imported in called "lightgallery". Whenever I create a post that needs the gallery, I include the variable "has_gallery: true" to my post's front matter to import the lightgallery.js file. This gives me the benefit of not loading unnecessary javascript files for pages that don't need them.

## The zoom effect on mouse hover
Another subtle feature is the slight zoom effect when hovering over a photo. This effect is actually very simple and I made it myself. I added a zoom affect of 10% when a mouse is hovered over a photo and applies a slight darkening filter to the photo container. A magnifying icon is also overlayed over the image to let the user know that they can click on it to view the photo in a larger format. I think these small details makes the website feel more "responsive" to user input.

## Creating the code syntax highlighting
Since I also do regular posts on my website I also decided to add code syntax highlighting to my website. It uses prismjs okaida theme to highlight code on my website. Again, this is also lightweight and easy to use when I am showcasing code on my website. Likewise as with my lightgallery, if I include the variable "has_syntax: true" to my post's front matter, it will import the prism.js file. This saves on performance on pages that only need them.

Here is an example of prism syntax highlighting in action below:

```cpp
// Your First C++ Program

#include <iostream>

int main() {
    std::cout << "Hello World!";
    return 0;
}
```

## Mobile friendly website
If you are viewing this website on a smaller screen such as a mobile phone. My website also is responsive to a smaller format! Once the top navigation bar is compressed enough that it touches my website title on the left. The navigation will be hidden inside a hamburger menu (three horizonal lines).

Feel free to give it a try! Decrease the width of your browser until you see the hamburger menu replace the navigation bar. The navigation bar also has an on-hover highlighting as feedback for the user before clicking. Lastly, The body paragraph text should not go off screen but push text down in a more vertical layout.

## Fonts and custom icons
Alls fonts on all pages of my website uses Google font "Open Sans". I find this font to be simple, clean, and pleasing to read on a website.

If you visited my contacts page, you may notice I am using custom icons! In particular, Font Awesome icons! Font awsome provides excellent free flat UI icons to use on websites. I used these icons for my social media icons.

Also -- if you look closely -- I have a custom icon for the browser tab. It's a Linux Penguin! This icon is downloaded from icons8.com an open source icon.

## How it's hosted
This website is hosted on my home server! My home server is a 16 core CPU, 32GB RAM, and 1TB SSD machine. It runs many services on it since I have a virtualization server installed on it. Hosting my web server is just one of the many services.

My website is hosted in a docker container behind a reverse proxy. So it is very secure and isolated from the rest of my server. Docker also makes it easy to provision and deprovision my website quickly and consistenly since it uses a docker-compose file. I use a custom domain name for my website so the docker-compose file also spins up a ddclient service to keep my website's hostname updated to my home's public ip address.

SSL certificates are also used to secure the connection between my server and the end user's browser. Let's Encrypt is used to keep my SSL certificates renewed with my custom domain name.


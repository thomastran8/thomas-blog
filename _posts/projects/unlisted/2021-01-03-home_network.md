---
title:  "Home Network"
date:   2021-01-03 04:25:00 '-0700'
post-image: /images/news.png
---

<div id="lightgallery">
    <a href="/images/cat.jpg" data-sub-html="network device" class="img-ctn large-image">
        <div class="img-wrap">
            <img src="/images/cat.jpg">
            <i class="fas fa-search"></i>
        </div>
    </a>
</div>

## The homelab equipment

For my homelab network setup, I have a pfSense router, a 16-port layer 3 edgeswitch, and a unifi ac-lite access point.

## Cost

First issue was cost. Immediately, I knew I was not going to buy enterprise equipment routers and switches brand new. Those can go up to thousands of dollars. I considered used equipment but decided against it due to warranty. So after digging around reddit's /r/networking and other various networking forums, many people recommended prosumer equipment. Ubiquiti being the most popular.

I opted to buy the ac-lite instead of the ac-pro access point since my house isn't that large. So the ac-lite makes sense. I also opted to buy an edgeswitch instead of buying a unifi-switch. Although, the unifi switch integrates with their unifi-controller, they cost about the same and the edgeswitch offers layer 3 functionality that I wanted to play around with. Lastly, I decided to buy a no-name-brand mini network computer box and load pfSense onto it. I love open source projects and I don't necessarily like being locked into Ubiquiti's network ecosystem, so pfSense gives me that flexibility.

Since I have a unifi ac-lite access point, that needs to be controlled with a unifi-controller. Now a unifi-controller can be bought included in a unifi cloud-key for around $100. But I opted to use a docker container instead running on my server desktop. It's free and offers future proofing since the unifi-controller software may be updated to require more system resources.

## Issues

One issue that I ran into was that my ISP provider AT&T does not offer a separate modem and router. The router/gateway is included in the price to my monthly subscription and cannot be removed. This was a bit of a setback, but I was able to follow a guide to setup a third-party router for my pfSense box. It involves setting up the pfSense box as a DMZ plus device in the AT&T settings. That way all ports are opened to the pfSense box.

Although, it wasn't that straightforward. I got a number of drops when family members experience wifi-calling drops and video calls getting dropped on viber. After searching around online for a fix, and tweaking settings on both my ubiquiti devices and pfSense router for weeks. It turned out it was related to AT&T's DMZ plus mode not acting as a true bridge mode to my pfSense router. There's a 50 page forum post on AT&T's forums with a lot of other people with this same issue. Turns out DMZ plus mode is really broken and has gone unresolved for years.

A fix for this turns out to just do a double NAT and forward all TCP and UDP ports from the AT&T router to my pfSense gateway. This seems to have fixed all VOIP issues previously experienced with the AT&T DMZ plus mode.

## How it works

My pfSense router works as a router-on-stick. All VLANs get trunked over the LAN interface to the 16-port edgeswitch where the VLANs get separated out.

My ac-lite access point also receives a trunk link since I have wifi for LAN and some IOT devices.

I have a desktop server that runs the unifi-controller software in a docker container. Any changes I want to make to any unifi switches or my access point, it can be done through this unifi-controller software.


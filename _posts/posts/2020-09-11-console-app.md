---
layout: post
title:  "C++ cross-compatible console app"
date:   2018-09-11 02:40:00 '-0800'
categories: post
---

Finally finished my C++ blackjack console game which I followed along the learncpp.com tutorial. The main difference between mine and the website's version is that I used a different randomization technique that results in better randomization uniform.

This led to an issue where following the tutorial's function of getRandomNumber() would not generate a random number but the same number every time. I took out the randomization code and put it into the caller's function which is shuffleDeck() and surprise, it works. I'm assuming it has to do with initializing the mersenne twister variable but I would need to do more testing, for now it works as is.

A final touch I added to the project is getting it to run for both Linux and Windows 64bit. This requires installing MinGW compiler on my main driver which is Arch Linux. Fortunately, Arch Linux makes it easy to install since MinGW is available on the AUR which I use my Yay package manager to download the packages.

In order to compile my project for windows I run the following command in my terminal
```
x86_64-w64-mingw32-g++ [cpp-files] -o executable-name.exe -static 
```

So that should be it for making the .exe file for windows. But in order to make it fancier I added an icon for the .exe this requires a few extra steps. The website I referred to for getting this to work is from <a href="https://stackoverflow.com/questions/708238/how-do-i-add-an-icon-to-a-mingw-gcc-compiled-executable">Stack Overflow</a>.

First get an image. I got mine from <a href"https://icons8.com/">icons8.com</a>, a lot of their icons are free to use. Thanks icons8.com! My icon of choice is a card. The only issue here is that the icon is a .png file and I needed a .ico file for the .exe file.

That means Gimp to the rescue! If you don't already have Gimp, I recommend getting one, it's a free photoshop alternative. Get it <a href="https://www.gimp.org/">here</a>. So I went ahead and converted it into an .ico file with Gimp using its export feature and default settings.

Then I made a my.rc file
```
vim my.rc
```
and put the following information into the file
```
id ICON "path/to/my.ico"
```

and ran the following command in my terminal to create the .res file which I believe stands for 'resource' file
```
x86_64-w64-mingw32-windres my.rc -O coff -o my.res
```

Finally we are back to creating the .exe file **but** with the addition of a icon resource file
```
x86_64-w64-mingw32-g++ [cpp-files] my.res -o executable-name.exe -static
```

This concludes my cross-compatible windows and linux blackjack game.

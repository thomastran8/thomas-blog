---
title:  "C++ cross-compatible console app"
date:   2018-09-11 02:40:00 '-0800'
has_syntax: true
---

Finally finished my C++ blackjack console game which I followed along the learncpp.com tutorial. The main difference between mine and the website's version is that I used a different randomization technique that results in better uniform randomization.

This led to an issue where following the tutorial's function of getRandomNumber() would not generate a random number but the same number every time. I took out the randomization code and put it into the caller's function which is shuffleDeck() and surprise, it works. I'm assuming it has to do with initializing the mersenne twister variable but I would need to do more testing, for now, it works as is.

A final touch I added to the project is getting it to run for both Linux and Windows as a 64bit executable. This requires installing MinGW compiler on my main driver which is Arch Linux. Fortunately, Arch Linux makes it easy to install MinGW since MinGW is available on the AUR which I use my Yay package manager to download the packages.

In order to compile my project for windows I run the following command in my terminal

```shell
x86_64-w64-mingw32-g++ [cpp-files] -o executable-name.exe -static 
```

So that should be it for making the .exe file for windows. This creates a perfectly fine executable to be used and I could stop here, but in order to make it fancier I added an icon for the .exe this requires a few extra steps. The website I referred to for getting this to work is from <a href="https://stackoverflow.com/questions/708238/how-do-i-add-an-icon-to-a-mingw-gcc-compiled-executable">Stack Overflow</a>.

First I had to get an image. I got mine from <a href="https://icons8.com/">icons8.com</a>, a lot of their icons are free to use. Thanks icons8.com! My icon of choice is a card. The only issue here is that the icon is a .png file and I needed a .ico file for the .exe file.

That means Gimp to the rescue! If you don't already have Gimp, I recommend getting one, it's a free photoshop alternative. Get it <a href="https://www.gimp.org/">here</a>. So I went ahead and converted it into an .ico file with Gimp using its export feature and default settings.

Then I made a my.rc file

```shell
vim my.rc
```
and put the following information into the file

```shell
id ICON "path/to/my.ico"
```

and ran the following command in my terminal to create the .res file which I believe stands for 'resource' file

```shell
x86_64-w64-mingw32-windres my.rc -O coff -o my.res
```

Finally we are back to creating the .exe file **but** with the addition of a icon resource file

```shell
x86_64-w64-mingw32-g++ [cpp-files] my.res -o executable-name.exe -static
```

There it is, that should be it. The executable now should have an image when viewed in a file explorer in Windows.

This concludes my cross-compatible windows and linux 64 bit blackjack game.

---
title:  "Pomodoro Timer"
date:   2022-01-01 10:00:00 '-0700'
post-image: /images/pomodoro_timer.png
has_syntax: true
---

<div id="lightgallery">
    <a href="/images/pomodoro_timer.png" data-sub-html="Pomodoro Timer GUI" class="img-ctn large-image">
        <div class="img-wrap">
            <img src="/images/pomodoro_timer.png">
            <i class="fas fa-search"></i>
        </div>
    </a>
</div>

This pomodoro timer desktop application allows you create activities with a custom timer and break timer. You can save, load, and edit activities to a file on your computer! Works on linux, mac, and windows!

## Purpose
I created this pomodoro app for personal use. I always enjoyed using pomodoro timers so I decided to make my own! Pomodoro timers is a great tool to boost productivity in small chunks of time.

## The Design
First comes the design! Um apparently very basic but it gets the job done! All functionality of the desktop app are designed in a familiar desktop app manner. Files can be saved and loaded through the dropdown file menu. Activities can be created and deleted through the dropdown activity menu. Both are located in the upper-left corner of the application.

Saving the file with a particular name will display the name of the file in the upper-left of the application as well.

In the upper-right is the "View Data" button which will show historical and total minutes spent on each activity. This is a planned feature and not implemented yet.

Next is the activity selection. Selecting the appropriate activity will load the minutes for both the main timer and break timer.

The main timer and break timer can be changed by the user.

Finally at the bottom is the start and reset buttons to start the main timer and the break timer. Starting either one will stop the other timer.


## Getting the timer to work
QT Creator implements a signal and slot relationship in their environment. Functions / Objects can emit a signal and a slot can capture that signal. In this case the start and reset buttons control the start / stop / reset of the corresponding timers.

I also had to make sure of the state of the timers at all times. So I kept track of the timers states in an Enum.

The state of the timers control the operational flow. So if the user starts the main timer and starts the break timer shorty after, the main timer is then paused and the break timer starts. The same is true vice-versa.

Other cases include checks whether the timer is completed and to stop the timer. The same with resetting the timer to stop the timer from ticking.

## Saving the activities to a file
QT uses specific classes when working with files and writing data these are `QFile` and `QDataStream` classes. These are stored to a plain text file and activities and their corresponding times are written line by line. This is handled by an array to read and write to a file.

For example:

```cpp
// [Activity] [main-time] [break-time]
Study 25 5
Gamedev 30 5
Exercise 10 2
```

However I plan to convert this over to be written as a JSON formatted file and maybe implement encryption sometime later.


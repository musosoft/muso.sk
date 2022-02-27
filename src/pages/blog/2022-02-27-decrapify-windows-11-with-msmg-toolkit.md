---
templateKey: blog-post
title: Decrapify Windows 11 with MSMG Toolkit
date: 2022-02-27T07:50:07.721Z
description: How to improve performance, remove bloatware from Windows 11
  installer and make your own setup iso.
featuredpost: false
image: /img/clint-patterson-ygpxcyps8h4-unsplash.jpg
tags:
  - windows
  - os
  - tweak
---
Setting up the operating system without any extra crap might be hard nowadays. Thanks to MGMG Toolkit you can remove all bloatware and unused components from Windows 11 Setup ISO file. This is very helpful for those who care about Performance and Privacy and is recommended for Low end PCs.

Download [MSMG Toolkit](http://msmgtoolkit.in/downloads.html), extract, and open "Toolkit\Start.cmd"
Download [Windows 11 ISO](https://www.microsoft.com/software-download/windows11) and move into "Toolkit\ISO"

1. Type "a" to agree the terms
2. In main menu go to "Source" and choose "Extract Source from DVD ISO Image" - point it to your downloaded ISO file
3. Go back and choose "Select Source from <DVD> Folder" - agree "y" all and pick an edition you have a licence for
4. Go back to main menu and select "Remove"
5. Choose "Remove Windows Components", and then "Select Windows Components":
6. In "Internet" pick only:

   * Adobe Flash For Windows
   * Edge Chromium Browser
7. Go back to "Multimedia" and pick only::

   * First Logon Animation
   * Speech Recognition
   * Windows System Assessment Tool
8. In "Privacy" pick "All Privacy Components"
9. In "Remoting" pick "All Remoting Components"
10. In "System Components" pick only:

    * Device Lockdown
    * Ease of Access Themes
    * Easy Transfer
    * File History
    * Manual Setup
    * Security Center
    * Steps Recorder
    * System Restore
    * Windows Backup
    * Windows Subsystem For Linux
    * Windows To Go
    * Wordpad
11. In "System Apps" pick only:

    * Assigned Access Lock App
    * Async Text Service
    * Windows Hello Setup
    * Calling Shell App
    * Capture Picker
    * Camera Barcode Scanner
    * Content Delivery Manager
    * Credential Dialog Host
    * Edge Classic Browser
    * Edge Developer Tools Client
    * Eye Control App
    * Lockscreen App
    * Map Control
    * Narrator QuickStart
    * OneDrive Desktop Client
    * OOBE Network Captive Portal
    * OOBE Network Connection Flow
    * Parental Controls
    * People Bar
    * Quick Assist App
    * Retail Demo Content
    * Setting Sync
    * Skype ORTC
    * Smart Screen
    * Take Test App
    * Windows Defender App
    * Windows Mixed Reality
    * Windows Reader (PDF)
    * Xbox Console Companion Back-end Client
    * Xbox Live
    * Modern External GPU Eject App
12. In "Windows Apps" pick only:

    * Alarms & Clock
    * Camera
    * Cortana
    * Feedback Hub
    * Films & TV
    * Gaming App
    * Get Help
    * Groove Music
    * Maps
    * My Office
    * News
    * People
    * Power Automate Desktop
    * Screen Sketch
    * Solitaire Collection
    * Sticky Notes
    * Tips
    * Todos
    * Voice Recorder
    * Weather
    * Widgets
    * Windows Mail
    * Xbox Game Bar Plugin
    * Xbox Game Bar
    * Xbox Identity Provider
    * Xbox Live In-Game Experience
    * Xbox UI
    * Your Phone
13. Go back to the main menu and in "Customize" select "Apply Tweaks" and pick:

    * Disable Automatic Driver Updates through Windows Update
    * Disable Automatic Downloading and Installing 3rd Party Apps
    * Disable Automatic Windows Upgrade
    * Disable Cortana App
    * Disable Microsoft Reserved Storage Space for Windows Updates
    * Disable Windows 11 Installer Hardware Check
    * Disable Windows Defender
    * Disable Windows SmartScreen
    * Enable Fraunhofer MP3 Professional Codec
    * Enable DISM Image Cleanup with Full ResetBase
    * Enable Windows Classic Context Menus
    * Hide Taskbar Chat Icon
    * Hide Taskbar Meet Now Icon
    * Hide Taskbar News and Interests
    * Hide Taskbar Task View Icon
    * Hide Taskbar Widgets Icon
14. In main menu to "Apply" select "Apply Source" go through "Cleanup Source Images" and "Apply & Save Changes to Source Images"
15. In main menu go to "Target" choose "Select Target" and then "Make a DVD ISO Image"

Use [Rufus](https://rufus.ie/en/) to make a bootable USB from your iso file in Toolkit\ISO
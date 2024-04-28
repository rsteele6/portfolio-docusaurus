---
sidebar_position: 2
id: HTML Cleaning Script
slug: html-cleaning-script
---

![](../../static/img/html.jpg)

# HTML Cleaning Script

## Description

This is a short script written in Python that performs the following on HTML files:

- Removes:
  - `<head>` and all its content
  - `<span>` (keeps content)
  - `<html>`
  - `<body>`
  - empty tags
  - all tag attributes (classes, etc.)
  - comments
  - trailing and leading spaces

I used the Beautiful Soup module to perform most of the operations. The script can be used to prepare raw HTML files for import into content management systems.

## Technologies Used

- Python
  - Beautiful Soup
  - re
  - argparse

<br /><br />

<a href="https://github.com/rsteele6/html-cleaning-script" class="article-btn button small github" target="_blank"><span class="fab brands fa-github"></span>&nbsp;&nbsp;View code on GitHub</a>

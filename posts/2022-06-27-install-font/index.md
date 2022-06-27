---
authors:
- jwher
description: 우분투에 폰트 설치하기
slug: install-font
tags:
- trouble
title: Install Font
draft: true
---

## 발생증상

```
Exception in thread "main" java.lang.InternalError: java.lang.reflect.InvocationTargetException
        at java.desktop/sun.font.FontManagerFactory$1.run(FontManagerFactory.java:86)
        at java.base/java.security.AccessController.doPrivileged(Native Method)
        at java.desktop/sun.font.FontManagerFactory.getInstance(FontManagerFactory.java:74)
        at java.desktop/sun.font.SunFontManager.getInstance(SunFontManager.java:249)
        at java.desktop/sun.font.FontDesignMetrics.getMetrics(FontDesignMetrics.java:265)
        at java.desktop/sun.java2d.SunGraphics2D.getFontMetrics(SunGraphics2D.java:861)
```

## 원인파악

### OpenJDK

### Docker Image

## 해결

```
$ apt install fontconfig -y

$ fc-list
/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf: DejaVu Serif:style=Bold
/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf: DejaVu Sans Mono:style=Book
/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf: DejaVu Sans:style=Book
/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf: DejaVu Sans:style=Bold
/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf: DejaVu Sans Mono:style=Bold
/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf: DejaVu Serif:style=Book

$ fc-cache -f -v
```

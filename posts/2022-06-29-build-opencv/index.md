---
authors:
- jwher
description: OpenCV 빌드하기
slug: build-opencv
tags:
- tech
title: Build OpenCV 
draft: true
---


```
export JAVA_HOME
export PATH
export ANT_HOME

sudo apt install build-essential
sudo apt install cmake git libgtk2.0-dev pkg-config libavcodec-dev libavformat-dev libswscale-dev
sudo apt install ant

git clone https://github.com/opencv/opencv.git
git clone https://github.com/opencv/opencv_contrib.git

cd opencv
mkdir build
cd build

cmake -D CMAKE_BUILD_TYPE=Release -DBUILD_SHARED_LIBS=OFF -D CMAKE_INSTALL_PREFIX=/usr/local ..

--     Java:                          
--     ant:                         /bin/ant (ver 1.10.7)
--     JNI:                         /root/jdk-11.0.12+7/include /root/jdk-11.0.12+7/include/linux /root/jdk-11.0.12+7/include
--     Java wrappers:               YES
--     Java tests:                  YES

make install
```

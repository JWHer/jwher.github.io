---
authors:
- jwher
description: OpenCV 자바로 빌드하기
slug: build-opencv-with-java
tags:
- tech
title: Build OpenCV with Java
---

## Java 환경변수 설정

```
export JAVA_HOME=<path of JDK>
# e.g
export JAVA_HOME=/usr/local/jdk-11.0.15+10
export PATH=$JAVA_HOME/bin:$PATH
```

## Cmake & build library 설치

```
sudo apt install build-essential
sudo apt install cmake git libgtk2.0-dev pkg-config libavcodec-dev libavformat-dev libswscale-dev
```

## Apache ant

```
sudo apt install ant
export ANT_HOME=<path of ant>
# e.g
export ANT_HOME=/usr/share/ant/
```

<details>
<summary>/bin/ant: 1: cd: can't cd to ...</summary>

심볼릭 링크 에러입니다

```
cd /bin
ll ant
lrwxrwxrwx 1 root root 20 10월 24  2019 ant -> ../share/ant/bin/ant*
# 존재하지 않는 위치

whereis ant
ant: /usr/bin/ant /usr/share/ant /usr/share/ant/bin/ant /usr/share/man/man1/ant.1.gz

sudo ln -snf /usr/share/ant/bin/ant /bin/ant

# 확인
ll /bin/ant
lrwxrwxrwx 1 root root 22  6월 29 18:31 /bin/ant -> /usr/share/ant/bin/ant*
```
https://velog.io/@jodawooooon/ant-%EB%B9%8C%EB%93%9C-%EC%8B%9C-%EC%97%90%EB%9F%AC-%EB%B0%9C%EC%83%9D-binant-1-cd-cant-cd-to-bin..shareantbin
</details>

## OpenCV 빌드

소스코드 받기
```
# in your workdir

# [Option1] use release version(recommended)
# https://github.com/opencv/opencv/releases
wget -O opencv.zip https://github.com/opencv/opencv/archive/refs/tags/4.6.0.zip
unzip opencv.zip

# [Option2] 최신 코드 clone
git clone https://github.com/opencv/opencv.git
git clone https://github.com/opencv/opencv_contrib.git

```

빌드하기

When OpenCV is built as a set of static libraries (-DBUILD_SHARED_LIBS=OFF option) the Java bindings dynamic library is all-sufficient, i.e. doesn't depend on other OpenCV libs, but includes all the OpenCV code inside.

```
cd opencv
mkdir build
cd build

cmake -D CMAKE_BUILD_TYPE=Release -DBUILD_SHARED_LIBS=OFF -D CMAKE_INSTALL_PREFIX=/usr/local ..

--     Java:                          
--     ant:                         /bin/ant (ver 1.10.7)
--     JNI:                         /root/jdk-11.0.12+7/include /root/jdk-11.0.12+7/include/linux /root/jdk-11.0.12+7/include
--     Java wrappers:               YES
--     Java tests:                  YES

sudo make install
# make -j<nums of core>
```

## 정상 작동 확인

opencv 가 정상설치된건지 확인하기 위해 

방금까지 사용했던 build 디렉토리에 아래 소스를 받고 

```
# in {workdir}/opencv/build
git clone https://github.com/opencv/opencv_extra.git
```

bin 디렉토리로 이동해서 아래와 같이 실행하면 

```
cd bin
./opencv_test_core 
```

Java 에서
```
import org.opencv.core.Core;
import org.opencv.core.CvType;
import org.opencv.core.Mat;
public class Hello {
   public static void main( String[] args ) {
        OpenCV.loadShared();
        System.loadLibrary(Core.NATIVE_LIBRARY_NAME);
        System.load("{workdir}/opencv/build/lib/libopencv_java460.so");
        // ...
    }
}
```

## Reference
[[공식]Installation in Linux](https://docs.opencv.org/4.x/d7/d9f/tutorial_linux_install.html)
[[공식]Introduction to Java Development](https://docs.opencv.org/4.x/d9/d52/tutorial_java_dev_intro.html)
[[Tistory]ubuntu 16 + opencv + java 설치기](https://cubenuri.tistory.com/197)

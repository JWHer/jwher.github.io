---
authors:
- jwher
description: OpenCV 자바로 빌드하기
slug: build-opencv-with-java
tags:
- tech
title: Build OpenCV with Java
---

![opencv](OpenCV_Logo_with_text.png)  
*OpenCV 자바로 빌드하기*

<!--truncate-->

<br/>

## 직접 빌드하는 이유
여기에서는 [openpnp](https://openpnp.org)에서 제공하는 [OpenCV](https://github.com/opencv/opencv)를 사용합니다.
OpenPnP는 오픈소스 소프트웨어 매니지먼트 툴로,
당신이 수정하고 빌드할 수 있도록 준비된 소프트웨어와 하드웨어에서 바로 실행할 수 있는 pick and place 시스템입니다.

하지만, OpenCV는 저작권 문제로 ffmpeg와 같은 동영상 인코더가 빠져있습니다.
openpnp에서 제공하는 OpenCV는 OpenCV의 softfork로 빌드되었기에, 마찬가지로 ffmpeg가 빠져있습니다.
따라서 직접 빌드해 주어야할 필요가 있습니다.

<br/>

## Java 환경변수 설정
<!-- 자바는 썬 마이크로시스템즈의 제임스 고슬링이 1995년에 개발한 객체 지향 프로그래밍 언어입니다.  
자바의 가장 큰 특징은, 컴파일된 바이트코드가 플랫폼 독립적이고 JVM을 통해 어디서든 동일하게 실행된다는 점입니다. -->
빌드하기전에 Java가 시스템 환경변수에 잘 등록되었는지 확인합니다.(우분투 Debian 기준)

```bash
$ export JAVA_HOME=<path of JDK>
# e.g
$ export JAVA_HOME=/usr/local/jdk-11.0.15+10
$ export PATH=$JAVA_HOME/bin:$PATH
```

<br/>

## Cmake & build library 설치
OpenCV를 빌드하기 위한 Cmake와 라이브러리를 설치해 줍니다.
```bash
$ sudo apt install build-essential
$ sudo apt install cmake git libgtk2.0-dev pkg-config libavcodec-dev libavformat-dev libswscale-dev
```

<br/>

## Apache ant
[Apache Ant](https://ant.apache.org)는 빌드 파일과 확장점간 의존성을 기술하기 위해 만들어진 자바 라이브러리와 CLI 툴입니다.

```bash
$ sudo apt install ant
$ export ANT_HOME=<path of ant>
# e.g
$ export ANT_HOME=/usr/share/ant/
```

<details>
<summary>/bin/ant: 1: cd: can't cd to ...</summary>

심볼릭 링크 에러입니다

```bash
$ cd /bin
$ ll ant
# 존재하지 않는 위치에 연결된 모습
lrwxrwxrwx 1 root root 20 10월 24  2019 ant -> ../share/ant/bin/ant*

$ whereis ant
ant: /usr/bin/ant /usr/share/ant /usr/share/ant/bin/ant /usr/share/man/man1/ant.1.gz

$ sudo ln -snf /usr/share/ant/bin/ant /bin/ant

# 확인
$ ll /bin/ant
lrwxrwxrwx 1 root root 22  6월 29 18:31 /bin/ant -> /usr/share/ant/bin/ant*
```

**Reference**  
[ant 빌드 시 에러 발생](https://velog.io/@jodawooooon/ant-%EB%B9%8C%EB%93%9C-%EC%8B%9C-%EC%97%90%EB%9F%AC-%EB%B0%9C%EC%83%9D-binant-1-cd-cant-cd-to-bin..shareantbin)
</details>

<br/>

## OpenCV 빌드

소스코드를 다운받습니다.
```bash
# in your workdir

# [Option1] use release version(recommended)
# https://github.com/opencv/opencv/releases
$ wget -O opencv.zip https://github.com/opencv/opencv/archive/refs/tags/4.6.0.zip
$ unzip opencv.zip

# [Option2] 최신 코드 clone
$ git clone https://github.com/opencv/opencv.git
$ git clone https://github.com/opencv/opencv_contrib.git

```

<br/>

build 폴더를 만들고 cmake를 이용해 makefile을 만들어 줍니다.

`-DBUILD_SHARED_LIBS=OFF` 옵선을 사용해 OpenCV를 정적 라이브러리 집합으로 빌드하면, 자바 바인딩 동적 라이브러리를 전부 충족시킵니다.
다시 말해, 다른 OpenCV 라이브러리에 종속되지 않지만, 모든 OpenCV 코드를 내부에 가지고 있게 됩니다.

```bash
$ cd opencv
$ mkdir build
$ cd build

# ffmpeg를 사용해 빌드하려면 -DWITH_FFMPEG=1 를 추가합니다
$ cmake -DCMAKE_BUILD_TYPE=Release -DBUILD_SHARED_LIBS=OFF -DCMAKE_INSTALL_PREFIX=/usr/local ..

# ant, JNI 등 설정값을 제대로 찾았는지 확인합니다.
--     Java:                          
--     ant:                         /bin/ant (ver 1.10.7)
--     JNI:                         /root/jdk-11.0.12+7/include /root/jdk-11.0.12+7/include/linux /root/jdk-11.0.12+7/include
--     Java wrappers:               YES
--     Java tests:                  YES

# ffmpeg를 함께 빌드했다면 다음도 확인해야 합니다.
Video I/O:
    DC1394:                      NO
    FFMPEG:                      YES
      avcodec:                   YES (58.54.100)
      avformat:                  YES (58.29.100)
      avutil:                    YES (56.31.100)
      swscale:                   YES (5.5.100)
      avresample:                NO
    GStreamer:                   NO
    v4l/v4l2:                    YES (linux/videodev2.h)
```

<br/>

OpenCV를 빌드합니다.
저는 멀티코어를 사용해서 빌드하면 에러가 났습니다.

```bash
# make -j<nums of core>
$ make

# 권한 문제가 있었으면 다음 명령어를 한번 더 실행시킵니다
$ sudo make install
```

<br/>

<details>
<summary>OpenCV 정상 빌드 확인</summary>

opencv 가 정상설치된건지 확인하기 위해 

방금까지 사용했던 build 디렉토리에 아래 소스를 받고 

```bash
# in {workdir}/opencv/build
git clone https://github.com/opencv/opencv_extra.git
```

bin 디렉토리로 이동해서 아래와 같이 실행하면 

```bash
cd bin
./opencv_test_core 
```

Java 에서
```bash
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
</details>

<br/>

## Reference
[[공식]Installation in Linux](https://docs.opencv.org/4.x/d7/d9f/tutorial_linux_install.html)  
[[공식]Introduction to Java Development](https://docs.opencv.org/4.x/d9/d52/tutorial_java_dev_intro.html)  
[[Tistory]ubuntu 16 + opencv + java 설치기](https://cubenuri.tistory.com/197)  

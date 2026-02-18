---
title: 파일 락(File Lock)
description: Linux에서 파일 락 메커니즘과 fcntl 사용법
draft: true
---

파일 락
```
root@instance-3:~# python3
Python 3.6.9 (default, Nov 25 2022, 14:10:45)
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import fcntl
>>> f = open('test.lock', 'w')
>>> fcntl.flock(f, fcntl.LOCK_EX)
>>>
```

다른 프로세스
```
root@instance-3:~# cat /proc/locks
107: FLOCK  ADVISORY  WRITE 365199 00:1f4:3155979 0 EOF
180: OFDLCK ADVISORY  WRITE -1 fe:01:1578779 0 EOF
339: OFDLCK ADVISORY  WRITE -1 fe:01:1578598 0 EOF
445: OFDLCK ADVISORY  READ -1 00:ce:6 0 EOF
```

file descriptor
```
root@event-fetcher-8665b4978c-hpr75:/app# exec 200>test.lock
root@event-fetcher-8665b4978c-hpr75:/app# ls -l /proc/$$/fd
total 0
lrwx------ 1 root root 64 Feb 27 01:19 0 -> /dev/pts/0
lrwx------ 1 root root 64 Feb 27 01:19 1 -> /dev/pts/0
lrwx------ 1 root root 64 Feb 27 01:19 2 -> /dev/pts/0
l-wx------ 1 root root 64 Feb 27 01:20 200 -> /app/test.lock
lrwx------ 1 root root 64 Feb 27 01:19 255 -> /dev/pts/0
root@event-fetcher-8665b4978c-hpr75:/app# exec 200>&-
root@event-fetcher-8665b4978c-hpr75:/app# ls -l /proc/$$/fd
total 0
lrwx------ 1 root root 64 Feb 27 01:19 0 -> /dev/pts/0
lrwx------ 1 root root 64 Feb 27 01:19 1 -> /dev/pts/0
lrwx------ 1 root root 64 Feb 27 01:19 2 -> /dev/pts/0
lrwx------ 1 root root 64 Feb 27 01:19 255 -> /dev/pts/0
```

그런데
```
root@instance-3:~# exec 200>test.lock
root@instance-3:~# flock -x -w 300 200
root@instance-3:~# cat /proc/locks
180: OFDLCK ADVISORY  WRITE -1 fe:01:1578779 0 EOF
339: OFDLCK ADVISORY  WRITE -1 fe:01:1578598 0 EOF
445: OFDLCK ADVISORY  READ -1 00:ce:6 0 EOF
# 없다! 하지만 락을 얻을 수 없음
root@instance-3:~# python3 -c 'import fcntl; fcntl.flock(open("test.lock", "w"), fcntl.LOCK_EX); print("ok")'
^CTraceback (most recent call last):
  File "<string>", line 1, in <module>
KeyboardInterrupt

root@instance-3:~# flock -u 200
root@instance-3:~# python3 -c 'import fcntl; fcntl.flock(open("test.lock", "w"), fcntl.LOCK_EX); print("ok")'
ok
# 그런데
root@instance-3:~# cat /proc/locks
179: OFDLCK ADVISORY  WRITE -1 fe:01:1578779 0 EOF
338: OFDLCK ADVISORY  WRITE -1 fe:01:1578598 0 EOF
444: OFDLCK ADVISORY  READ -1 00:ce:6 0 EOF
```

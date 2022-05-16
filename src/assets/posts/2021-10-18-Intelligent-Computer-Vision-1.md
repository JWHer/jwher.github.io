
<!-- more -->

<p align="center">
<img src="/assets/logos/computer_vision.svg" style="height: 40vh; object-fit:cover;"/>
</p>
 
*Intelligent Computer Vision 1(개요)*  

# 목차
* [수업교재](#수업교재)
* [Computer Vision](#computer-vision)
* [Image formation](#image-formation)
* [Digital Image Formation](#degital-image-formation)

## 수업교재  
*Class Materials*

* Multiple view geometry in computer vision (2nd)
* [Computer Vision: Algorithms and Applications (2010)](http://szeliski.org/Book/drafts/SzeliskiBook_20100903_draft.pdf)

## Computer Vision
*Szeliski p.1~28*

A theme in the development of this field has been to
**duplicate the abilites of human vision** by electronically
perceiving and understanding an image.

Goal of computer vision  
**=> Write computer programs that can interpret images.**

### Can computers match human vision
=> Mostly no
* humans are much better at "hard" things
* computers can be better at "easy" things

### Current state of the art (Application Area)
*Univ. Washington cse455 2012*
* Earth Viewers (3D modeling)
* Motion Capture
* Optical Character Recognition (OCR)
* Face detection
* Smile detection
* Object recognition
* Face recognition
* Motion capture
* Sports
* Smart cars
* Self-driving cars
* Robotics
* Vision in space
* Medical imaging

## Image Formation

E(x, y, z, lambda)
※ 좌표 + 빛의 파장

Camera(x, y, z, lambda) = E * R

*E: Incident light
*R: Reflectivity function

### Projection

Camera_projection(x', y', lambda) = Projection(Camera)

* Perspective: Pinhole  
=>  Pinhole effect  
  big: blurring  
  small: diffraction

* Orthogonal

### Sensitivity
V_2(lambda) - lambda

### Summary
The Image function f_c(x', y') (C = R, G, B) is formed as:  
f_c(x', y') = Int{ Camera_projection * V_c(lambda) } delta lambda

## Degital Image Formation
We have to discretize:
1. x', y' => x'_i, y'_j => Sampling
2. f_c(x'_i, y'_j) ∈ Range => Quantization

### Quantization to P levels
Typically P = 2^8 = 256 (8bit quantization)

### Color Depth
* Monochrome (1bit)
* Gray-scale (8bits)
* Color (8 or 16 bits)
* Ture color (24 or 32 bits)  
  RGB (24 bits)  
  RGB + Alpha (32bits)
  
### Color Space
* Humans (Hue Saturation Lightness/Brightness, HSL or HSB)
* CRT monitors (RGB) *additive
* Printers (Cyan Magenta Yellow Black, CMYK) *subtractive
* Compression (Luminance and Chrominance, YIQ YUV YChCr)  
Y = 0.3R + 0.59G + 0.11B  
U = (B-Y) * 0.493  
V = (R-Y) * 0.877

### Visible Spectrum
UV(400nm) ~ IR (700nm)

<br/>

## Tips

   == Classical Vision ==
1. Overview
2. Filtering (Edge detection)
3. Keypoint detection (Corner detection, SIFT ..)
4. Hough transform  
   == Multiple View Geometry ==
5. 2D geometry
6. 3D geometry
7. Camera Models and Calibration  
   == Deep Learnings ==   
8. Image Classification (BoW)
9. Object detection (VJ)
10. Image Segmentation (Graph-cuts)
11. Optical flow (Lukas-Kanade)
12. Pose estimation (DPM)
13. 3D Point cloud


### Reference  

2021 MIPAL, Gwak Nojun

## - JWHer  
좋은 글을 쓰고 싶습니다.

<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->

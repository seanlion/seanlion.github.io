---
layout:     post
title:      Github blog 운영 (1) - jekyll 블로그 테마 
permalink: blog/1
date:       2017-08-06
description: github 깃허브 블로그 테마에 대한 글입니다.
summary:    Fork한 jekyll blog 테마를 로컬로 옮기는 법
category: 	개발과 삽질
---

- - -
개요 : Github blog 로컬로 옮기기
- - -
####  gem jekyll 활용하기  

<br>
드디어 github 블로그를 구축했다. 꼬박 대여섯 시간 동안 고생하면서 테마를 찾았다. 로컬에서 차근차근 jekyll 설치 부터 올라오기에는 시간이 너무 많이 들 것 같아 테마를 찾았는데 마음에 드는 테마를 찾기가 너무 어려웠다. 
<br>
###### *github 블로그를 빠르게 구축해보고 싶다면 이 블로그를 참고!*     [Github blog 운영](http://recoveryman.tistory.com/321 "깃허브 블로그 만들기")
<br>
그렇게 여차여차 테마를 내 깃허브 레퍼지토리에 fork하고 config 수정도 하고 해서 내 꺼? 같은 블로그를 완성했는데 문제는 포스트를 어떻게 작성하면 좋을 지 모르겠다는 것?

알고 보니 대부분의 jekyll 기반 github 블로그들은 마크다운 형식의 문법을 사용한다는 것을 알게 되었다. 
기존의 HTML 문법 보다는 좀 더 직관적으로 알기 쉬운 문법 형태라는데 이 참에 
마크 다운 문법을 공부해보기로 했다. 

###### 마크 다운 문법에 대해 알고 싶다면? [참고 사이트](https://nolboo.kim/blog/2013/09/07/john-gruber-markdown/ "마크다운 페이지 번역")
<br/>
그렇게 마크다운이라는 것도 알게 되었는데 문제가 생겼다. 

Local에서부터 구축해 온 블로그는 변경 사항을 로컬에서 바로 확인할 수 있는데 
fork 해온 블로그는 어떻게 local에 옮기는 것인가?에 대한 문제로 잠시 멘붕에 빠졌었다. 

하지만 구글신께 물어본 결과 답을 얻을 수 있었다.

위에 내가 링크 한 사이트에도 나와있겠지만 우선 git clone을 해서 로컬로 옮겨 와야한다.
터미널을 켜고 내가 clone 하고 싶은 주소로 cd를 옮긴 뒤
```
git clone http:example.github/example/example.github.io
```
뭐 이런식으로 코드를 적으면 clone이 진행되고 로컬로 파일이 옮겨진다. 여기까진 하기 쉽다.

하지만 문제는 local서버에서 내 블로그 변경사항을 어떻게 즉각적으로 확인할 수 있는가였다.
변경 하나 할때마다 git push를 한다거나 github에서 수정하는 것은 시간적으로 비효율적이었다.

그래서 알아보니 
```
gem 'jekyll'
```
혹은
```
gem 'github-pages', group: :Jekyll_plugins
```
이 코드를 내부	gemfile에 옮겨 적는다. 

그리고 
`gem install bundler`를 터미널에 적는다. 아마 `bundler`라는 젬이 설치될 것이다. bundler라는 것은 간략하게 gem들을 간편하게 설치해주는 것인데 젬 하나를 설치하는 거면 직접 인스톨 해도 상관없지만 설치하려는 젬이 10개라면 20개라면...? 하나하나 설치하기가 너무 귀찮을 것이다.

그럴때 쓰는게 `bundler`라는 것이고 이제 터미널에 `bundle install` 혹은 `bundle`만 치면 알아서 gem을 설치해줄 것이다. 
<br>
아까 적은 `gem 'github-pages'`는 jekyll 젬이나 필요한 여타 젬들을 모아논 젬들이다.

이렇게 gem을 설치하고 이제 
```
bundle exec jekyll serve
```
를 하면 아마 문장들이 몇 개 뜨고 서버가 실행된다는 듯한 설명이 나올 것이다.

그리고 이제 localhost:4000(window기준)으로 접속해보면 로컬 서버에서 블로그가 나온다는걸 알수 있다!

local 서버에서 차근차근 블로그를 만들 수 있지만 jekyll 테마 fork를 활용하면 빠른 시간 안에 
그럴듯한 블로그를 잘 만들 수 있다. 그리고 lcoal 서버에서 약간의 커스터마이징이 들어가면 나만의 멋진 블로그를 만들 수 있다!

다음 시간에는 github 계정이 여러 개일 경우 git push 했을 시 발생했던 문제-예상해결안을 알아보겠다. 
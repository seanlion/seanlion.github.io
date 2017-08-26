---
layout:     post
title:      Github blog 운영 (3) - 블로그에 유튜브 동영상 삽입하기  
permalink: /Blog/4
date:       2017-08-26
summary:    Github 블로그에 마크다운 문법으로 유튜브 영상 삽입하는 법을 다룹니다.
category: 	Blog
---

오늘은 github 블로그에서 유튜브 동영상 삽입하는걸 포스팅 해보려 한다.

마크다운 문법을 알려주는 사이트에서 이미지 삽입은 비교적 다들 쉽게 가르쳐주는데 동영상 삽입은 보통 잘 알려주지 않는다. 보통 동영상 삽입은 `<iframe>`라는 코드를 많이 쓰는데 기본적으로 이걸 지원을 하지 않아서 그런지는 몰라도 가르쳐주는 문법 사이트를 잘 못봤다. 

나도 동영상을 넣고싶어서 이리저리 찾아봤는데 그러다 몇 가지 방법을 발견했다. 

오늘은 그 방법 중 그나마 쓸만한 2가지 방법을 소개해보고자 한다. 

#### * 이미지인척? 동영상을 삽입하는 방법이다. 

바로 이미지태그를 이용하는 방법. 

``` 
[![예제](http://img.youtube.com/vi/RlQEoJaLQRA/0.jpg)](https://youtu.be/RlQEoJaLQRA?t=0s) 

```
이런식으로 입력 된 코드는 이미지가 클릭되면 해당 동영상이 있는 사이트로 넘어가는 형식을 갖춘다. 

`![설명](이미지 링크)`

이것이 마크다운 이미지 삽입 문법인데 그걸 응용한 것이다. 저기 중간쯤에 보이는 `0.jpg`는 해당 유튜브 동영상 주소를 이미지화 시키는 것이다.0.jpg는 동영상 사이즈와 같은 크기의 캡쳐이고, 1.jpg, 2.jpg, 3.jpg는 썸네일이다.

`?t=0s`는 0초에 맞춰 재생이 되게 하는 코드이다. 즉 저 사진을 클릭하면 처음부터 시작하는 유튜브 동영상의 링크로 넘어가는 형태인 것이다. 

[![예제](http://img.youtube.com/vi/RlQEoJaLQRA/0.jpg)](https://youtu.be/RlQEoJaLQRA?t=0s) 

실제로 코드를 삽입한 예시이다. 

이미지처럼 보이지만 클릭하면 동영상으로 넘어간다. 

이렇게 동영상을 보여줄 수도 있지만 뭔가 좀 찝찝하다... 사람들이 이걸 동영상으로 인지할지 안 할지도 모르겠고 클릭을 할 지 안 할지도 모를 것 같다...

<br>

<p align ="middle">	
 <img src="http://1.234.27.27/Exo/AppImg3/e11295319.png" alt="alt text" width = "40%">
</p>

<br>

그래서 좀 더 찾아봤다. iframe이 안 먹는이상 동영상이 진짜 링크 달린 것 같이 보이는 법을 찾고 싶었다.

결국 찾았다.

#### * 동영상 온전히 삽입하는 방법

간단히 말하면 `_includes` 를 활용한 방식인데 우선 _include 폴더에 동영상을 삽입할 코드를 넣을 html파일을 하나 만들고

```
<iframe width="560" height="315" src="https://www.youtube.com/embed/{{ include.id }}" frameborder="0" allowfullscreen></iframe>
```

이 코드를 집어 넣는다. 샘플 코드이기 때문에 width와 height는 본인이 원하는대로 넣어도 된다. 

그리고나서 원하는 포스팅 파일에 
{% highlight html %} {% raw %} {% include 파일명.html id="유튜브동영상url" %} {% endraw %} {% endhighlight %}

이 코드를 삽입한다. 
id는 유튜브 주소(ex. https://www.youtube.com/watch?v=A_zuHvBlvkA)를 보면 ?v= 뒤에 있는 것을 말한다.

{% include youtubeplayer.html id="QO9K61NkzuA" %}

<br>

그러면 이렇게 깔끔하게 동영상이 들어간 것을 확인할 수 있다.

혹시 Responsive 삽입을 원하면 아래에 사이트를 참고하길 바란다.

[유튜브 Responsive 임베딩](http://www.halryang.net/embed-youtube-responsively/)

p.s 더 찾아보니까 더 쉬운 방법으로 Youtube Jekyll Plugin이라는게 있는 것 같다. 궁금하신 분은 이 Plugin에 대해 더 찾아보셔도 좋을 것 같다.


- - - 

###### 참고자료 : [how to easily embed youtube videos in jekyll](http://www.adamwadeharris.com/how-to-easily-embed-youtube-videos-in-jekyll-sites-without-a-plugin/)
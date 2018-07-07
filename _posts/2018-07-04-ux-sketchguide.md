---
layout:     post
title:      스케치 뽀개기(자료 모음집)
permalink: ux/25
description: UI 디자인을 공부하려고 하면 반드시 들어볼 수 밖에 없는 툴 스케치 sketch. sketch app을 학습하면서 아쉬운 점이 있었다. 대부분 사람들이 주로 스케치를 소개할 때, 일러스트와 비슷하니 배우기 쉽다고 말한다.아무래도 디자이너를 베이스로 소개하다보니 배우는 사람의 기본 지식이 있다는 가정을 하는 것 같다.   하지만, 나 같이 비 디자이너 출신으로서 시작하는 사람들은 그 기본 지식 조차 없는 경우가 많다.그래서 직접 공부한 정보를 내가 이해할 수 있는 수준으로 자료를 한 곳에 모아 정리해보았다.
date:       2018-07-04
summary:    비 디자이너들을 위한 스케치 기초 자료 모음집입니다.
category: 	UX와 디자인
---


<p align ="middle">	
 <img src="https://cdn-images-1.medium.com/max/1200/1*1QbPl2S6OlEqFZIv0e9loA.jpeg
" alt="alt text" width = "100%">
</p>


<br>


UI 디자인을 공부하려고 하면 반드시 들어볼 수 밖에 없는 툴 스케치.

이 툴을 학습하면서 아쉬운 점이 있었다.  
대부분 사람들이 주로 스케치를 소개할 때, 일러스트와 비슷하니 배우기 쉽다고 말한다.

아무래도 디자이너를 베이스로 소개하다보니 배우는 사람의 기본 지식이 있다는 가정을 하는 것 같다.  
하지만, 나 같이 비 디자이너 출신으로서 시작하는 사람들은 그 기본 지식 조차 없는 경우가 많다.

그래서 처음 공부할 때 시행착오를 많이 겪었고 지금도 겪고 있다.  
유튜브를 많이 참조했고, 구글링도 많이 해보고, 커뮤니티에도 물어보며 조금씩 지식을 정리해 나갔다.    
(물론 주로 영어로 된 글이나 영상들이 많아서 그것들 위주로 보고 학습하긴 했다.)

그리고 직접 공부한 정보를 내가 이해할 수 있는 수준으로 자료를 한 곳에 모아 정리해보았다.

- - -

## Sketch Crash Course



#### Artboard

스케치는 캔버스로 이루어져있다. 
Sketch 의 캔버스는 사이즈에 제한이 없다. 어떤 방향으로든 원하는 데까지 스크롤할 수 있다.

다만 우리는 작업할 때 특정 사이즈를 정해놓고 작업을 한다. 
그럴 땐 artboard(아트보드)라는 곳에서 작업을 하는데, 아트보드는 쉽게 말해 규격이 정해진 스케치북(캔버스)라고 생각하면 된다.
 
TIP: UI 작업을 할 때 다중 화면을 제작하고자 할 경우 Alt를 누른 상태에서 아트보드를 클릭하고 이동하면 복사가 된다.
Shift를 눌러 수직 수평에 맞춰 복사하면 깔끔하게 아트보드를 유지할 수 있다.
(스케치앱 내에서 Alt키는 복사 기능도 있지만 오브젝트 사이의 거리를 확인하는 기능도 있다.)

<br>

#### Vector

스케치는 벡터 기반으로 이루어진 툴이다.
비트맵 방식의 툴(ex. photoshop)이 있고 벡터 기반의 툴(ex. sketch)이 있는데 아래의 글에서 벡터와 비트맵의 차이를 볼 수 있다.

* [벡터와 비트맵의 차이](http://blank2.tistory.com/7)

<br>


#### Shape

스케치는 기본적으로 라인/도형을 가지고 디자인하는 툴이다.  
라인이 무엇이고 도형이 무엇인지는 [이 글](https://sketch3doko.wordpress.com/documentation/04-shapes/)로 대체하겠다. 

이 글에서는 단축키를 소개하는 걸로 대신하겠다.

선 (Line) : L  
사각형 (Rectangle) : R  
원 (Oval) : O  
글자(Text) : T  

더 많은 단축키를 보고 싶으면 이 글을 참고하기 바란다.

* [스케치 단축키](https://brunch.co.kr/@kimee/13)

<br>


#### Resizing

스케치에는 리사이징이라는 기능이 있다.
반응형 디자인을 할 때 상당히 유용하게 쓴다고 한다.

기본적인 개념은 컴포넌트의 width, height 혹은 아트보드의 corner 나 edge 등에 컴포넌트를 고정시킴으로써
아트보드의 사이즈를 조정해도 컴포넌트가 영향을 받지 않게 하는 것이다.

백문이 불여일견이니 영상으로 대체하겠다.  


{% include youtubeplayer.html id="VOJ_2TTOZAo" %} 


화면만 봐도 대부분 이해할 수 있을 것이다.  
더 구체적인건 직접 해보면 바로 이해할 수 있다.

<br>



#### Fill

fill은 컴포넌트의 색깔을 채우는 작업이다.
6가지의 fill 형태가 있다.

1) Flat Color : 색을 고르거나 RGB값을 입력합니다. (A는 투명도)

2) Linear Gradient : 선형 그라디언트는 빛이 들어오는 듯한 자연스러운 느낌을 줄 수 있습니다. 더 정밀한 그라디언트를 위해서 Color Stop을 추가할 수 있습니다.  
Color Stop (원하는 위치에 더블 클릭하면 추가됩니다.)  

3) Radial Gradient : 버튼이나 오브젝트에 둥근 입체감을 만들때 적절합니다.  

4) Angular Gradient : 개인적으로 이미지 랜더링을 할 때 금속 질감을 위해 많이 사용하던 그라디언트 도구입니다.  

5) Pattern Fill : 특정 Shape에 패턴을 지정하거나 이미지를 넣을 때 쓰는 도구입니다. Choose Image버튼을 클릭하면 이미지를 불러올 수 있습니다.   

6) Noise Fill : 타입별로 노이즈를 줄 수 있습니다. 강도는 조절 가능.  

<br>


#### Border

border는 컴포넌트의 윤곽선을 그리는 작업이다.

fill의 1~4번 형태를 가지고 있다.

다만 border만 유일하게 가지는게 있는데, ends와 join이다.

Ends는 선이 끝나는 지점 처리, Joins는 다각형일 때 모서리가 굴러가는 모양을 의미한다. 
아래 Dash(선의 길이)와 Gap(사이 거리)에 수치를 입력하면 점선으로 표현할 수 있다.

<br>

#### Blending

쉽게 말하면 레이어와 색을 섞으면서 여러가지 효과를 주는 작업이다.  
기저에 깔리는 base layer와 효과의 대상인 blend layer, 두개의 결과물인 result color로 이루어진다.  

여러가지 효과가 있지만 백문이 불여일견이니, 영상으로 대체하겠다.
아래의 영상은 어도비 포토샵에서 blending 효과를 주는 것이지만, 스케치의 blending과 가짓수만 다를 뿐,
원칙은 똑같으니 보고나면 스케치의 blending을 이해하기 쉬울 것이다.

[Blending Modes Explained - Complete Guide to Photoshop Blend Modes]

{% include youtubeplayer.html id="MsukMXtEYFQ" %} 

<br>

영상을 보고나서는 만들어놓은 예시파일을 통해 한번 실습해보면 될 것 같다.  

[예시파일](https://www.dropbox.com/s/0ec6lod3cem4hbq/blending_example.sketch?dl=0)

<br>


#### Shadow

그림자를 넣을 수 있는 기능이다.  

x 축과 y축, spread, blur를 이용해서 만드는데
이것도 직접 보는게 이해하기 쉽다.

{% include youtubeplayer.html id="2qVVpDR2A14" %} 


<br>


#### Blur

컴포넌트를 흐리게 만드는 기능이다.
4가지의  blur가 있다.

* 가우시안 흐림 Gaussian Blur: 이는 레이어를 일정한 간격으로 가로질러 흐리게 한다.  
* 동작 흐림 Motion Blur: 오직 한 방향으로 흐려지며, 움직임 착시를 만들어 낸다.  
* 줌 흐림 Zoom Blur: 특정 지점에서부터 흐릿하게 한다.  
* 배경 흐림 Background Blur: 레이어 뒤쪽의 컨텐츠를 흐리게 한다.

background blur tip: 올바른 효과를 얻기 위해, 반드시 레이어에 (반)투명 채움- (semi)transparent fill 을 가져야 한다. 
그렇지 않으면 흐림 효과가 보이지 않을 수 있다.  
헌데 background blur는 실무에서 서비스의 속도를 느리게 할 수 있어서 잘 쓰이지않는다고 한다.

<br>


#### Vector 편집

스케치는 기본적으로 벡터 기반의 툴이기 때문에 벡터 편집을 할 수 있다.

편집 시 4가지의 옵션이 있다.

* Straight: 쉐이프에 이 모드를 적용하면, 어떤 작은 제어점도 없으며 기본적으로 직선이 된다.  
* Mirrored: 제어점들은 서로를 반영한다. 서로 반대편에 있으며 main point 로부터 동일한 거리에 있다.   
만약 벡터 점이 직선이 아니라면, 이것이 디폴트 default 이다.
* Asymmetric: 제어점과 main point 간의 거리가 독립적이다. 그러나 그들은 서로 거울같이 동작한다.
* Disconnected: 제어 점들은 완전히 다른 것과 독립이다.

사실 나도 설명이 어려워서 공식문서의 번역본 내용을 발췌해봤는데, 읽어봐도 어렵다..

아래의 영상을 보고 이해도를 높이기 바란다.  

* [Sketch 3 Tutorial Drawing Vector Shapes](https://www.youtube.com/watch?v=GWueR0dgt2A)

{% include youtubeplayer.html id="2qVVpDR2A14" %} 

<br>


#### Closed/Open path

스케치의 도형들은 점과 점으로 이루어져있다.
그 점과 점 사이를 연결하는 길(?)을 path라고 하는데, 그것들을 close 할 수 있고 open 할 수 있는 기능이다.
기본적으로는 closed 되어있는데, 이것을 open 시키면 첫번째 점과 마지막 점 사이의 path가 사라지게 된다.

예시 이미지)
<br>

<p align ="middle">	
 <img src="https://www.sketchapp.com/images/documentation/shapes/open@2x.jpg" alt="alt text" width = "70%">
</p>


<br>



#### Boolean(union/subtract/intersect/difference)

스케치에서 2번째로 많이 쓰는 기능이라고 생각한다.
주로 아이콘을 그릴 때 많이 쓰는데, 컴포넌트를 합치고, 빼고, 교차시키는 작업이라고 생각하면 된다.

4가지 기능이 있는데, 각각의 기능은 다음과 같다.

* Union: union의 결과는 두 벡터의 영역이 합해진 벡터가 된다. (합집합)
* Subtract: subtract의 결과는 하위 쉐이프로부터 제거되어진 상위 쉐이프의 영역이 벡터가 된다. (차집합)
* Intersect: intersect의 결과는 원래 쉐이프가 겹쳐진 부분을 포함하는 벡터가 된다. (교집합)
* Difference: difference는 정확히 겹쳐지지 않는 부분이 벡터가 된다. intersect의 정반대가 된다.

(쉽게 생각하면 예전 고등학교 수학 시간에 배운 집합을 생각하면 된다!)

사실 이렇게 글로만 보면 이해하기 어렵다.

[스케치 공식문서에 나오는 영상](https://www.sketchapp.com/docs/shapes/boolean-operations/
)을 보고, 

그래도 이해가 안되면 
invision에서 만든 이 영상을 보길 추천한다.

{% include youtubeplayer.html id="T_iayKP2-Xg" %}



<br>



#### Flatten

컴포넌트 안에 있는 패스를 평탄하게 만드는 기능이다.  
쉽게 말하면 컴포넌트 안에 있는 여러개의 패스를 하나로 합치는 작업이다.  

물론, 모든 패스를 하나로 평탄화할 순 없다.
구멍을 내부에 가지고 있는 컴포넌트는 항상 두개의 패스로 묘사되어야 한다.  
하나는 외부 패스 outer path 를 위한 것이고 다른 하나는 내부 패스 inner path 를 위한 것이기 때문이다.

<br>


#### Mask

쉽게 말해서, 어떤 컴포넌트 위에 특정 레이어를 덮어 씌우는 작업이다.

이것도 영상을 통해 빠르게 이해할 수 있다.

{% include youtubeplayer.html id="HVvHsmAs6vk" %}

<br>

tip: 마스크를 하고 다른 컴포넌트를 그리면 그 컴포넌트도 마스킹 되곤 하는데 그럴 때 마스크를 제한할 수 있는 기능이 있다.  
* 메뉴에서 Edit > Ignore Underlying Mask 클릭하면 된다.  
그러면 해당 레이어와 그것 위에 있는 어떤 레이어든 더 이상 마스크되어지지 않는다.

<br>


#### Scissors

가위로 path를 자를 수 있는 기능. 벡터 편집에서 지정한 점과 점 사이만 자를 수 있다.

<br>


#### Outline

border 형태로 만들어진 컴포넌트를 fill 형태로 변환하는 기능이다.

<br>


#### File type

스케치를 쓰다보면 여러가지 타입의 파일을 쓰게 된다.

대표적으로는 png,jpg, gif, svg 등이 있다.

* [이미지 파일명 뒤에 붙는 JPG, GIF, PNG 포멧의 장단점과 차이점](http://seo-apl.tistory.com/18)    
* [“JPG와 PNG의 차이점은?” 기본적인 이미지 파일 형식 이해](http://www.itworld.co.kr/news/98431)   
* [Web에서 PNG , GIF, JPEG , SVG 중 어떤 것을 사용하면 좋을까요?](https://medium.com/@soeunlee/web%EC%97%90%EC%84%9C-png-gif-jpeg-svg-%EC%A4%91-%EC%96%B4%EB%96%A4-%EA%B2%83%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%98%EB%A9%B4-%EC%A2%8B%EC%9D%84%EA%B9%8C%EC%9A%94-6937300e776e)

<br>


#### Round to pixel

위치와 크기가 소숫점인 경우 정수로 바꿔주는 기능이다. 
다만 의도한 소숫점도 정수로 교정하면서 도형이 깨지는 사례가 있다.

예시)  3x3 인 상태에서 x 좌표가 정수가 아닌 경우 round to pixel 부작용

<br>

<p align ="middle">	
 <img src="https://scontent.ficn3-1.fna.fbcdn.net/v/t1.0-9/36280412_10156465642647937_5286935944866299904_n.jpg?_nc_cat=0&oh=ccdff9693766b46f7ef87713cffbf026&oe=5BE1B6D7" alt="alt text" width = "70%">
</p>


<br>


#### Symbol

스케치의 핵심 기능이다.
제일 많이 쓰는 기능이기도 한데, 설명은 아래의 글들을 보면 좋을 것 같다.

* [스케치 공식 문서](https://www.sketchapp.com/docs/symbols/)  
* [공식문서 번역본](https://p-j-m.github.io/design-compass/symbol.html)

다음은 이해를 돕기 위한 영상들이다.

* [Understanding Symbols on Sketch 3](https://www.youtube.com/watch?v=f01QjGBqbT4)

{% include youtubeplayer.html id="f01QjGBqbT4" %}

<br>

* [Creating a Button System with Nested Symbols on Sketch App](https://www.youtube.com/watch?v=_bjqVF7Fvg4)

{% include youtubeplayer.html id="_bjqVF7Fvg4" %}

<br>


* [Overriding Colors in Sketch](https://www.youtube.com/watch?v=z_zWfVES5CA)

{% include youtubeplayer.html id="z_zWfVES5CA" %}

<br>


* [Advanced symbol in Sketch(심볼 관리 잘 하는 법)](https://www.youtube.com/watch?v=2PvqgI3Jo8Q&index=91&list=WL&t=1621s)

{% include youtubeplayer.html id="2PvqgI3Jo8Q" %}

<br>


#### Icon

스케치를 쓰다보면 이걸로 아이콘도 많이 그리게 되는데, 그럴 때 도움이 되는 영상과 글들이다.

* [[강의]아이콘 그리는 강의(무료 - icon by sketch and illustrator)](http://introtoicons.com/)

* [[글]좋은 아이콘을 만드는 6단계](https://brunch.co.kr/@ultra0034/6)

* [[글]스케치 아이콘 라이브러리](https://brunch.co.kr/@blckschrl/37)

* [[글]안드로이드 앱 SVG 아이콘 적용기 — 왜 SVG로 갈아탔는가?](https://dailyhotel.io/%EB%94%94%EC%9E%90%EC%9D%B8-%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C-%EC%95%B1-svg-%EC%95%84%EC%9D%B4%EC%BD%98-%EC%A0%81%EC%9A%A9%EA%B8%B0-%EC%99%9C-svg%EB%A1%9C-%EA%B0%88%EC%95%84%ED%83%94%EB%8A%94%EA%B0%80-99c57cd84240)

* [[글]SVG 아이콘 사용하기(프론트엔드)](https://junojunho.com/front-end/svg-icon)

* [[영상]Designing 16px Icons in Sketch](https://www.youtube.com/watch?v=5TF8JXvlInA)

{% include youtubeplayer.html id="5TF8JXvlInA" %}

<br>

* [[영상]Dynamic Icons in Sketch](https://www.youtube.com/watch?v=1rJ1WyQ6lU0)

{% include youtubeplayer.html id="1rJ1WyQ6lU0" %}

<br>


#### Pixel Perfect

스케치이든, 일러스트이든 디지털 환경에서 디자인을 할 때 픽셀을 퍼펙트하게 맞추는 것은 중요하다.  

* [[참고 글]pixel perfect(픽셀 퍼펙트를 위하여)](https://medium.com/sketch-app-sources/getting-the-pixels-right-in-sketch-2386c730af90)

<br>

#### Material Design

구글에서 만든 design language. 

내가 아는 디자이너분 께선 이걸 1000번 정도 보면 디자인 마스터가 될 수 있을 것이라 하시기도 했다.
* [Material 2.0에 관한 영상](https://www.youtube.com/watch?v=1Dh8ZBQp9jo&t=76s)
* [머테리얼 2.0 공식 홈페이지](https://material.io/)

<br>

#### Atomic Design

디자인 이론 중의 하나이다.

디자인 요소를 원자같이 가장 최소 단위로 만들고 상위 요소를 디자인해서, 작업물 자체가 하나의 유기물 처럼 작은 단위의 요소들로 이루어지게 하는 디자인 시스템 방법론(?)이라고 볼 수 있다.

* [[참고 영상]Atomic Design: Create Design Systems, Not Pages](https://www.youtube.com/watch?v=wcAl0VXYBGE)

{% include youtubeplayer.html id="wcAl0VXYBGE" %}

<br>


#### 슥 훑어보기 좋은 스케치 튜토리얼

* [스케치 앱 튜토리얼 1편](https://www.vobour.com/%EC%8A%A4%EC%BC%80%EC%B9%98-%EC%95%B1-%ED%8A%9C%ED%86%A0%EB%A6%AC%EC%96%BC-1%ED%8E%B8-%EC%B4%9D-5%ED%8E%B8-r1fqygnhim)  
* [튜토리얼 2편](https://www.vobour.com/%EC%8A%A4%EC%BC%80%EC%B9%98-%EC%95%B1-%ED%8A%9C%ED%86%A0%EB%A6%AC%EC%96%BC-2%ED%8E%B8-%EC%B4%9D-5%ED%8E%B8-)  
* [튜토리얼 3편](https://www.vobour.com/%EC%8A%A4%EC%BC%80%EC%B9%98-%EC%95%B1-%ED%8A%9C%ED%86%A0%EB%A6%AC%EC%96%BC-3%ED%8E%B8-%EC%B4%9D-5%ED%8E%B8-skqckg2s8z)  
* [튜토리얼 4편](https://www.vobour.com/%EC%8A%A4%EC%BC%80%EC%B9%98-%EC%95%B1-%ED%8A%9C%ED%86%A0%EB%A6%AC%EC%96%BC-4%ED%8E%B8-%EC%B4%9D-5%ED%8E%B8-syq-e3him)  
* [튜토리얼 5편](https://www.vobour.com/%EC%8A%A4%EC%BC%80%EC%B9%98-%EC%95%B1-%ED%8A%9C%ED%86%A0%EB%A6%AC%EC%96%BC-5%ED%8E%B8-%EB%A7%88%EB%AC%B4%EB%A6%AC-%EC%B4%9D-5%ED%8E%B8-)  

<br>

- - -

나도 아직 배우는 단계이고, 전문 디자이너가 아니기 때문에 틀린 내용이 있을 수 있다.
그런 것들은 언제든지 댓글 혹은 메일로 주시면 바로바로 수정해보겠다.

이 글은 꾸준히 업데이트 해볼 예정이다.

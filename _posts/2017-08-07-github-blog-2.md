---
layout:     post
title:      Github blog 운영 (2) - 다른 계정으로 인한 Git push 오류 
permalink: blog/2
date:       2017-08-07
description: github 깃허브 푸시 오류에 대한 글입니다.
summary:    Git push 오류로 인한 고군분투기
category: 	개발과 삽질
---
저번 시간에는 Fork한 내 블로그 테마를 로컬에 안착시키는 점을 다루어보았다. 

이번 시간에는 로컬에서 수정 후 계정이 여러 개 일 때 github-push오류를 살펴보겠다. 사실 나도 완벽하게 말끔히 해결 한 것은 아니라 이 해결책에 대해 아시는 분이 있다면 댓글로 가르쳐주시면 좋을 것 같다. 

사건의 발단은 이러했다.

마음에 드는 jekyll 테마를 fork 해와서 로컬 서버에 안착해놓은 나는 수정을 하고 github으로 push를 보내려했다.

그러자 갑자기 이상한 오류가 떴다.
```
remote: Permission to vicsean/vicsean.github.io.git denied to seanlion.
fatal: unable to access 'https://github.com/vicsean/vicsean.github.io/': The requested URL returned error: 403
```

사실 내 github 계정은 2개이다. 
지금 쓰는 blog 계정은 ID가 seanlion인데 이 계정이 내 로컬 git에 먼저 등록이 되어있었다.

그 후 vicsean이라는 id를 가진 부 계정을 만들었는데 원래는 이 id로 블로그를 시작하려했다. (새 출발 하는 마음으로?)
 
그래서 vicsean이라는 id로 접속하고 그 계정으로 push를 보냈는데 저런 코드가 뜬 것이다..! 사실 http 형식으로 push하면 계정 id와 비밀번호를 요구하는 칸이 떠서 어느 계정으로 미리 접속되어있든 상관이 없다. 따라서 원래 push는 무리없이 진행되어야 했다... 

###### http형식과 다른 형식이 궁금하다면?  [git-프로토콜](https://git-scm.com/book/ko/v1/Git-%EC%84%9C%EB%B2%84-%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C)

몇 번 더 요리조리 push를 시도해 봤지만 계속 실패했고 나는 이 놈?이 쉽게 물러갈 놈이 아니라고 생각했다.

그래서 구글에 바로 검색해보았고 이런 글을 발견했다. 
<br>

<img src ="/images/github_pusherror.PNG" alt ="alt text" width="750" height=""/>

<div class ="align-center"><em>출처 : github help</em></div>

<br>
문제를 보니 다른 deploy key를 쓰고 있어서 지금 레퍼지토리에 접근 권한이 없다는 것이었다. 해결하기 위해서는 그 key를 지우거나 내가 쓰려는 계정 key를 추가하는 것이었다. 

나는 key를 지우기보다는 key를 하나 더 추가하는 걸 선택해봤다.

1. 기존의 Key 확인해보기

앞에 참조해논 사이트를 보셨으면 아시겠지만 git의 형식은 http,ssh,local 등 몇 가지로 이루어져있다. 
여기서의 key는 SSH형식으로 만들어지는데 우리는 먼저 이 SSH key가 있는지 확인해보아야한다. 

[Checking for existing SSH keys](https://help.github.com/articles/checking-for-existing-ssh-keys/) 이 사이트를 보면 방법이 자세하게 나와있는데 나는 간략하게 한번 설명해보겠다. 

우선 터미널을 열고 `ls -al ~/.ssh`라고 쳐보면 무언가가 뜬다.
원문에서는 default 값으로 몇 가지가 뜰 것이라 말하는데 종류는 다음과 같다.
- id_dsa.pub
- id_ecdsa.pub
- id_ed25519.pub
- id_rsa.pub

이런 형식의 파일이 있다면 여러분은 key를 가지고 있는 것이다.


자 그럼 이제 새로운 key를 만들어보자.

터미널에 `ssh-keygen -t rsa -b 4096 -C "git hub 이메일주소"`라고 치면 새로운 SSH key를 생성해준다.

아마 그 이후에 ```"Enter a file in which to save the key "```라는 문장이 나올텐데 key save 명을 지정해주는 문장이다. 
그냥 enter를 누르면 기본 값으로 지정된다. 나는 id_rsa2로 입력했었다. 

그 이후에 passphrase, 즉 비밀번호를 설정하면 key가 생성된다.

매번 생성한 SSH key로 접속할 시 passphrase를 쳐야 하는데 그것이 싫다면 SSH agent라는 걸 설정해줄 수 있다. 
SSH agent에 관해서는 이 글을 참고하기 바란다. [Adding your SSH key to the ssh-agent](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)

이제 생성한 SSH key를 복사를 한다. 터미널에서 `clip < ~/.ssh/생성한 파일명.pub`라고 치면 clipboard에 복사가 완료된다.
- 그 후 github 페이지 프로필 - settings에 들어간다.
- settings - SSH and GPG keys에 들어간다.
- 타이틀 칸에 key 제목을 적고 key 칸에 복사해온 키를 붙여넣는다.
- 그리고 Add SSH key를 누른다!


위 과정을 완료한 후 로컬 터미널에서 push를 ssh형식으로 하면 push가 완료 될 것이다. 

이 오류를 해결하는 다른 방법이 있다면 댓글로 알려주길 바란다. 

---
layout:     post
title:      Git 뽀개기(자료 모음집) 
permalink: blog/23
description:  스터디를 하다가 깃(git)과 깃허브(github)에 대해 설명할 시간이 있었다. 깃 git을 아예 모르는 사람들에게 설명하는게 쉬운 일이 아니었지만, 간단한 풀 리퀘스트에도 만족해하시는 걸 보니 뿌듯해지더라.그래서 준비했다. 깃을 모르지만 알고싶은 사람들을 위해 자료를 모아보았다. 깃을 공부하기 위해 봤던 영상이나 글들 혹은 누군가에게 가르쳐주기 위해 소개해주었던 자료들을 한 군데 모아보았다.
date:       2018-07-07
summary:    (비)개발자들을 위한 Git과 Github 기초 자료 모음집입니다.
category: 	개발과 삽질
---

<p align ="middle">	
 <img src="http://ipengineer.net/wp-content/uploads/2015/04/git-logo.jpg" alt="alt text" width = "60%">
</p>


<br>


스터디를 하다가 깃(git)과 깃허브(github)에 대해 설명할 시간이 있었다.
깃을 아예 모르는 사람들에게 설명하는게 쉬운 일이 아니었지만, 간단한 풀 리퀘스트에도 만족해하시는 걸 보니 뿌듯해지더라.

그래서 준비했다.
깃을 모르지만 알고싶은 사람들을 위해 자료를 모아보았다.
깃을 공부하기 위해 봤던 영상이나 글들 혹은 누군가에게 가르쳐주기 위해 소개해주었던 자료들을 한 군데 모아보았다.

사실, 이 글을 안 보더라도 생활코딩 같이 잘 되어있는 온라인 교육사이트에서 통째로 강의를 들으면 이해가 빠르겠지만, 영상을 다 보기 귀찮거나 단축키, 코드 같은걸 매번 빼먹으시는 분들은 이 글이 도움이 되지않을까 싶다.

그리고 뛰어난 git 전문가는 아니기에 피드백이나, 틀린 내용이 있으면 언제든 댓글이나 메일로 문의 주시면 좋겠다.
모든 자료는 터미널에 치는 CLI(커맨드 라인 인터페이스) 기준이다.
CLI는 쉽게 말해 예전에 봤던 MS-DOS같이 그냥 코드만 치는걸 말한다.

<br>

<p align ="middle">	
 <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/MS-DOS_5.00.490_Beta.png" alt="alt text" width = "60%">
</p>


<br>

- - -

## Git Crash Course

#### 깃(Git) 이해하기

[[영상]Git : 버전관리란 무엇일까요?](https://www.youtube.com/watch?v=XUEuYq64HKI)

{% include youtubeplayer.html id="XUEuYq64HKI" %} 


<br>

* [[글]Git 이란 무엇인가](https://medium.com/@psychet_learn/git-%EC%82%AC%EC%9A%A9%EB%B2%95-1%EA%B0%95-git%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-340438d9a69f)

<br>

#### Git 설치 유무 확인하기

1.우선 터미널을 킨다  
(맥에선 스포트라이트 켜고 terminal이라고 치면 나온다. or 응용프로그램 → 유틸리티 → 터미널)  
윈도우에선 시작메뉴로 가서 → 모든 프로그램 → 보조프로그램 → 명령 프롬프트.)

2.git --version 을 쳐본다.

3.무언가 숫자가 뜨면 git이 있는 것. 안뜨면 설치하러 가자.


<br>

#### Git 설치

[지옥에서 온 Git : 설치 - mac]

{% include youtubeplayer.html id="nw0x0cvg-iM" %} 

<br>

[다운로드 링크](https://git-scm.com/downloads)

- - -

※ 앞으로 나올 {}은 다 생략해야 됩니다.


#### 로컬 저장소에 git을 위한 폴더 생성하기

mkdir {디렉토리}  # example code : mkdir ~/Documents/banana

(mkdir은 make directory의 준말이다.)

<br>

#### git 생성한 폴더로 이동하기

cd {생성한 디렉토리} # example code :  cd ~/Documents/banana

(cd는 change directory를 뜻한다.)

<br>

#### 해당 폴더(디렉토리)에서 git 시작(초기화) 하기

git init 

[[영상]지옥에서 온 Git : git init](https://www.youtube.com/watch?v=fCY1t3QSEhw)

{% include youtubeplayer.html id="fCY1t3QSEhw" %}

<br>

init은 “initialize(초기화)”를 뜻한다. 이 코드를 입력하면 이 디렉토리를 로컬 깃 저장소라고 컴퓨터에게 말해주는 것이다. 

<br>

#### .git 파일 생겼는지 확인하기

ls -a (맥용)  
dir -a(윈도우용)

<br>

#### 로컬 저장소에 git 사용자 설정하기

1.우선 깃허브 가입하기

https://github.com/

2.계정 만들기

3.저장소 깃허브에 만들기(public으로 만들기)

[[영상]지옥에서 온 Git - 원격 저장소 만들기 (Github)](https://www.youtube.com/watch?v=KvBv_GMnkPU)

{% include youtubeplayer.html id="KvBv_GMnkPU" %}

<br>

##### 단어설명 - 출처:[완전 초보를 위한 깃허브](https://nolboo.kim/blog/2013/10/06/github-for-beginner/)

저장소(Repository): 프로젝트가 거주(live)할 수 있는 디렉토리나 저장 공간. 깃허브 사용자는 종종 “repo”로 줄여서 사용한다.   
당신의 컴퓨터 안의 로컬 폴더가 될 수도 있고, 깃허브나 다른 온라인 호스트의 저장 공간이 될 수도 있다.   
저장소 안에 코드 파일, 텍스트 파일, 이미지 파일을 저장하고, 이름 붙일 수 있다.

<br>


#### 깃허브 → 로컬 환경으로(내가 쓰는 터미널)로 돌아오기
 
로컬에 이름과 이메일 등록하자.(가입한 깃허브 레퍼지토리 등록하는 것)  
이렇게 쓰면 개별 레퍼지토리(보관소)로 등록할 수 있다.
(다른 레퍼지토리로 쓰려면 이름과 이메일 다시 config 하면된다.)

git config user.name {사용자 이름}
git config user.email {사용자 이메일}

<br>

#### 내가 등록한 이름과 이메일 보기

git config user.name  
git config user.email  
git config --list  

이렇게 글로벌(전체)로 쓰는 것은 잘 쓰지않는다. 개별 레퍼지토리로 등록하는걸 추천.  
example code : git config --global user.name banan


<br>

- - -

##### 만약 이런 오류 뜨면 해결 방법:

```
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly:
    git config --global user.name "Your Name"
    git config --global user.email you@example.com
After doing this, you may fix the identity used for this commit with:
    git commit --amend --reset-author

```

이럴땐 개별 레퍼지토리로 이름과 이메일 등록하는 코드를 쓰자.

1.git config user.email {사용자 이메일}    
git config user.name {사용자 이름}

2.git commit --amend --reset-author


- - -

#### 기존에 레퍼지토리가 있다면(보관소가 있다면, Git 클론 하기(기존에 있는거 복사해오기)

git clone {url.git}

<br>

#### 깃에 원격 저장소 추가하기

git remote add {저장소 이름} {url.git}    
저장소 이름은 origin(기본값), heroku 등 다양하게 될 수 있다.

<br>

#### 깃 저장소 확인해보기

git remote -v

<br>

#### 원격 저장소 삭제

git remote delete {저장소 이름}

<br>


#### 원격 저장소 수정

git remote set-url {저장소 이름} {URL.git}

<br>


#### 원격 저장소와 로컬 저장소 내용이 어떻게 차이나는지 살펴보기

git status

<br>

<p align ="middle">	
 <img src="https://cdn-images-1.medium.com/max/1600/1*ikHuWS_YFzMTbM444FUnSQ.png" alt="alt text" width = "100%">
</p>


{: refdef: style="text-align: center;"}
###### _출처 : [3장. GitHub 이용하기](https://medium.com/@psychet_learn/git-%EC%82%AC%EC%9A%A9%EB%B2%95-3%EC%9E%A5-github-%EC%9D%B4%EC%9A%A9%ED%95%98%EA%B8%B0-f53e765844e3)_
{: refdef}


<br>

#### add/commit/push

여러분의 로컬 저장소는 git이 관리하는 세 그루의 나무로 구성돼있다.

첫번째 나무인 작업 디렉토리(Working directory)는 실제 파일들로 이루어져있다.   
두번째 나무인 인덱스(Index)는 준비 영역(staging area)의 역할을 한다.   
마지막 나무인 HEAD는 최종 확정본(commit)을 나타낸다.  

그리고 헤드에 있던걸 원격 저장소로 보내는게 push이다.

<br>

<p align ="middle">	
 <img src="https://rogerdudler.github.io/git-guide/img/trees.png" alt="alt text" width = "100%">
</p>

{: refdef: style="text-align: center;"}
###### _출처 : [git - 간편 안내서](https://rogerdudler.github.io/git-guide/index.ko.html)_
{: refdef}

<br>


[[영상]지옥에서 온 Git : git add](https://www.youtube.com/watch?v=lQ0AyoCZzns)


{% include youtubeplayer.html id="lQ0AyoCZzns" %}

<br>

#### 특정 파일만 로컬 저장소에 추가하기

git add "파일이름"

<br>


#### 전체 파일을 로컬 저장소에 추가하기

git add .

<br>


#### 추가한 파일을 로컬 저장소에 올릴 것을 확정(커밋)짓기

git commit -m "커밋 내용"

<br>

#### 커밋한 내용을 원격 저장소로 보내기

git push {저장소 이름} master

<br>

#### 원격 저장소의 (수정된) 내용 불러오기

git pull {저장소 이름} master

<br>

#### master/branch 이해

[지옥에서 온 Git - branch 소개](https://youtu.be/PmWPdYkAMg4)


{% include youtubeplayer.html id="PmWPdYkAMg4" %}

<br>

기본적으로 있는게 master
거기서 branch를 만들 수 있음.

<br>

#### branch 만들기

git branch {branchname}


<br>

#### branch 전환하기

git checkout {branch}


<br>


#### 한번에 branch 만들고 갈아타기

git checkout -b {branch 이름}

체크아웃을 실행하면, 우선 브랜치 안에 있는 마지막 커밋 내용이 작업 디렉토리에 펼쳐진다.      
브랜치가 전환 되었으므로 이 후에 실행한 커밋은 전환한 브랜치에 추가된다.  

<br>


#### master로 돌아오기

git checkout master

<br>

#### branch 삭제하기

git branch -d feature


<br>

#### branch 원격 저장소로 전송하기(다른 사람이 접근할 수 있게)

git push origin {가지 이름}


<br>

#### 다른 branch에 있는 내용을 현재 branch(master이든 뭐든)에 합치기

'master' 브랜치에 'issue1'를 넣기 위해서는 우선 'master' 브랜치에 'HEAD'가 위치하게 만들어야 한다.  
이 때에는 checkout 명령어를 이용하여 현재 사용중인 브랜치를 'master'로 전환한다.

git checkout master
git merge {현재 가지 이름}


merge 하면 성공하거나 conflict가 일어남.
이 때 손수 파일을 수정 해줘야 함.

<br>

[[영상]지옥에서 온 Git - 원리 : merge & conflict](https://youtu.be/0RqbZt_TZkY)


{% include youtubeplayer.html id="0RqbZt_TZkY" %}

<br>

* [[참고글]초심자를 위한 Github 협업 튜토리얼 (with 토끼와 거북이)](https://milooy.wordpress.com/2017/06/21/working-together-with-github-tutorial/)

<br>


#### conflict 된거 다시 merge하기

git add {파일 이름}


<br>


#### merge하기 전 비교해보기

git diff {원래가지} {비교할 가지}

<br>


#### 원격 저장소에 pull request 보내기

git push origin {brunch이름}

* [[글]git 초보를 위한 풀리퀘스트(pull request) 방법](https://wayhome25.github.io/git/2017/07/08/git-first-pull-request-story/)

<br>

#### pull request 열어보기

* [깃허브(GitHub) 가이드 - 4단계: 풀 리퀘스트 열기](http://magento2.tistory.com/entry/%EA%B9%83%ED%97%88%EB%B8%8CGitHub-%EA%B0%80%EC%9D%B4%EB%93%9C-4%EB%8B%A8%EA%B3%84-%ED%92%80-%EB%A6%AC%ED%80%98%EC%8A%A4%ED%8A%B8-%EC%97%B4%EA%B8%B0)

<br>


#### rebase 이해하기

* [[글] Git merge, rebase 이해하기](http://cyberx.tistory.com/96)

* [[글]브랜치 통합하기-리베이스](https://backlog.com/git-tutorial/kr/stepup/stepup1_4.html)


<br>


#### 로컬 저장소의 변경 내용 되돌리기(변경 내용을 변경 전 상태(헤드 상태)로 돌리기)

git checkout --{파일이름}

이렇게 변경할 시 인덱스(stage)에 추가된 건 남는다. 
새로 만든 파일도 남음.
이런거 다 포기하려면 원격 저장소에 있던걸 가져오고 로컬 저장소가 그걸 보게 하면된다.

git fetch origin(저장소 이름)  
git reset --hard origin(저장소 이름) master

<br>

#### git output을 컬러로 출력해보기

git config color.ui true

- - -

#### 참고하면 좋은 글

[깃(?)똥차게 좋은 GIT 기초](http://slowalk.tistory.com/2470)

[완전 초보를 위한 깃허브](https://nolboo.kim/blog/2013/10/06/github-for-beginner/#github-resource)


[GitHub에서 꽤 유용하지만 숨겨져 있는 기능](https://github.com/tiimgreen/github-cheat-sheet/blob/master/README.ko.md)

[[Git] Git 명령어 정리](https://medium.com/@joongwon/git-git-%EB%AA%85%EB%A0%B9%EC%96%B4-%EC%A0%95%EB%A6%AC-c25b421ecdbd)



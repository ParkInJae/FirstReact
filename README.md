<h3>에러 내용 </h3>

```
There is no tracking information for the current branch. Please specify which branch you want to merge with. 
See git-pull(1) for details.
git pull <remote> <branch>
If you wish to set tracking information for this branch you can do so with:
  git branch --set-upstream-to=origin/<branch> master
에러 발생
```

<br/>


<hr> 

❌ 원인 :: 현재 로컬 브랜치가 원격 브랜치와 연결(Tracking)되어 있지 않아서 Git이 어느 원격 브랜치에서 변경 사항을 가져와야 할지 모르기에 발생함. <br/>
원인을 보아하니 아무래도 노트북과, 집에 있는 컴퓨터 총 2대를 사용하다가 발생한 문제인 것 같다. <br/>

<br/>
노트북: <br/>
master라는 이름의 브랜치를 생성. <br/> **코드를 수정했지만 아직 커밋하지 않음.** <br/>
<br/>
집에 있는 컴퓨터 :<br/>
동일한 이름(master)의 브랜치를 새로 생성. <br/>
**코드를 수정한 후 커밋하고 원격 저장소(Origin)에 푸시.** <br/>
<br/>
노트북 :<br/> 
나중에 원격 저장소의 master 브랜치를 가져오려고(git pull) 시도.<br/>
하지만 컴퓨터 A에는 이미 로컬에 작업 중인 master 브랜치가 존재하여 Git은 어떤 원격 브랜치와 병합해야 할지 판단할 수 없게 되며 발생<br/>

```

# 그림으로 표현 
**[ 노트북 ]**
   ┌────────────────────────────┐
   │ 로컬 브랜치: master         |
   │  - 수정 작업 (커밋 전)      │
   └────────────────────────────┘
              │
              │ git pull (실행)
              ▼
**[원격 저장소]** ──────────► **[ 집에 있는 컴퓨터 ]**
   ┌────────────────────────────┐
   │ 원격 브랜치: master         │
   │  - 수정 작업 + 커밋         │
   └────────────────────────────┘

```
   
문제점: 컴퓨터 A의 master 브랜치는 **아직 커밋되지 않은 변경 사항이 있어 원격의 master 브랜치와 자동으로 연결되어 있지 않음.
따라서 Git은 git pull 시 어느 원격 브랜치를 기준으로 병합해야 할지 알 수 없어서 에러가 발생**합니다. <br/>

<br/>

✔️ 해결방법  <br/>

추적 정보 설정하기: 
 로컬 브랜치와 원격 브랜치를 연결(Tracking)시키면 이후 git pull이 정상 작동합니다. <br/>

아래의 코드를 통해서 로컬의 master 브랜치를 원격 저장소(origin)의 master 브랜치와 추적 관계(upstream)를 설정  <br/>

```

git branch --set-upstream-to=origin/master master

```

해당 코드를 통해 추적 관계 설정 후 git pull, git push 명령어를 사용하면, 브랜치를 명시하지 않아도 자동으로 origin의 master 브랜치와 동기화 됨



<hr> 
<h1>추가 내용 </h1>

<h3> 로컬 브랜치 (Local Branch) :: Git을 사용하여 프로젝트를 관리하는 경우, 본인 컴퓨터에 존재하는 Git 저장소 내의 작업공간 (master브랜치나 feature 브랜치 등 )을 로컬 브랜치라고 함.  </h3> <br/>

 <br/>
-- 로컬 브랜치의 특징  <br/>
1. 작업 공간으로 파일 수정, 커밋 등 모든 작업을 직접 수행함 <br/>
2. 새 브랜치를 만들면 기본 적으로 로컬에 생성  <br/>
3. 로컬 브랜치는 독자적으로 존재하며, 원격 저장소와 연결되지 않을 수 있음  <br/>


<br/><br/><br/>

<h3> 원격 브랜치(Remote Branch) :: 원격 브랜치는 원격저장소 (GitHub,GitLab 등)에 존재하는 브랜치를 나타낸다.  </h3> <br/>

<br/>
-- 원격 브랜치의 특징  <br/>
1. 원격 저장소의 상태를 로컬에 반영하기 위한 "스냅샷" 역할을 합니다. <br/>
2. 일반적으로 origin/master와 같이 origin/브랜치명 형식으로 표시됩니다.  <br/>
3. 로컬에서는 직접 수정할 수 없으며, git fetch나 git pull 명령을 통해 업데이트됩니다.  <br/>


<br/><br/>

<h2> feature 브랜치 :: 기능을 개발하는 브랜치 </h2> 
  -- 새로운 기능 개발 및 버그 수정이 필요할 때마다 'develop'브랜치로부터 분기해서 관리 <br/>
<br/>

<h2> develop 브랜치 :: 다음 출시 버전을 개발하는 브랜치 </h2>
   -- 기능 개발을 위한 브랜치들을 병합하기 위해 사용하며, 모든 기능이 추가되고 버그가 수정되어 배포 가능한 안정적인 상태일 때 develop 브랜치를 'master'브랜치에 병합(merge)함. <br/>
 <br/>
 
 <h2> 스냅샷  :: Git이 특정 시점에 프로젝트의 전체 파일 상태를 저장한 기록을 의미 </h2>
<br>

출처 1 : https://blog.naver.com/sqlpro/222555029055
출처 2 : https://insapporo2016.tistory.com/53


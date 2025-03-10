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
원인 :: 현재 로컬 브랜치가 원격 브랜치와 연결(Tracking)되어 있지 않아서 Git이 어느 원격 브랜치에서  <br/>
변경 사항을 가져와야 할지 모르기에 발생함. <br/>

<br/> <br/>
아무래도 노트북과, 집에 있는 컴퓨터 총 2대를 사용하다가 발생한 문제인 것 같다. 

노트북: master라는 이름의 브랜치를 생성. <br/> 코드를 수정했지만 아직 커밋하지 않음.<br/>
<br/>
집에 있는 컴퓨터 : 동일한 이름(feature)의 브랜치를 새로 생성. <br/>코드를 수정한 후 커밋하고 원격 저장소(Origin)에 푸시. <br/>
컴퓨터 A:

나중에 원격 저장소의 feature 브랜치를 가져오려고(git pull) 시도.
하지만 컴퓨터 A에는 이미 로컬에 작업 중인 feature 브랜치가 존재하여 Git은 어떤 원격 브랜치와 병합해야 할지 판단할 수 없게 됩니다.


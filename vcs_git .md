# GIT

### 버전 관리 시스템 (vcs)

시간에 따른 코드의 변화를 체계적으로 관리하는 소프트웨어

### GIT: 사실상 표준으로 사용되는 VCS
+ 커맨드라인 명령어를 통해 사용하거나 여러 GUI(sourcetree) 프로그램을 통해 사용할 수도 있다. 
### GIT 초기설정
+ `git config --glabal user.name "이름"`
+ `git config --glabal user.email "이메일"`
### GIT 저장
+ git에 의해 관리되는 디렉토리
+ `git init`명령을 통해 특정 디렉터리를 git 저장소로 만들 수 있다.

### 저장소의 현재 상태 확인하기
+ `git status `
### GIT에서 관리하는 세 영역
+ 작업 디렉토리: 현재 작업 중인 파일이 저장되는 영역
+ 스테이징 영역: 저장소에 저장할 변경 사항을 보관하는 임시 저장소
+ `.git` 디렉터리: 모든 작업 내영이 영구히 저장되는 저장소
### 작업흐름
+ 소스코드를 편집하고 
+ `git add readme.txt`
	+ 변경 사항이 스테이징 영역에 올라가게 된다.
+ `git commit -m "commit 내용 입력하기(관례)"`
	+ 스테이징 영역에 올라온 변경사항을 영구히 보관한다.

### 정리
+ 디렉터리 및 파일 생성
+ `git init`
+ `git add .`
+ `git commit -m "커밋내용" `

### Github 초기 설정
+ `ssh-keygen` 명령실행 
+ `~/.ssh/id_rsa.pub`
+ github 에서 ssh key 등록
+ ` git remote add origin git@github.com:bohyeon-n/myproject.git
git push -u origin master`


###  실습 오류
+ myproject 폴더에서 `ssh-keygen` 실행 후 
` Generating public/private rsa key pair.
Enter file in which to save the key (/Users/koobohyeon/.ssh/id_rsa):`
+ ssh key 입력
`git remote add origin git@github.com:bohyeon-n/myproject.git git push -u origin master`
+ 오류메세지
 `failed: No such file or directory`
 






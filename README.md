# spongeclub-3

스폰지클럽 3기에 오신 걸 환영해요 👋 **여기는 과제를 올리는 곳이에요.**

## ⏩ 가장 먼저 할 일

**내 폴더 `1_mission/{내 조}/{내 이름}/` 을 찾아, `0. 셋업데이 - 자기소개/자기소개.md` 를 작성하세요.** 이게 첫 미션이에요!
(내 조·이름은 [1_mission/README.md](1_mission/README.md)에서 확인)

## 📤 올리는 법 (매번 이 순서대로)

**① 최신 내용 받기 (git pull)**
- Claude Code에 시키기: `"git pull 해줘"`
- VS Code: Source Control 패널 → `···` 메뉴 → **Pull**

**② 내 파일 작성**
- `1_mission/{내 조}/{내 이름}/` 안에서 `자기소개.md` 나 해당 회차 `submission.md` 작성
- Claude Code에 시키기: `"1회차 submission 작성해줘"`

**③ 올리기 (commit + push)**
- Claude Code에 시키기: `"방금 작성한 거 커밋하고 푸시해줘"`
- VS Code: 변경 파일 옆 `+` 로 Stage → 메시지 입력 후 **Commit** → **Sync Changes**(Push)

## 📁 폴더 구조

```
1_mission/
└── 1조/ ~ 6조/                       ← 내 조를 찾으세요
    └── 닉네임(이름)/                   ← 내 닉네임(이름) 폴더
        ├── 시작하기.md                ← 먼저 읽어보세요
        ├── 0. 셋업데이 - 자기소개/
        │   └── 자기소개.md            ← 가장 먼저 작성
        ├── 1회차 과제 제출 폴더/
        │   ├── submission.md          ← 과제 작성
        │   └── 이미지첨부/             ← 스크린샷·이미지
        ├── 2회차 과제 제출 폴더/
        │   └── ...
        ├── 6회차 과제 제출 폴더/
        └── 7회차 과제 제출 폴더/
```

## ⚠️ 규칙

- **내 폴더에서만** 작업해요. 남의 폴더는 건드리지 않기.
- **비밀번호·API 키**는 절대 올리지 않기.

## 🛠 막힐 때

- `command not found` → 터미널을 껐다 다시 켜기
- push가 거절됨 → 먼저 `git pull` 후 다시 push
- 그 외 에러 → 에러 화면을 그대로 복사해서 **Claude Code에 붙여넣기**

---

<sub>`_meta`, `_templates`, `_site-data` 폴더는 운영용이라 안 건드려도 돼요.</sub>

👥 [조 편성 & 명단 보기 → 1_mission/README.md](1_mission/README.md)

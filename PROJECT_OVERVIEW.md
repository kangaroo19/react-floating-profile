# react-floating-profile 프로젝트 문서

## 프로젝트 한눈에 보기

이 프로젝트는 **GitHub 사용자 프로필을 화면 한쪽에 떠 있는(floating) UI로 보여주는 React 컴포넌트 라이브러리**입니다.

- npm 패키지 이름: `react-floating-profile`
- 핵심 목적: GitHub 사용자 정보, 조직(organizations), 고정 저장소(pinned repositories)를 시각적으로 표시하는 UI 컴포넌트를 제공
- 구성 방식: 라이브러리 본체 + 라이브러리를 체험할 수 있는 별도 데모 사이트

즉, 단순한 웹앱이 아니라 **재사용 가능한 React 컴포넌트를 배포하기 위한 라이브러리 프로젝트**이며, `site/` 폴더에는 이를 소개하고 테스트하는 데모 페이지가 함께 들어 있습니다.

---

## 현재 프로젝트 성격

이 저장소는 크게 2개의 영역으로 나뉩니다.

### 1. 라이브러리 본체

루트의 `src/lib/react-floating-profile/` 아래에 실제 배포 대상 코드가 들어 있습니다.

이 라이브러리는 다음 props를 받아 동작합니다.

- `userName`: GitHub 사용자명
- `pinnedRepoArr`: 보여줄 저장소 이름 목록, 최대 4개
- `location`: `top-left`, `top-right`, `bottom-left`, `bottom-right`
- `accessToken`: 선택 사항, GitHub API rate limit 완화를 위한 토큰

라이브러리 엔트리 포인트는 아래 파일입니다.

- `src/lib/react-floating-profile/index.ts`
- `src/lib/react-floating-profile/ui/ReactFloatingProfile.tsx`

### 2. 데모 사이트

`site/` 폴더는 별도의 Vite 기반 React 앱입니다.

- 사용자가 GitHub ID, 위치, pinned repo, access token을 입력
- `ReactFloatingProfile` 컴포넌트를 실제로 렌더링
- 결과적으로 라이브러리 사용 예제와 홍보/체험 페이지 역할 수행

대표 파일:

- `site/src/App.tsx`
- `site/src/components/layout/Layout.tsx`

---

## 기술 스택

### 루트 라이브러리

- React 18
- TypeScript
- Vite 설정 사용
- Context API
- GitHub REST API 연동
- CSS 기반 UI 스타일링

### 데모 사이트

- React 19
- Vite
- TypeScript
- Tailwind CSS v4
- `gh-pages` 배포

---

## 동작 방식

라이브러리의 핵심 흐름은 다음과 같습니다.

1. `ReactFloatingProfile` 컴포넌트가 렌더링됨
2. 내부에서 `ProfileProvider`, `AuthProvider`로 컨텍스트를 구성
3. `FloatingProfileContainer`가 마운트될 때 GitHub API 호출 수행
4. 사용자 정보와 pinned repository 정보를 가져와 상태에 저장
5. 프로필 아이콘과 모달 UI를 화면 가장자리에 띄워 표시

관련 핵심 파일:

- `src/lib/react-floating-profile/ui/ReactFloatingProfile.tsx`
- `src/lib/react-floating-profile/ui/floating-profile-container/index.tsx`
- `src/lib/react-floating-profile/context/AuthProvider.tsx`
- `src/lib/react-floating-profile/context/ProfileProvider.tsx`

---

## GitHub API 연동

GitHub 데이터를 가져오는 API 유틸은 아래에 모여 있습니다.

- `src/lib/react-floating-profile/api/getUserProfile.ts`
- `src/lib/react-floating-profile/api/getRepoItem.ts`
- `src/lib/react-floating-profile/api/getOrganizations.ts`
- `src/lib/react-floating-profile/api/getUserReadme.ts`

주요 조회 대상:

- 사용자 기본 프로필
- 지정한 저장소 목록
- 조직 목록
- 사용자 README

`accessToken`이 있으면 `Authorization: Bearer ...` 헤더를 붙여 호출하며, 없더라도 기본 조회는 가능하게 설계되어 있습니다.

---

## 주요 디렉터리 구조

아래는 실제 의미 있는 디렉터리만 추려 정리한 구조입니다.

```text
react-floating-profile/
├─ src/
│  └─ lib/
│     └─ react-floating-profile/
│        ├─ api/          # GitHub API 호출 함수
│        ├─ components/   # 공용 UI 조각
│        ├─ context/      # Auth/Profile 상태 관리
│        ├─ ui/           # 메인 컴포넌트 및 floating UI
│        ├─ util/         # 유틸 함수
│        ├─ index.ts      # 라이브러리 엔트리
│        └─ types.ts      # 공개 타입 정의
├─ public/                # 루트 앱 정적 파일
├─ dist/                  # 라이브러리 빌드 결과물
├─ site/                  # 별도 데모/소개 사이트
│  ├─ src/
│  ├─ public/
│  └─ dist/
├─ package.json           # 라이브러리 패키지 설정
├─ vite.config.ts         # 라이브러리 빌드/alias 설정
├─ tsconfig.json          # 라이브러리 TypeScript 설정
└─ README.md              # 공개 사용 설명서
```

주의할 점:

- `node_modules/`, `site/node_modules/`, `dist/`, `site/dist/`는 의존성 또는 빌드 결과물이므로 핵심 소스는 아닙니다.

---

## 빌드 및 배포 구조

### 라이브러리 빌드

루트 `package.json`의 `prepare` 스크립트가 실제 배포용 `dist/`를 만듭니다.

주요 작업:

- 기존 `dist/` 삭제 후 재생성
- TypeScript 컴파일
- `tsc-alias`로 경로 alias 정리
- 라이브러리 CSS를 `dist/ui/style.css`로 복사

즉, 이 프로젝트는 **npm 배포 가능한 라이브러리 패키지**를 만드는 구조입니다.

### 데모 사이트 배포

`site/package.json`에는 아래 스크립트가 있습니다.

- `dev`: 데모 개발 서버 실행
- `build`: 데모 사이트 빌드
- `deploy`: `gh-pages`로 정적 배포

또한 `homepage`가 GitHub Pages 주소로 설정되어 있어, 데모 사이트는 GitHub Pages 배포를 전제로 구성되어 있습니다.

---

## 이 프로젝트에서 중요한 파일

빠르게 이해하려면 아래 순서로 보면 됩니다.

1. `README.md`
2. `package.json`
3. `src/lib/react-floating-profile/ui/ReactFloatingProfile.tsx`
4. `src/lib/react-floating-profile/ui/floating-profile-container/index.tsx`
5. `src/lib/react-floating-profile/types.ts`
6. `src/lib/react-floating-profile/api/*`
7. `site/src/App.tsx`

---

## 정리

이 저장소는 **GitHub 프로필 정보를 floating UI로 보여주는 React 컴포넌트 라이브러리**를 개발하고 배포하기 위한 프로젝트입니다.

- 루트는 라이브러리 패키지 소스
- `site/`는 실제 사용 예제를 보여주는 데모 사이트
- GitHub API를 호출해 사용자 정보와 저장소 정보를 가져옴
- TypeScript 기반으로 작성되었고 npm 패키지 배포와 GitHub Pages 데모 배포를 모두 고려한 구조

실무 관점에서 보면 이 프로젝트는 다음 목적으로 이해하면 가장 정확합니다.

> "재사용 가능한 GitHub 프로필 위젯 React 라이브러리 + 이를 보여주는 데모 사이트"

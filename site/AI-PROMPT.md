# React 프로젝트 코딩 컨벤션

## 🧱 파일 구조

- 컴포넌트는 `src/components/` 아래에 폴더 단위로 분리
- 페이지는 `src/pages/`, hooks는 `src/hooks/`, utils는 `src/utils/`
- 컴포넌트 하나당 `.tsx`, `.module.css` 또는 `.ts` (Hook) 파일로 구성

## 📛 파일 및 폴더 네이밍

- **폴더, 파일**: `camelCase` (`userProfile`, `postList`)
- **컴포넌트**: `PascalCase` (`UserProfile.tsx`)
- **Hooks**: `use`로 시작 (`useScroll.ts`)
- **파일 확장자**: `.tsx` (JSX 포함 시), `.ts` (로직만 있을 때)

## 🧩 컴포넌트 작성 규칙

- 반드시 `function ComponentName()` 또는 `const ComponentName = () => {}` 형태 사용
- props는 `interface` 또는 `type`으로 명시
- props destructuring 사용
- 반드시 `React.FC`는 사용하지 않음

```tsx
type Props = {
  title: string;
  onClick: () => void;
};

const Button = ({ title, onClick }: Props) => {
  return <button onClick={onClick}>{title}</button>;
};
```

## 🔧 ESLint 규칙 준수

프로젝트에서 사용하는 ESLint 규칙을 반드시 준수해야 합니다:

- **eslint-plugin-react-hooks**: React Hooks 사용 규칙 준수
- **eslint-plugin-react-refresh**: Vite Fast Refresh 호환성을 위한 컴포넌트 export 규칙 준수
- **@typescript-eslint**: TypeScript 타입 안전성 및 코드 품질 규칙 준수

## 🚨 코드 수정 규칙

- **2개 이상의 파일/모듈 수정이 필요한 경우**: 반드시 사용자의 허락을 받고 수정 진행
- **단일 파일 수정**: 허락 없이 바로 수정 가능

[![npm version](https://img.shields.io/npm/v/@design-guide/ui-guide.svg)](https://www.npmjs.com/package/@design-guide/ui-guide)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A React 기반의 UI 컴포넌트 라이브러리입니다.

버튼, 인풋, 라디오 등 headless UI 컴포넌트를 포함하고 있어, 쉽고 빠르게 일관된 디자인 시스템을 구현할 수 있습니다.

현재 React 18버전까지만 지원됩니다.

## Features

- **모듈화된 컴포넌트**: Button, Input, Radio 등 각 UI 요소를 개별 컴포넌트로 제공

- **타입스크립트 지원**: 타입 선언을 제공하여 안정적인 개발 환경 지원

- **경량 & 커스터마이징**: 최소한의 스타일과 로직으로 쉽게 확장 가능

## Installation

npm 또는 yarn을 사용하여 패키지를 설치하세요.

```bash

# npm

npm install @design-guide/ui-guide



# yarn

yarn add @design-guide/ui-guide
```

## Usage

```
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Input, Radio } from '@design-guide/ui-guide';

const App = () => {
	return (
		<h1>Hello ui Guide</h1>
		<Button onClick={() => alert('Button clicked!')}>Click Me</Button>
		<Input placeholder="Type something..." />
		<Radio name="sample" value="Option 1" />
		<Radio name="sample" value="Option 2" />
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
```

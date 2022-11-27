# REFERECNCES
- [Figma 플러그인 만들기](https://squarelab.co/blog/get-started-with-figma-plugin/)

> Figma Developers 
  - [Accessing the Document](https://www.figma.com/plugin-docs/accessing-document/)
  - [Working with Images](https://www.figma.com/plugin-docs/working-with-images/)
  - [figma](https://www.figma.com/plugin-docs/api/figma/)
  - [figma.ui](https://www.figma.com/plugin-docs/api/figma-ui/)
  - [Paint](https://www.figma.com/plugin-docs/api/Paint/)
  - [Making Network Requests](https://www.figma.com/plugin-docs/making-network-requests/)
  - [Image](https://www.figma.com/plugin-docs/api/Image/)


# STEP 1. Create Figma Plugin

Figma(in pc) > Plugins > Development > New Plugin
  - 'Figma design + FigJam' 선택후 'Next' 클릭
  - Plugin 이름 '01_reset-image-size' 입력
  - 'Empty' 템플릿 선택
  - Save as 폴더 'C:\MoonDev\withLang\inJS\jsPlayground\' 지정

# STEP 2. File 변경
> manifest.json
  - "ui": "ui.html" 추가


> ui.html 추가

```html
<style>
    html {
        margin: 0;
        padding: 0;
        border: 0 none;
    }
    
    body {
        font-family: Sans-serif;
    }
</style>
<div>
    <h2>Hello, world!</h2>
    <p>This is my first plugin.</p>
</div>
```

> code.js 수정

```js
//플러그인의 UI를 표시합니다.
figma.showUI(__html__);

//UI 사이즈를 800x600으로 변경합니다.
figma.ui.resize(800, 600);

// figma.closePlugin()
```

# STEP 3. 테스트

> Figma(in pc) > Plugins > Development > '01_reset-image-size' 클릭


# STEP 4. File 수정

> code.js 수정
> ui.html 수정


# STEP 5. 테스트

- Figma 페이지에, 이미지 1개 추가
- 이미지 사이즈 변경
- 이미지 레이어 선택
- Figma(in pc) > Plugins > Development > '01_reset-image-size' 클릭
- 'Reset' 버튼 클릭


# STEP 6. 플러그인 배포
> Figma(in pc) > Plugins > Development > Manage plugins in development > '01_reset-image-size' > 'more' icon 클릭 > 'Publish' 선택
> 플러그인의 아이콘과 설명 입력, 'Submit for review' 클릭
> Figma 측의 리뷰를 거친 후 Figma Community에 공개됨
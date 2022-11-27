# REFERECNCES
- [Figma 플러그인 만들기](https://squarelab.co/blog/get-started-with-figma-plugin/)


# STEP 1. Create Figma Plugin

Figma(in pc) > Plugins > Development > New Plugin
  - 'Figma design + FigJam' 선택후 'Next' 클릭
  - Plugin 이름 '01_reset-image-size' 입력
  - 'Empty' 템플릿 선택
  - Save as 폴더 'C:\MoonDev\withLang\inJS\jsPlayground' 지정

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


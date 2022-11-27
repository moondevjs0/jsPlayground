//UI를 표시합니다.
figma.showUI(__html__);
    
//UI 사이즈를 800x600으로 변경합니다.
figma.ui.resize(800, 600);
    
//figma.currentPage로 활성화된 Page에 접근할 수 있습니다. currentPage.selection에는 사용자가 선택한 레이어들이 들어 있습니다. node 변수에 첫번째 레이어를 지정합니다.
const node = figma.currentPage.selection[0];
    
//이미지 정보는 node의 fills안에 들어있습니다. paint 변수에 첫번째 fill을 지정합니다.
const paint = node.fills[0];
    
//웹 기반인 Figma는 이미지 데이터를 비동기로 가져오기 때문에 async & await를 사용해야 합니다.
(async () => {
  //paint.imageHash에는 이미지의 ID가 들어있습니다. figma.getImageByHash()로 이미지를 가져옵니다.
  const image = figma.getImageByHash(paint.imageHash);
  
  //getBytesAsync()는 이미지의 raw bytes를 반환해주는 함수입니다. raw bytes를 bytes 변수에 담습니다.
  const bytes = await image.getBytesAsync();
    
  //figma.ui.postMessage()를 사용해 ui.html로 bytes를 보내줍니다.
  figma.ui.postMessage(bytes);
})();
    
//나중에 ui.html에서 보내온 message를 수신하기 위한 내용입니다.
figma.ui.onmessage = message => {
  //resize()를 사용해 message에 담겨있는 사이즈로 이미지를 리사이징합니다.
  node.resize(message.width, message.height);
    
  //플러그인의 기능이 실행되었으니 플러그인을 종료합니다.
  figma.closePlugin();
}
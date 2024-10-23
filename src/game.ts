import { Application, Container, HTMLText, Text } from 'pixi.js';

export const app = new Application();

(async () => {  
  await app.init({
    width: 1280,
    height: 720,
    resolution: Math.max(window.devicePixelRatio, 2),
    autoDensity: true,
    antialias: true,
    hello: true,
    roundPixels: false,
  });

  document.body.appendChild(app.canvas);

  const container = new Container();
  app.stage.addChild(container);

  const text = new Text({
    text: 'Text',
    style: {
      fontFamily: 'Arial',
      fontSize: 36,
      fill: 'white',
    },
  });
  container.addChild(text);

  const htmlText = new HTMLText({
    text: 'HTML Text',
    style: {
      fontFamily: 'Arial',
      fontSize: 36,
      fill: 'white',
    },
  });
  container.addChild(htmlText);
  htmlText.position.set(0, text.height + 5);
})();

function sleep(waitMsec) {
  var startMsec = new Date();
 
  // 指定ミリ秒間だけループさせる
  while (new Date() - startMsec < waitMsec);
}

function fontReload(){
  FONTPLUS.async()
  sleep(100);
  FONTPLUS.start()
};

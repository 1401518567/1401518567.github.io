var posts=["2024/08/28/这算是开始/","2024/08/28/开学前总是喜欢躺着/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
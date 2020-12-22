let id = prompt(`'video id' или нажми "OK" чтобы посмотреть инструкцию`, ``)
let t = fetch(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyCEhBTmfZ3CV_SWa4CdLlmOqxGIIGm8P08
&part=snippet`)
let a = t.then((e) => e.json().then((r) => {
  console.log(r.items[0].snippet.tags)
}))









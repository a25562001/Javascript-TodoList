// window 一整個瀏覽器的功能
// window.alert("")
// document 檔案上面的標籤
// document.write("")

//callback回呼 當完成load的事件之後要回來呼叫function
window.addEventListener('load', () => {
    console.log('load')
    const p1 = document.getElementById('title')
    console.log(p1)
    p1.innerText = 'backend'

    const b1 = document.getElementById('btn')
    b1.addEventListener('click', () => {
        console.log('you clicked')
    })

    //改變內部結構插入一個新標籤
    const box1 = document.getElementById('box')
    box1.innerHTML = '<p>Test</p>'

    //event can get input value
    const in1 = document.getElementById('text')
    in1.addEventListener('keyup', (e) => {
        console.log(e.target.value)
    })
})

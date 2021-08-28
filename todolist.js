const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addedBtn = document.getElementById('addedBtn')
const deletedBtn = document.getElementById('deletedBtn')
const list = document.getElementById('list')

//array to store values
const listContent = []

function render () {
      //渲染頁面
      let htmlStr = ''

      //forEach 可以得到陣列所有的內容
      // forEach (function (item, index, array) {})
      listContent.forEach(((item) => {
          htmlStr = htmlStr + `
          <div class="item">
              <div>
                  <p>內容: ${item.content}</p>
                  <p>時間: ${item.date} ${item.time}</p>
              </div>
          </div>
          `
      }))
  
      list.innerHTML = htmlStr
}

addedBtn.addEventListener('click', () => {
    // console.log(content.value)
    // console.log(date.value)
    // console.log(time.value)

    //use object to get values
    //push 從後面推東西進去
    //unshift 從前面推東西進去
    listContent.unshift({
        content: content.value,
        date: date.value,
        time: time.value
    })
    render()

    // console.log(listContent)
})


//pop從後面把東西拉出來
//shift從前面把東西拿出來
deletedBtn.addEventListener('click', () => {
    listContent.shift()
    
    render()

})


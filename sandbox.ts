function getTodos (callback: (err: string|undefined, data: string | object[] | undefined) => void): void {

    const request: XMLHttpRequest = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState)
        if (request.readyState === 4 && request.status === 200){
            const responseData: object[] = JSON.parse(request.responseText)
            callback(undefined, responseData)
        } else if (request.readyState === 4){
            callback('could not fetch data', undefined)
        }
    })
    request.open('GET', 'todos.json')

    request.send()
}

getTodos((err, data) => {
  console.log('callback fired')
  if (err) {
    console.log(err)
  } else{
    console.log(data)
  }
})

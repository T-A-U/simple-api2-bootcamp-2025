document.querySelector('button').addEventListener('click',answerQuestion )

function answerQuestion(){
    const url =`https://yesno.wtf/api`

//cors error, attempting to fix with workaround, found online
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data)
            
             document.querySelector('h3').innerText=data.answer
             document.querySelector('img').src=data.image
            

            // document.querySelector('iframe').src = data.url
           


           

})
.catch(err => {
    console.log(`error ${err}`)
});

}
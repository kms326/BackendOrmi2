<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hello dom</title>
</head>
<body>
    <h1 id="one">hello world</h1>
    <ul>
        <li class="two">one</li>
        <li>two</li>
        <li>three</li>
    </ul>
    
    const btnRed = document.querySelector('button')
const title = document.querySelector('#one')

btnRed.addEventListener('click', () => {
    title.classList.toggle('red')
})
</body>
</html>
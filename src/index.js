const messages=[
    "Pedro",
    "Ana",
    "Oscar",
    "Jessica",
    "Diego",
    "Juan",
    "Carlos"
]

const randomMsg =()=>{
    const message = messages[Math.floor(Math.random()* messages.length)]
    console.log(message)
}

module.exports={randomMsg}
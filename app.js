const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/comments/100')
    .then(res => res.json())
    .then(data => loadOutput(data))
}

const loadOutput = (names) => {
    const output = document.getElementById('output')
   
        output.innerText = names 
    
    
}

const loadAllData = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => loadOutputs (data))
}
loadAllData()

const loadOutputs = allNames => {
    const outputs = document.getElementById('output')
   const first10Data = allNames.slice(0,10)
   
   
    // outputs.innerText = allNames[10].name,allNames[10].email
    
    
}

const { request, response } = require('express');
const express= require('express');
const app = express();
const PORT = 8000;
const cors=require('cors'); //for CORS ERRORS we require cors

app.use(cors()); //here we use CORS
let savage={ // making object for API
    'age':22,
    'name':'Waqar',
    'birth-place':'Kumb'
}
let rappers={
    '21 savage': {
        'age':28,
        'birthname':'Kooler',
        'birthplace':'Khairpur'
    },
    'yo yo': {
        'age':28,
        'birthname':'Kooler',
        'birthplace':'India',
    },
    'badshah': {
        'age':28,
        'birthname':'Foota',
        'birthplace':'India'
    }
}

app.get('/',(request,response)=>{
    response.sendFile(__dirname+'/index.html')
})

app.get('/api/savage',(request,response)=>{//setting up request response
    response.json(savage);
})
app.get('/api/rappers/:rappername',(request,response)=>{
    const rapname=request.params.rappername.toLowerCase();
    console.log(rapname);
    if(rappers[rapname]){
    response.json(rappers[rapname]);
    }else{
    response.json(rappers['yo yo']);
    }
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
import Patient from './models/task6';
async function init(){
    const isDev = true;

  
    await Patient.sync({alter:isDev})
}


const dbInit =() => {
    init();
}

export default dbInit;
import configs from './config'
import Cookie from 'js-cookie'

export async function getCustomer (cpf){
    var myHeaders = new Headers();
    myHeaders.append("Authorization","Bearer "+Cookie.get('._token') ); 
    var raw = JSON.stringify({
        "document": cpf
      });   
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      body:raw,
      redirect: 'follow'
    };
    
    const call = await fetch(`${configs.configs.BASE_URL}/customer`, requestOptions)
    .then(response => {
        if(!response.ok) throw new Error(response.statusText);
        return response.json()
    })
    .then(result => {
        return result.data.data
    })
    .catch(error => {
        throw new Error(error)
    });
    return call   
}

export async function setCustomer (/*customer*/){
}
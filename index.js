const { GoogleSpreadsheet } = require('google-spreadsheet');
const credenciais = require('./credenciais')


const doc = new GoogleSpreadsheet(/* 'aqui vai o id da planilha que será manipulada' */);

  doc.useServiceAccountAuth({
    //pode ser feito com as variveis de ambiente
    client_email: credenciais.client_email,
    private_key: credenciais.private_key,
  });
  
  doc.loadInfo().then(() =>{
    const sheet = doc.sheetsByIndex[0];
    sheet.getRows().then(e =>{
      // esse map é para listar todos as celulas da mesma coluna
      e.map(f=>{
        //aqui retorna um arrey com um objeto para cada calula da planilha
        console.log(f._rawData)
      })
    })
    
  })

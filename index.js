require('dotenv').config() // ВЫПОЛНЯЕМ СРАЗУ МЕТОД КОНФИГ ИЗ ЗАТРЕБОВАННОЙ БИБЛЫ ДОТЕНВ
const express = require('express')
const sequelize = require('./db')

const PORT = process.env.PORT || 5000

const app = express()
const cors = require('cors');
const { response } = require('express')

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch(e) {
      console.log(e)
  }

}

app.get('/getdata', (req, res) => {
  response.send(data);
  console.log('getdata get request, data object with people array')
})

app.use(cors({
  origin: '*'
}));

const data = 
  {
            people: [
            {
              name: 'Dima',
              age: 28
            },
            
            {
              name: 'Masha',
              age: 26
            },
            
            {
              name: 'Sasha',
              age: 20
            },
            
          ]}


const inquirer = require('inquirer')
const nlog = require('./nlog')


;(async function(){
  let q1 = await inquirer.prompt([
    {
      type: 'list',
      name: 'toBeDelivered',
      message: 'Is this for delivery?',
      choices:[
        '111',
        '222'
      ],
      default: false
    }
  ])
  nlog(q1)
  
  let q2 = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'toBeDelivered',
      message: 'Is this for delivery1?',
      default: false
    }
  ])
  nlog(q2)
})();
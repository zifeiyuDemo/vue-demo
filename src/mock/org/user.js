import Mock from 'mockjs'

function addUser (request) {
  console.log('filte mock request' + JSON.stringify(request))
  let userData = request.body
  let data = {
    msg: 'ok',
    status: 200,
    userName: JSON.parse(userData).user.username
  }
  console.log('mock get userData ' + JSON.stringify(request.body))
  return data
}

Mock.mock('addUser', 'post', addUser)

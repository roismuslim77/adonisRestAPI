'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.get('/', () => {
//   return { greeting: 'Hello world in JSON' }
// })

Route.group(()=>{
  Route.post('books', 'BookController.post')
  Route.get('books', 'BookController.index')
  Route.get('books/:id', 'BookController.show')
  Route.put('books/:id', 'BookController.put')
  Route.delete('books/:id', 'BookController.delete')
}).prefix('api')

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('courses', 'CoursesController.createCourse').middleware(['auth'])
  Route.get('courses/:id', 'CoursesController.findCourse')
  Route.patch('courses/:id', 'CoursesController.updateCourse').middleware(['auth'])
}).namespace('App/Modules/Courses')

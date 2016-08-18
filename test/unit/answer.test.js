
// import 'babel-polyfill';
// import expect from 'expect';
// import models from '../../db/models';

// describe('models/answer', () => {
//   before(() => {
//     return models.sequelize.sync();
//   });
//
//   beforeEach(() => {
//     this.User = require('../../models').User;
//     this.Task = require('../../models').Task;
//   });
//
//   describe('create', () => {
//     it('creates a task', () => {
//       return this.User.create({ username: 'johndoe' }).bind(this).then(function (user) {
//         return this.Task.create({ title: 'a title', UserId: user.id }).then(function (task) {
//           expect(task.title).to.equal('a title');
//         });
//       });
//     });
//   });
// });

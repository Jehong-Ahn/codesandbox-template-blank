var require = meteorInstall({"imports":{"api":{"links.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// imports/api/links.js                                              //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
module.export({
  LinksCollection: () => LinksCollection
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
const LinksCollection = new Mongo.Collection('links');
///////////////////////////////////////////////////////////////////////

}}},"server":{"main.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let LinksCollection;
module.link("/imports/api/links", {
  LinksCollection(v) {
    LinksCollection = v;
  }

}, 1);

function insertLink(_ref) {
  let {
    title,
    url
  } = _ref;
  LinksCollection.insert({
    title,
    url,
    createdAt: new Date()
  });
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (LinksCollection.find().count() === 0) {
    insertLink({
      title: 'Do the Tutorial',
      url: 'https://www.meteor.com/tutorials/react/creating-an-app'
    });
    insertLink({
      title: 'Follow the Guide',
      url: 'http://guide.meteor.com'
    });
    insertLink({
      title: 'Read the Docs',
      url: 'https://docs.meteor.com'
    });
    insertLink({
      title: 'Discussions',
      url: 'https://forums.meteor.com'
    });
  }
});
///////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".jsx"
  ]
});

var exports = require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvbGlua3MuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tYWluLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydCIsIkxpbmtzQ29sbGVjdGlvbiIsIk1vbmdvIiwibGluayIsInYiLCJDb2xsZWN0aW9uIiwiTWV0ZW9yIiwiaW5zZXJ0TGluayIsInRpdGxlIiwidXJsIiwiaW5zZXJ0IiwiY3JlYXRlZEF0IiwiRGF0ZSIsInN0YXJ0dXAiLCJmaW5kIiwiY291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQUNDLGlCQUFlLEVBQUMsTUFBSUE7QUFBckIsQ0FBZDtBQUFxRCxJQUFJQyxLQUFKO0FBQVVILE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLGNBQVosRUFBMkI7QUFBQ0QsT0FBSyxDQUFDRSxDQUFELEVBQUc7QUFBQ0YsU0FBSyxHQUFDRSxDQUFOO0FBQVE7O0FBQWxCLENBQTNCLEVBQStDLENBQS9DO0FBRXhELE1BQU1ILGVBQWUsR0FBRyxJQUFJQyxLQUFLLENBQUNHLFVBQVYsQ0FBcUIsT0FBckIsQ0FBeEIsQzs7Ozs7Ozs7Ozs7QUNGUCxJQUFJQyxNQUFKO0FBQVdQLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLGVBQVosRUFBNEI7QUFBQ0csUUFBTSxDQUFDRixDQUFELEVBQUc7QUFBQ0UsVUFBTSxHQUFDRixDQUFQO0FBQVM7O0FBQXBCLENBQTVCLEVBQWtELENBQWxEO0FBQXFELElBQUlILGVBQUo7QUFBb0JGLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLG9CQUFaLEVBQWlDO0FBQUNGLGlCQUFlLENBQUNHLENBQUQsRUFBRztBQUFDSCxtQkFBZSxHQUFDRyxDQUFoQjtBQUFrQjs7QUFBdEMsQ0FBakMsRUFBeUUsQ0FBekU7O0FBR3BGLFNBQVNHLFVBQVQsT0FBb0M7QUFBQSxNQUFoQjtBQUFFQyxTQUFGO0FBQVNDO0FBQVQsR0FBZ0I7QUFDbENSLGlCQUFlLENBQUNTLE1BQWhCLENBQXVCO0FBQUNGLFNBQUQ7QUFBUUMsT0FBUjtBQUFhRSxhQUFTLEVBQUUsSUFBSUMsSUFBSjtBQUF4QixHQUF2QjtBQUNEOztBQUVETixNQUFNLENBQUNPLE9BQVAsQ0FBZSxNQUFNO0FBQ25CO0FBQ0EsTUFBSVosZUFBZSxDQUFDYSxJQUFoQixHQUF1QkMsS0FBdkIsT0FBbUMsQ0FBdkMsRUFBMEM7QUFDeENSLGNBQVUsQ0FBQztBQUNUQyxXQUFLLEVBQUUsaUJBREU7QUFFVEMsU0FBRyxFQUFFO0FBRkksS0FBRCxDQUFWO0FBS0FGLGNBQVUsQ0FBQztBQUNUQyxXQUFLLEVBQUUsa0JBREU7QUFFVEMsU0FBRyxFQUFFO0FBRkksS0FBRCxDQUFWO0FBS0FGLGNBQVUsQ0FBQztBQUNUQyxXQUFLLEVBQUUsZUFERTtBQUVUQyxTQUFHLEVBQUU7QUFGSSxLQUFELENBQVY7QUFLQUYsY0FBVSxDQUFDO0FBQ1RDLFdBQUssRUFBRSxhQURFO0FBRVRDLFNBQUcsRUFBRTtBQUZJLEtBQUQsQ0FBVjtBQUlEO0FBQ0YsQ0F2QkQsRSIsImZpbGUiOiIvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuXG5leHBvcnQgY29uc3QgTGlua3NDb2xsZWN0aW9uID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2xpbmtzJyk7XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IExpbmtzQ29sbGVjdGlvbiB9IGZyb20gJy9pbXBvcnRzL2FwaS9saW5rcyc7XG5cbmZ1bmN0aW9uIGluc2VydExpbmsoeyB0aXRsZSwgdXJsIH0pIHtcbiAgTGlua3NDb2xsZWN0aW9uLmluc2VydCh7dGl0bGUsIHVybCwgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpfSk7XG59XG5cbk1ldGVvci5zdGFydHVwKCgpID0+IHtcbiAgLy8gSWYgdGhlIExpbmtzIGNvbGxlY3Rpb24gaXMgZW1wdHksIGFkZCBzb21lIGRhdGEuXG4gIGlmIChMaW5rc0NvbGxlY3Rpb24uZmluZCgpLmNvdW50KCkgPT09IDApIHtcbiAgICBpbnNlcnRMaW5rKHtcbiAgICAgIHRpdGxlOiAnRG8gdGhlIFR1dG9yaWFsJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vd3d3Lm1ldGVvci5jb20vdHV0b3JpYWxzL3JlYWN0L2NyZWF0aW5nLWFuLWFwcCdcbiAgICB9KTtcblxuICAgIGluc2VydExpbmsoe1xuICAgICAgdGl0bGU6ICdGb2xsb3cgdGhlIEd1aWRlJyxcbiAgICAgIHVybDogJ2h0dHA6Ly9ndWlkZS5tZXRlb3IuY29tJ1xuICAgIH0pO1xuXG4gICAgaW5zZXJ0TGluayh7XG4gICAgICB0aXRsZTogJ1JlYWQgdGhlIERvY3MnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9kb2NzLm1ldGVvci5jb20nXG4gICAgfSk7XG5cbiAgICBpbnNlcnRMaW5rKHtcbiAgICAgIHRpdGxlOiAnRGlzY3Vzc2lvbnMnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9mb3J1bXMubWV0ZW9yLmNvbSdcbiAgICB9KTtcbiAgfVxufSk7XG4iXX0=

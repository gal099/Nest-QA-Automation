export const selector = {
  loginBtn: '.ButtonLogin', //Login button
  searchInput: '.NewSearch.NewSearch--noLogged > form > div > input', //Landing page search box input
  searchBtn: '.NewSearch-button > svg', //Landing page search box button
  courseList: '.CourseList > article', //List of searched courses
  menu: 'div.Menu-dropdown > div > svg', //Landing page Dropdown menu
  blog: 'li:nth-child(2) > a > div', //Platzi blog
  blogSearchInput: 'div.col-xs-12.col-md-5 > form > input', //Blog search box input
  blogSearchBtn: 'div.col-xs-12.col-md-5 > form > div > input[type=submit]', //Blog search button
  searchTabs: '#search > div.Search.u-wrapper > div > div > div.u-wrapper > div > div.Tab', //Amount of tags
  tags: '#search > div.Search.u-wrapper > div > div > div.u-wrapper > div > div:nth-child({})', //Courses, school and lessons tags
  activeTag: '.Tab.is-active >p', //Name of the active tag
  pages: 'div.SearchTabs-content > div > nav > ul > li > button.page', //Amount of pages
  courseCardTitle: '.CourseCard-content-title', //Title of the course card
  courseTitle: '.Hero-content-title', //Name of the course
  opinions: 'p.CourseExtraInfo-content-opinions', //Amount of opinions
  postList: 'div > div > div:nth-child(2) > div > section > article', //List of searched post
  filtersMenu: '.Filters-container', //Blog Filters menu
  mostVoted: 'a.Filters-single:nth-child(3)', //Most voted filter
  activeFilter: '.Filters-selected', //The selected filter from the filters menu
};

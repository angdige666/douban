const Mock = require('mockjs');

Mock.mock("/books","get",require("./json/books"))

Mock.mock("/moveitem","get",require("./json/moveitem"))

Mock.mock("/findmovie","get",require("./json/fxdy"))

Mock.mock("/fenleilist","get",require("./json/list"))

Mock.mock("/bookinfo","get",require("./json/bookinfo"))

Mock.mock("/findbooks","get",require("./json/findbooks"))

Mock.mock("/bookandmovies","get",require("./json/bookandmovie"))

Mock.mock("/search","get",require("./json/search"))

Mock.mock("/xiaozua","get",require("./json/xiaozua"))

Mock.mock("/xiaozub","get",require("./json/xiaozub"))

Mock.mock("/xiaozuc","get",require("./json/xiaozuc"))


// Mock.mock("/xiaohone","get",require("./json/data.json"))








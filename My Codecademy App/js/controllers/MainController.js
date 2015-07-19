app.controller('MainController',['$scope', function($scope) {
  $scope.title = 'Greg Domorki\'s Music Store';
  $scope.promo = 'Check out these hits';
  $scope.products = [
  {
    name: 'Taylor Swift - Fearless',
    price: 19,
    pubdate: new Date('2014', '03', '08'),
    cover: 'http://listosphere.com/wp-content/uploads/2015/04/Fearless-FanMade-Album-Cover-fearless-taylor-swift-album-16855631-600-600.jpg',
    likes: 0,
    dislikes: 0
  },
  {
    name: 'Martin Garrix - Animals',
    price: 8,
    pubdate: new Date('2013', '08', '01'),
    cover: 'http://mixmatters.com/uploads/song/image/16272/Martin-Garrix-Animals.jpg',
    likes: 0,
    dislikes: 0
  },
    
    {
    name: 'Avicii - Levels',
    price: 5,
    pubdate: new Date('1995', '03', '20'),
    cover: 'https://fanart.tv/fanart/music/c85cfd6b-b1e9-4a50-bd55-eb725f04f7d5/albumcover/levels-remixes-4f866901c2c2a.jpg',
    likes: 0,
    dislikes: 0
    },

    {
    name: 'Katy Perry - Prisim',
      price: 11,
      pubdate: new Date('1990', '12', '29'),
      cover: 'http://netstorage.metrolyrics.com/albums/1378484622katy-perry-prism.jpg',
    likes: 0,
    dislikes: 0
    }
];
$scope.plusOne = function(index){
$scope.products[index].likes += 1;
};

$scope.minusOne = function(index){
  $scope.products[index].dislikes +=1;
};
}]);
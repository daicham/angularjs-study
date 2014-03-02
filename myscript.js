var mainCtrl = function($scope) {
  $scope.users = [
    {"name": "taguchi", "score": 55.22},
    {"name": "tanaka", "score": 38.22},
    {"name": "yamada", "score": 11.22},
    {"name": "suzuki", "score": 90.22},
    {"name": "sasaki", "score": 98.22},
    {"name": "watanabe", "score": 4.22}
  ];
  $scope.today = new Date();
};

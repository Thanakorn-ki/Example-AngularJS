var app = angular.module('aum', [])
  app.controller('test', function($http,$scope) {
/////////////////////////////
$scope.testget = function(){
  	$http.get('/testget')
   .then(
       function(response){
         console.log(response.data);
       } 
    )}
/////////////////////////////

///////////////////////////
  $scope.testpost = function(){
  	var data = {name:$scope.name,sur:$scope.sur}
   	$http.post('/testpost',data)
   	.then(
   		function(response){
   			$scope.fullname = response.data.full;
   			console.log(response.data.full)
   		}
   	)}
   /////////////////////
   $scope.sum = 0
   $scope.callsum=[]
	$scope.call = function(number){
	 var data = {sum:number}
	 $scope.callsum.push(data);
	 $scope.sum+=$scope.callsum.sum
	 if (number==0) {$scope.callsum=[]};
	console.log($scope.sum)
	}
	$scope.count = 0
	$scope.testchange = function(){
		if ($scope.change!='') {
			$scope.count++
		}else{$scope.count=0}
	}
		$http.get('http://api.openweathermap.org/data/2.5/weather?q=Bangkok,uk&appid=44db6a862fba0b067b1930da0d769e98')
		.then(
			function(response){
				$scope.tem = response.data
			})
/////////////////////////
  $scope.search = function () {
      $http.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: 'AIzaSyDAZZt76dsvo2dnvBURq1GXS-lmNZKi_Fs',
          type: 'video',
          maxResults: '8',
          part: 'id,snippet',
          fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle',
          q: this.query
        }
      })
      .success( function (data) {
        VideosService.listResults(data);
        $log.info(data);
       console.log(data)
      })
 
    }

  });  //controller test}

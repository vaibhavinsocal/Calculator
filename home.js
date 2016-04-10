var app = angular.module('myApp', []);

app.controller('home', function($scope) 
{

		$scope.clearInput = function() 
        {
    		
    		while($scope.a.length != 0)
    		{
    			$scope.a = $scope.a.slice(0, -1);
    		}
    		
    	};

        
        $scope.inputOne = function()
        {
        	if($scope.a == undefined)
        		$scope.a = "1";
        	else
        		$scope.a = $scope.a.concat("1");

        };
        $scope.inputTwo = function()
        {
        	if($scope.a == undefined)
        		$scope.a = "2";
        	else
        		$scope.a = $scope.a.concat("2");

        };
        $scope.inputThree = function()
        {
        	if($scope.a == undefined)
        		$scope.a = "3";
        	else
        		$scope.a = $scope.a.concat("3");

        };
        $scope.inputFour = function()
        {
        	if($scope.a == undefined)
        		$scope.a = "4";
        	else
        		$scope.a = $scope.a.concat("4");

        };
        $scope.inputFive = function()
        {
        	if($scope.a == undefined)
        		$scope.a = "5";
        	else
        		$scope.a = $scope.a.concat("5");

        };
        $scope.inputSix = function()
        {
        	if($scope.a == undefined)
        		$scope.a = "6";
        	else
        		$scope.a = $scope.a.concat("6");

        };
        $scope.inputSeven = function()
        {
        	if($scope.a == undefined)
        		$scope.a = "7";
        	else
        		$scope.a = $scope.a.concat("7");

        };
        $scope.inputEight = function()
        {
        	if($scope.a == undefined)
        		$scope.a = "8";
        	else
        		$scope.a = $scope.a.concat("8");

        };
        $scope.inputNine = function()
        {
        	if($scope.a == undefined)
        		$scope.a = "9";
        	else
        		$scope.a = $scope.a.concat("9");

        };

         $scope.inputZero = function()
        {
        	if($scope.a == undefined)
        		$scope.a = "0";
        	else
        		$scope.a = $scope.a.concat("0");

        };
       
     
		$scope.addPlus = function()
		{
		   console.log($scope.a);
		   $scope.a = $scope.a.concat("+");
		};
		$scope.addMinus = function()
		{
		   $scope.a = $scope.a.concat("-");
		};
		$scope.addMultiply = function()
		{
		   $scope.a = $scope.a.concat("*");
		};
		$scope.addDivide = function()
		{
		   $scope.a = $scope.a.concat("/");
		};

       var numArray = [];


		$scope.addProcess = function() 
		{
			 //$scope.keyupkeycode = event.keyCode;
             
			 
			 $scope.b = $scope.a;
             $scope.a = $scope.a.slice(0, -1);
         
             if(numArray.length  != 0)
             {
             	
             	$scope.result = Number(numArray[0]) + Number($scope.a);
             	numArray[0] = $scope.result;
             	
             }
             else
             {
             	numArray.push($scope.a);
         	 	$scope.result = Number(0);
	     	 	
            
            
         	$scope.clearInput();
             
            	

             
        };

        $scope.subProcess = function() 
		{
			 //$scope.keyupkeycode = event.keyCode;
             
			 
			  $scope.b = $scope.a;
             $scope.a = $scope.a.slice(0, -1);
         
             if(numArray.length  != 0)
             {
             	$scope.result = Number(numArray[0]) - Number($scope.a);
             	numArray[0] = $scope.result;
             }
             else
             {
             	numArray.push($scope.a);
         	 	$scope.result = Number(0);
	     	 
         	 }
            
            
         	$scope.clearInput();
             
            	

             
        };

         $scope.mulProcess = function() 
		{
			 //$scope.keyupkeycode = event.keyCode;
             
			 
			  $scope.b = $scope.a;
             $scope.a = $scope.a.slice(0, -1);
         
             if(numArray.length  != 0)
             {
             	$scope.result = Number(numArray[0]) * Number($scope.a);
             	numArray[0] = $scope.result;
             	
             }
             else
             {
             	numArray.push($scope.a);
         	 	$scope.result = Number(0);
	     	 	
         	 }
            
            
         	$scope.clearInput();
             
            	

             
        };

        $scope.divProcess = function() 
		{
			 //$scope.keyupkeycode = event.keyCode;
             
			 
			  $scope.b = $scope.a;
             $scope.a = $scope.a.slice(0, -1);
         
             if(numArray.length  != 0)
             {
             	$scope.result = Number(numArray[0]) / Number($scope.a);
             	numArray[0] = $scope.result;
             	
             }
             else
             {
             	numArray.push($scope.a);
         	 	$scope.result = Number(0);
	     	 	
         	 }
            
            
         	$scope.clearInput();
             
            	

             
        };

        
    	$scope.EqualTo = function()
    	{
    		var operator = $scope.b.slice(-1);

    		switch(operator)
    		{
         	case '+': $scope.result = Number(numArray[0]) + Number($scope.a)  ;
         	case '-': $scope.result = Number(numArray[0]) - Number($scope.a)  ;
         	case '/': $scope.result = Number(numArray[0]) * Number($scope.a)  ;
            case '*': $scope.result = Number(numArray[0]) / Number($scope.a)  ;
     		}
    		
    	};



}

});


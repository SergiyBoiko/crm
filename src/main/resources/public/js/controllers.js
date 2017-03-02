/*****Navigation****/
callCenterCRM.controller("NavCtrl",function($scope){
  //  navActive=='main';
})
/****Index*****/
callCenterCRM.controller("IndexCtrl",function($scope){
    $scope.activeTab='customer';
    $scope.noteView='note_list';
    $scope.organizationName="";
    $scope.totalNotes=notesModel.length;
    $scope.setActiveTab=function(tabToSet){
        $scope.activeTab=tabToSet;
    }
    $scope.setNoteView=function(view){
        $scope.noteView=view;
    }
    $scope.setOrganizationName=function(name){
        $scope.organizationName=name;
    }
})

callCenterCRM.controller("CustomerData", function ($scope) {
    $scope.$parent.organizationName=customerModel.organizationName;
    $scope.customer = customerModel;
});

callCenterCRM.controller("CustomerNote", function ($scope) {
    $scope.notes = notesModel;
    $scope.clickShow=function(id){
        $scope.note=notesModel[id];
    }
    $scope.clickDrop=function(id){
        alert(id);
    }
});

/*****Customers*******/
callCenterCRM.controller("CustomersCtrl",function($scope,$sce,$element){
    var customerNum=customersModel.length;
    $scope.panelTitle=$sce.trustAsHtml('Список клієнтів&#160;<span class="badge" data-toggle="tooltip" data-placement="top" title="Загальна кількість">'+customerNum+'</span>');
    $scope.customerView="customer_list";
    $scope.customers=customersModel;
    $scope.campaigns=campaignsModel;
    $scope.clickAdd=function(view){
        setCustomerView('customer_form');
        $scope.panelTitle=$sce.trustAsHtml("Додати нового клієнта");
        $scope.customer= {"organizationName":"","contactPerson":"","phoneNumber":"","email":"","address":""};
    }
    $scope.clickDrop=function(id){
        alert(id);
    }
    $scope.clickShow=function(id){
        setCustomerView('customer_show');
        $scope.panelTitle=$sce.trustAsHtml("Клієнт: <strong>"+customersModel[id].organizationName+"</strong>");
        $scope.customer=customersModel[id];
    }
    $scope.clickEdit=function(id){
        setCustomerView('customer_form');
        $scope.panelTitle=$sce.trustAsHtml("Клієнт: <strong>"+customersModel[id].organizationName+"</strong>");
        $scope.customer=customersModel[id];
    }

    $scope.clickAssign=function(){
        alert("assign");
    }

    $scope.clickSave=function(){
        $scope.panelTitle=$sce.trustAsHtml('Список клієнтів&#160;<span class="badge" data-toggle="tooltip" data-placement="top" title="Загальна кількість">'+customerNum+'</span>');
        setCustomerView('customer_list')
        console.log($scope.customer);
    }

    $scope.clickCansel=function(){
        $scope.panelTitle=$sce.trustAsHtml('Список клієнтів&#160;<span class="badge" data-toggle="tooltip" data-placement="top" title="Загальна кількість">'+customerNum+'</span>');
        setCustomerView('customer_list');
    }

    setCustomerView=function(view){
        $scope.customerView=view;
    }
/*
    $scope.clickChoose=function(id,name){
       //var dropdown_header = angular.element($element.'dropdown-header');
        console.log(angular.element('dropdown-header'));
    }

    $(".dropdown-menu li a").click(function(){
        var selText = $(this).text();
        var id=$(this).attr("id");
        $(this).parents('.btn-group').find('.dropdown-toggle').attr("id",id);
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret right"></span>');
    });*/
});

callCenterCRM.controller("UsersCtrl",function($scope,$sce,$element){
    var usersNum=usersModel.length;
    $scope.usersView="users_list";
    $scope.users=usersModel;
    $scope.panelTitle=$sce.trustAsHtml('Список користувачів&#160;<span class="badge" data-toggle="tooltip" data-placement="top" title="Загальна кількість">'+usersNum+'</span>');

    $scope.clickAdd=function(){
        setUsersView('users_form');
        $scope.panelTitle=$sce.trustAsHtml("Додати нового користувача");
        $scope.user= {"username":"","login":"","password":"","extension":"","role":"none","email":""};
    }

    $scope.clickDrop=function(id){
        alert(id);
    }
    $scope.clickEdit=function(id){
        setUsersView('users_form');
        $scope.panelTitle=$sce.trustAsHtml("Користувач: <strong>"+usersModel[id].username+"</strong>");
        $scope.user=usersModel[id];
    }

    $scope.clickSave=function(){
        $scope.panelTitle=$sce.trustAsHtml('Список користувачів&#160;<span class="badge" data-toggle="tooltip" data-placement="top" title="Загальна кількість">'+usersNum+'</span>');
        setUsersView('users_list')
        console.log($scope.user);
    }

    $scope.clickCansel=function(){
        $scope.panelTitle=$sce.trustAsHtml('Список користувачів&#160;<span class="badge" data-toggle="tooltip" data-placement="top" title="Загальна кількість">'+usersNum+'</span>');
        setUsersView('users_list');
    }

    setUsersView=function(view){
        $scope.usersView=view;
    }
});

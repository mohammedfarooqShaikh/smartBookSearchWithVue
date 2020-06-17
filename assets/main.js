$(document).ready(function(){
  var client = ZAFClient.init();
  client.invoke('resize', { width: '340px', height: '400px' });

    $("#myInput").on("keyup", function() {
              var value = $(this).val().toLowerCase();
              $(".Sorting").filter(function() {
                  console.log("im here to update")
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
              });
            });  

  
  new Vue({
    el: "#app",
    data: {
      groups: [],
      expandedGroup: []
    },
    beforeCreate(){
     fetch('/data.JSON')
        .then(response => response.json())
        .then(json => {
            this.groups = json;
        })
        .catch(function () {
            this.dataError = true;
        })
    },
    methods: {
      isExpanded(key) {
          return this.expandedGroup.indexOf(key) !== -1;
      },
      toggleExpansion(key) {
          if (this.isExpanded(key))
                this.expandedGroup.splice(this.expandedGroup.indexOf(key), 1);
          else
                this.expandedGroup.push(key);
      }
    }
    
  })

});
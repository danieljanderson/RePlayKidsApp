let data2 = new parseFile.ConfigObj(function(data){
    let good_data = data.filteredData();
    $('#my-final-table').dynatable({
      dataset: {
        records: good_data
      }
    });
     $('#my-final-table').on('click','tbody tr', function(e) {        
      var uid = $(this).find('td:first').text();
      var obj;
      for(var i = 0; i < good_data.length; i++) {
        if(good_data[i]['uniqueId'] == uid) {
          obj = good_data[i];
          break;
        }
      }
        
        
      var $modal = $('.detail-page').modal('show');
      
      // Update modal content
      $modal.find('h2').text(obj.name);      
      $modal.find('#manufacturer').text(obj.manufacturer);
      $modal.find('#toyImage').attr('src', obj.photo)    
      $modal.find('#sensoryOutput').text(obj.sensoryType); 
      $modal.find('#toyType').text(obj.toyType);
      $modal.find('#instructionType').text(obj.instructionType);
      $modal.find('#link').text(obj.instructions)
      $modal.find('#link').attr('href',obj.instructions);        
      $modal.find('#difficultyLevel').text(obj.difficultyLevel);
      $modal.find('h4').empty()
      var keyWordString = obj.keywords
      var keyWordArray = keyWordString.split(',')
      function createKeywordPills(array){
        for(var i=0;i<array.length;i++){
          var label = array[i]
          var pill = $("<span>", {"class": "label label-primary keyWordPills", text:label});
          //pill.text = array[i]
          console.log(pill)
          $('#pillBox').append(pill)
        }
      }
      createKeywordPills(keyWordArray)
      $('.keyWordPills').css("display","inline-block")
      //$modal.find('#keywords').text(obj.keywords);    
      $modal.find('#adaptingGroup').text(obj.adaptingGroup);    
      
      $('.detail-page').modal('show');
    
    });
});
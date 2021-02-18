<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

</head>
<body>

<div class="container">
  <h2>Striped Rows</h2>
  <p>The .table-striped class adds zebra-stripes to a table:</p>            
  <table id="supplier" class="table table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>job title</th>
        <th>frist name</th>
        <th>last name</th>
        <th>email address</th>
        <th>action</th>
        
      </tr>
    </thead>
    <tbody>
      
    </tbody>
  </table>
</div>
<script>
    $(document).ready(function(){
    
    getSuppliers();
    
    });
    function getSuppliers(){
        $.get("http://localhost:1000/get-suppliers", function(data, status){
        var rows = "";
    
            $.each(data.data, function (index, itemData) {
           //     dataItems += index + ": " + itemData.job_title + "\n";
           console.log(itemData);
           rows += "<tr><td>" + itemData.id + "</td><td>" + itemData.job_title + "</td><td>"+itemData.first_name+"</td><td>"+itemData.last_name+"</td><td>"+itemData.email_address+"</td><td><button onclick='deleteSupplier("+itemData.id+")'>delete</button></td></tr>" ;
            });
            $("#supplier tbody").html(rows); 

        });
    }
    function deleteSupplier(id){
        $.get("http://localhost:1000/delete-supplier/"+id, function(data, status){
        
            getSuppliers();
            
            
        });
    }
    </script>
</body>

</html>
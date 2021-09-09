<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>modal</title>
    <link rel="stylesheet" href="4.css"> 
   

</head>
<body>
   <div class="madal">
    <div class="=madal_body">Modal</div>
   </div>
   <button class="btn-open-popup">Modal 띄우기</button>
   
   <script>
       const modal = document.querySelector('.modal');
       const btnopenpopup = document.querySelector('.btn-open-popup');

       btnOpenPopup.addEventListener('click', () => {modal.style.display = 'block';});
   </script>

</body>
</html>
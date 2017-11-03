window.onload = function(){
         document.getElementById('add').onclick = startComment;
    }

    document.onkeydown = function checkKeycode(e){
                if((e.keyCode == 13) && e.ctrlKey) 
                return startComment();     
}
               
   function startComment(){
    var commentConteiner = document.createElement('div');
    commentConteiner.classList.add("comment");
    myDate();
    startKomm();
    userName();
    var timerId = setTimeout( document.getElementById('txt').value = "", 1000)  
        }
           function startKomm(){
            var text = document.getElementById('txt').value;
            var komm = document.createElement('p');
            var newText = document.createTextNode(text);
            komm.appendChild(newText);
            document.getElementById('komments').appendChild(komm);
            komm.classList.add("comment__message");
            komm.classList.add("comment__add");

            }
          function userName(){
                    var authorCom = document.createElement('p');
                    var newUser = document.createTextNode("You");
                    authorCom.appendChild(newUser);
                    document.getElementById('authorComment').appendChild(authorCom);
                    authorCom.classList.add("comment__user__name");   
                }
            function myDate(){
                    var today = new Date;
                    var curr_date = today.getDate();
                    var curr_month = today.getMonth() + 1;
                    var curr_year = today.getFullYear();
                    var myDate = document.createElement('p');
                    var newDate = document.createTextNode(curr_date + " " + curr_month + " " + curr_year);
                    myDate.appendChild(newDate);
                    document.getElementById('authorDate').appendChild(myDate);
                    myDate.classList.add("comment__user__date"); 
                }
       
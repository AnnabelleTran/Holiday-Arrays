var elements = document.querySelectorAll('li.holidays');
        for(var i=0; i<elements.length; i++)
        {
            if(i%2===0){
                elements[i].className = 'yellow';
            }
            else if(i%2===1){
                elements[i].className = 'green';
            }
        }

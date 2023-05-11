(function(){
    "use strict"

    let convertType = "miles";
    const heading = document.querySelector('h1');
    const intro = document.querySelector('p');
    const answerDiv = document.getElementById('answer');
    const form = document.getElementById('convert');

    document.addEventListener('keydown', function(event){
        var key = event.code;
        if (key == 'KeyK'){
            convertType = 'kilometers';
            heading.innerHTML = "Kilometers to Miles Converter";
            intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles.";
            //change heading
            //change intro p
            //change the value of the convertType variable
        }
        else if(key === 'KeyM'){
            convertType = 'miles';
            heading.innerHTML = "Miles to Kilometer Converter";
            intro.innerHTML = "Type in  a number of miles and click the button to convert the distance to kilometers.";
        }
    });

    form.addEventListener('submit', function(){

    });

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);

        if(distance){
            if(convertType == 'miles'){
                const conversion = (distance * 1.609644).toFixed(3);
                answerDiv.innerHTML = `<h2>${distance} miles converts to ${conversion} km(s)</h2>`
            }
            else if(convertType == 'kilometers'){
            const conversion = (distance * 0.621371192).toFixed(3);
            answerDiv.innerHTML = `<h2>${distance} kilometers converts to ${conversion} mile(s)</h2>`
            }
            
        }

        else {
            answerDiv.innerHTML = "<h2>Please provide a number</h2>"
        }
    })
})();
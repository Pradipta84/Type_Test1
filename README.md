# Type_Test1
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        html {
            background-image: linear-gradient(260deg, rgb(214, 42, 214), rgb(26, 138, 218));
        }
        body {
            background-image: linear-gradient(260deg, rgb(214, 42, 214), rgb(26, 138, 218));
        }
        /* Card container style */
        .card {
            background-color: #1e1e1e;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            width: 300px;
            margin: auto;
            margin-top: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            box-shadow: 5px 5px 22px rgb(33, 220, 89);
            border: 3px solid red;
        }

        /* Glowing effect for text */
        #display {
            color: #35e2d4;
            font-size: 24px;
        }

        /* Glowing effect for points */
        #points {
            margin-top: 20px;
            font-size: 20px;
            font-weight: bold;
            color: rgb(191, 235, 60);
        }

        /* Glowing effect for input box */
        #textinput {
            margin-top: 20px;
            background-color: #000;
            color: #ffffff;
            border: none;
            padding: 10px;
            font-size: 16px;
            box-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 15px #ff00ff, 0 0 20px #ff00ff;
            outline: none;
            border-radius: 5px;
        }

#message {
    outline-style: dashed;
    outline-color: #ffffff;
    margin-top: 32px;
    text-align: center;
    font-size: 18px;
    color: #ffff14;
    background-color: #2243e8;
    border: 2px solid #000;
    border-radius: 8px;
    display: inline-block; 
    padding: 10px;
    margin-left: 45%;
}

#message::before {
    /* This pseudo-element is set to not display */
    display: none; 
}

#message::after {
    margin-left: 45%;
    margin-top: 32px;
    display: inline-block;
    color: #ffffff;
    background-color: #176518;
    border: 2px solid #000;
    border-radius: 8px;
}

    </style>
</head>
<body>
    <div class="card">
        <div id="display"></div>
        <input type="text" id="textinput" placeholder="Type a Name: 'Ramesh'" onkeyup="Update()">
        <div id="points">Points: 0</div>
    </div>
    <div id="message"></div>

    <script>
        let arr1 = ["Ramesh", "Suresh", "Mahesh", "Rajesh", "Rahul", "Rabi", "Animesh", "Prakash"];
        let currentIndex = 0;
        let points = 0;
        let timer;

        document.getElementById('display').innerHTML = arr1[currentIndex];

        function Update() {
            clearTimeout(timer);  // clear previous timer
            timer = setTimeout(decrementPoints, 5000);  // set new timer

            var a = document.getElementById("textinput").value;
            if (a === arr1[currentIndex]) {
                points++;
                currentIndex++;
                document.getElementById('textinput').value = '';
                if (currentIndex < arr1.length) {
                    document.getElementById('display').innerHTML = arr1[currentIndex];
                } else {
                    document.getElementById('message').innerHTML = "All Names Displayed";
                    document.getElementById('textinput').disabled = true;
                }
                document.getElementById('points').innerHTML = "Points: " + points;
            }
        }

        function decrementPoints() {
            points--;
            if (points < 0) points = 0;
            document.getElementById('points').innerHTML = "Points: " + points;
        }
    </script>
</body>
</html>


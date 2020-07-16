(function pgg() {
    const t1 = document.querySelector('title');
    t1.textContent = 'Player - A Sample Game.';

    const b1 = document.querySelector('body');
    const d1 = document.createElement('div');
    const h10 = document.createElement('h1');
    d1.className = 'container ';
    h10.textContent = 'Let\'s Play A Number Guessing Game';
    b1.append(d1);
    d1.append(h10);

    const p1 = document.createElement('p');
    d1.append(p1);
    p1.textContent = 'Guess a number between 1 and 5:';
    s4 = document.createElement('span');
    s4.textContent = '';
    p1.append(s4);

    const i1 = document.createElement('input');
    i1.type = 'text';
    i1.id = 'inputScore';
    d1.append(i1);

    const btn1 = document.createElement('button');
    btn1.id = 'pbtn1';
    btn1.textContent = 'Player 1';

    const btn2 = document.createElement('button');
    btn2.id = 'pbtn2';
    btn2.textContent = 'Player 2';

    const btn3 = document.createElement('button');
    btn3.id = 'rstbtn';
    btn3.textContent = 'Reset'

    d1.append(btn1);
    d1.append(btn2);
    d1.append(btn3);

    const inputScore = document.getElementById('inputScore');
    const player1Btn = document.getElementById('pbtn1')
    const player2Btn = document.getElementById('pbtn2')
    const reserBtn = document.getElementById('rstbtn');

    let p1score = 0;
    let p2score = 0;
    let winScore = gResult();
    let gameOver = false;
    let count1 = 0;
    let count2 = 0;

    player1Btn.addEventListener('click', () => {

        // console.log('Player1')
        if (!gameOver) {
            p1score = Number(inputScore.value);
            if (p1score === winScore) {
                alert('Player 1 is The Winner');
            } else {
                count1++;
                alert(`Wrong Guess! You can try ${3-count1} more times.`);
                if (count1 == 3) {
                    player1Btn.setAttribute('disabled', 'disabled');
                    alert('Player1 Can\'t try anymore. Maximum trying 3 reached. Please reset the game.')
                }
            }
            //player1scoreDisplay.textContent = p1score;
        }
    })

    player2Btn.addEventListener('click', () => {
        // console.log('Player2')
        if (!gameOver) {
            p2score = Number(inputScore.value);

            if (p2score === winScore) {
                alert('Player 2 is The Winner');
            } else {
                count2++;
                alert(`Wrong Guess! You can try ${3-count2} more times.`);

                if (count2 == 3) {
                    player1Btn.setAttribute('disabled', 'disabled');
                    alert('Player2 Can\'t try anymore. Maximum trying 3 reached. Please reset the game.')
                }
            }

            //player2scoreDisplay.textContent = p2score;
        }
    })

    function resetFunc() {
        gameOver = false;
        p1score = 0;
        p2score = 0;
        player1scoreDisplay.textContent = 0;
        player2scoreDisplay.textContent = 0;
        pbtn1.removeAttribute('disabled');
        pbtn2.removeAttribute('disabled');
    }
    reserBtn.addEventListener('click', resetFunc);

    function gResult(mini, maxi) {
        mini = 1;
        maxi = 5;
        let result = Math.floor(Math.random(mini, maxi) * (maxi - mini) + mini);
        console.log(result);
        return result;
    }
})();

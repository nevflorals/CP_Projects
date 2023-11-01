var turn = "x"
var winner = ""
var array = [0, 0, 0, 0, 0, 0, 0, 0, 0]

function checkForWinner(){
    // Check Horizontal
    if(array[0] + array[1] + array[2] == 3){
        return "X"
    } else if(array[0] + array[1] + array[2] == -3){
        return "O"
    }

    if(array[3] + array[4] + array[5] == 3){
        return "X"
    } else if(array[3] + array[4] + array[5] == -3){
        return "O"
    }

    if(array[6] + array[7] + array[8] == 3){
        return "X"
    } else if(array[6] + array[7] + array[8] == -3){
        return "O"
    }

    // Check Vertical
    if(array[0] + array[3] + array[6] == 3){
        return "X"
    } else if(array[0] + array[3] + array[6] == -3){
        return "O"
    }

    if(array[1] + array[4] + array[7] == 3){
        return "X"
    } else if(array[1] + array[4] + array[7] == -3){
        return "O"
    }

    if(array[2] + array[5] + array[8] == 3){
        return "X"
    } else if(array[2] + array[5] + array[8] == -3){
        return "O"
    }

    // Check Diagonal
    if(array[0] + array[4] + array[8] == 3){
        return "X"
    } else if(array[0] + array[4] + array[8] == -3){
        return "O"
    }

    if(array[2] + array[4] + array[6] == 3){
        return "X"
    } else if(array[2] + array[4] + array[6] == -3){
        return "O"
    }

    if(array[0] != 0 && array[1] != 0 && array[2] != 0 && array[3] != 0 && array[4] != 0 && array[5] != 0 && array[6] != 0 && array[7] != 0 && array[8] != 0){
        return "No one"
    }

    return ""
}

function Animate(object, object2){
    object.setAttribute('opacity', String(Number(object.getAttribute("opacity")) + 0.1))
    object2.setAttribute('opacity', String(Number(object2.getAttribute("opacity")) + 0.1))
    setTimeout(() => {
        if(object.getAttribute("opacity") != "1"){
            Animate(object, object2)
        } else {
            return
        }
    }, 10);
}

function click(placement){
    if(winner == "") {
        var placementx1 = document.getElementById(placement + "x1")
        var placementx2 = document.getElementById(placement + "x2")
        var placemento1 = document.getElementById(placement + "o1")
        var placemento2 = document.getElementById(placement + "o2")

        if(placementx1.getAttribute('opacity') == "0" && placemento1.getAttribute('opacity') == "0") {
            if(turn == "x") {
                Animate(placementx1, placementx2)
                array[placement - 1] = 1
                turn = "o"
            } else if(turn == "o") {
                Animate(placemento1, placemento2)
                array[placement - 1] = -1
                turn = "x"
            }
        }

        winner = checkForWinner()

        if(winner != ""){
            document.getElementById("text").textContent = winner + " has won!"
        }
    }
}
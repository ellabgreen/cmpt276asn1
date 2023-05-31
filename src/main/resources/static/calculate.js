var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43,
    86.22, 88.33, 9.03, 49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69,
    61.68, 70.44, 70.54, 90.0, 71.11, 80.01]

var histo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

var bounds = new Array()

var newGrade

window.addEventListener("keypress", pressEnter)

function pressEnter(evt) {
    if(evt.key == "Enter") {
        evt.preventDefault()
        if(document.getElementsByTagName("input")[12].value != "") {
            if(Number(isNaN(document.getElementsByTagName("input")[12].value))) {
                return
            }

            grades.push(Number(document.getElementsByTagName("input")[12].value))
            document.getElementsByTagName("input")[12].value = ""
        }
    }
}

window.addEventListener("keyup", changeHisto)

function changeHisto() {
    bounds.length = 0

    for(i=0; i<21; i+=2){
        document.getElementsByTagName("td")[25+i].innerHTML = ""
    }

    for(i=0; i<12; i++){
        document.getElementById("error").innerHTML = ""
        bounds.push(Number(document.getElementsByTagName("input")[i].value))
        if(i>0 && bounds[i]>=bounds[i-1]){
            document.getElementById("error").innerHTML = "ERROR: overlapping bounds"
            return
        }
        else if(isNaN(bounds[i])) {
            document.getElementById("error").innerHTML = "ERROR: NaN"
            return
        }
    }

    var j = 0

    for(i=0; i<grades.length; i++) {
        if(grades[i]>bounds[0] || grades[i]<bounds[11]) {
            document.getElementById("error").innerHTML = "ERROR: some grades do not fit within bounds (those grades will be left out of the histogram)"
        }
        else
        {
            j = 1
            while(j<12) {
                if(grades[i]>=bounds[j]){
                    break
                }
                else
                {
                    j++ 
                }
            }
            document.getElementsByTagName("td")[25+(j-1)*2].innerHTML += "O"
        }
    }


}
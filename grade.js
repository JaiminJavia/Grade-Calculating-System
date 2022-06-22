function calculate(){
    let sub1 = parseInt(document.getElementById('subjectOne').value);
    let sub2 = parseInt(document.getElementById('subjectTwo').value);
    let sub3 = parseInt(document.getElementById('subjectThree').value);
    let sub4 = parseInt(document.getElementById('subjectFour').value);
    let sub5 = parseInt(document.getElementById('subjectFive').value);
    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("Please enter Correct Values for Subject");
    }
    else{
        let obtained = sub1+sub2+sub3+sub4+sub5;
        document.getElementById("obtained").innerHTML = obtained;
        let percent = obtained/500*100;
        document.getElementById("percent").innerHTML = percent;
        if(sub1>40 && sub2>40 && sub3>40 && sub4>40 && sub5>40){
            document.getElementById("remarks").innerHTML = "<span style='color:green'>Pass</span>";
        }
        else{
            document.getElementById("remarks").innerHTML = "<span style='color:red'>Fail</span>";
        }
        if(percent>=80){
            document.getElementById("grade").innerHTML = "A";
        }
        else if(percent>=70){
            document.getElementById("grade").innerHTML = "B";
        }
        else if(percent>=60){
            document.getElementById("grade").innerHTML = "C";
        }
        else if(percent>=50){
            document.getElementById("grade").innerHTML = "D";
        }
        else if(percent>=40){
            document.getElementById("grade").innerHTML = "E";
        }
        else {
            document.getElementById("grade").innerHTML = "F";
        }

        
    }
    return false;
}
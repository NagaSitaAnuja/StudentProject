function addSubject() {

    const subjectsContainer=document.getElementById('subjects-container')
const newDiv = document.createElement('div');
// const SubjectName = document.createElement('input');
// SubjectName.type = 'text';

// SubjectName.name = 'subjects[]';
// SubjectName.placeholder = 'Subject Name';



const selectnewSubject=document.createElement('select');
selectnewSubject.name='subjects[]';
selectnewSubject.innerHTML=  `
<option value="Telugu">Telugu</option>
<option value="Hindi">Hindi</option>
<option value="English">English</option>
<option value="Maths">Maths</option>
<option value="Physics">Physics</option>
<option value="Biology">Biology</option>
<option value="Social Studies">Social Studies</option>
<option value="Computers">Computers</option>
<option value="General Knowledge(G.K)">General Knowledge(G.K)</option>`;
const Marks = document.createElement('input');
Marks.type = 'number';
Marks.name = 'marks[]';
Marks.placeholder = 'Marks';


//newDiv.appendChild(SubjectName);
newDiv.appendChild(selectnewSubject);
newDiv.appendChild(Marks);


document.getElementById('subjects-container').appendChild(newDiv);

}

function displayAll(){
    const Name=document.getElementById('name').value;

    const ID=document.getElementById('id').value;
      
    const DOB=document.getElementById('dob').value;
  
    const Age=document.getElementById('age').value;
 
    const Gender=document.querySelector('input[name="gender"]:checked').value;

    const Contact=document.getElementById('contact').value;


    const Branch=document.getElementById('branch').value;
    const StudentHobbies=document.querySelectorAll('input[name="hobbies"]:checked');

    const hobbies=[];
    StudentHobbies.forEach((hobby) => {
        hobbies.push(hobby.value);
        
    });

    // const HobbyOthers = document.getElementById('other_hobbies').value;
    // if (HobbyOthers) {
    //     hobbies.push(HobbyOthers);
    // }
    
    const subjects=document.getElementsByName('subjects[]');
    const marks=document.getElementsByName('marks[]');
    let totalMarks=0;
    let subjectsDetails='';
    for(let i=0;i<subjects.length;i++){
        subjectsDetails+="Subject : "+subjects[i].value+"    Marks: "+marks[i].value+"\n";
        totalMarks+=parseInt(marks[i].value,10);
    }

    const details="Name: "+Name+"\n ID: "+ID+"\nDOB "+DOB+"\n Age: "+Age+"\n Gender: "+Gender+"\nContact: "+Contact+"\n Branch: "+Branch+"\n Hobbies: "+hobbies.join(', ')+"\nSubjects Details : "+subjectsDetails+"\nTotal Marks: "+totalMarks;
    alert(details);


}



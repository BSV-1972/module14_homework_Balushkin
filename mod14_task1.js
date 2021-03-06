const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student> 
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
// console.log(xmlString);

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const stud = xmlDOM.querySelectorAll("student");

let result = {studentsList: []};

for(let i=0; i<stud.length; i++) {
  const studentNode = stud[i]
  const nameNode = studentNode.querySelector("name");
  const firstNode = nameNode.querySelector("first");
  const secondNode = nameNode.querySelector("second");
  const ageNode = studentNode.querySelector("age");
  const profNode = studentNode.querySelector("prof");
  const langAttr = nameNode.getAttribute("lang");
  
  let studentObj = { 
	name: `${firstNode.textContent} ${secondNode.textContent}`, 
	age: ageNode.textContent, prof: profNode.textContent, lang: langAttr 
	};
  
  result.studentsList.push(studentObj)
};

console.log(result);
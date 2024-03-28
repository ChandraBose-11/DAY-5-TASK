var resumeData = {
  "basics": {
    "name": "CHANDRA BOSE.A",
    "email": "chandrubose46@gmail.com",
    "phone": "9952978290",
    "degree": "B.TECH PETROLEUM ENGINEERING",
  },
  "location": {
    "address":
      "MIG-428,THNB,KAMARAJAR ROAD,FORD COMPANY BACKSIDE,MARAI MALAI NAGER",
    "postalCode": "603204",
    "city": "Chennai",
    "state": "Tamilnadu",
    "country": "India",
  },
  "profile": [
    {
      "github": "https://github.com/ChandraBose-11",
      "Netlify": "https://app.netlify.com/teams/chandrabose-11/overview",
    },
  ],
  "education": [
    {
      "institution": "Vels Institute of Science, Technology & Advanced Studies",
      "department": "Petroleum",
      "studyType": "fulltime",
      "batch start year": "2019",
      "batch end year": "2023",
      "gpa": "8.5",
    },
  ],
  "skills": [
    {
      "name": "html,css,javascript",
      "level": "beginer",
    },
  ],
  "languages": [
    {
      "language": "Tamil,Enlish",
    },
  ],
};
console.log(resumeData);

 // --------------------->END <------------------------

//   2.For the above JSON iterate over all for loops (for, for in, for of, for Each)

console.log("Using for loop:");
for (var key in resumeData.basics) {
  console.log(`${key}: ${resumeData.basics[key]}`);
}

console.log("\nUsing for...in loop:");
for (var key in resumeData.location) {
  if (resumeData.location.hasOwnProperty(key)) {
    console.log(`${key}: ${resumeData.location[key]}`);
  }
}

console.log("\nUsing for...of loop:");
for (var value of Object.values(resumeData.profile)) {
  console.log(value);
}

console.log("\nUsing forEach loop for education:");
resumeData.education.forEach((education) => {
  console.log(education);
});

console.log("\nUsing forEach loop for skills:");
resumeData.skills.forEach((skills) => {
  console.log(skills);
});

console.log("\nUsing forEach loop for languages:");
resumeData.languages.forEach((languages) => {
  console.log(languages);
});

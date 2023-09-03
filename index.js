
var blood = [1,36,420];
var poster = [1,36,420];
var speech = [1,36,420];

//function for blood
const inputValBlood = document.querySelector("#name-b");
const submit_btn_b = document.querySelector("#submit-b");
submit_btn_b.addEventListener("click",()=>{
    let val = inputValBlood.value;
    let roll = prompt("Enter Your Key No: ");
    let isValid = false;   
    for(let i=0; i<arr.length; i++){
      if(blood[i] == roll){
        isValid = true;
        break;
      }        
    }
    if(isValid == false){
      alert("You are not a valid person..");
    }else{
      
      generatePDFBlood(val);
      alert(val+" , your blood donation certificate is generated successfully...");
    }
});

const generatePDFBlood = async (name) =>{ 
  const {PDFDocument, StandardFonts, rgb} = PDFLib;
  name = name.toUpperCase();

  const exBytes = await fetch("./Bld_dn_camp.pdf").then((res) =>{
      return res.arrayBuffer();
  });

  const pdfDoc = await PDFDocument.load(exBytes);
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  
  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  
  // Draw a string of text diagonally across the first page 
  
  // xPos ---> line se pahle ki 
  // line ki width 19 charachters
  // 1 character --- 15px 
  let xPos = 170;
  let nameLenth = name.length;
  let offset = (490 - nameLenth*15)/2;
  firstPage.drawText(name, {
  x: xPos + offset,
  y: 240,
  size:25,
  // color: rgb(0, 0.53, 0.71),
  // color: rgb(0, 0, 0),
  font:timesRomanFont,
  // color: rgb(250, 250, 250),
});

const uri = await pdfDoc.saveAsBase64({dataUri:true});
// document.querySelector("#mypdf").src = uri;

  // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  // document.getElementById("mypdf").src = pdfDataUri;

  // Serialize the PDFDocument to bytes (a Uint8Array)
const pdfBytes = await pdfDoc.save();
console.log("Done creating");

// this was for creating uri and showing in iframe

// const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
// document.getElementById("pdf").src = pdfDataUri;

var file = new File(
  [pdfBytes],
  "NSS Blood Donation Certificate.pdf",
  {
    type: "application/pdf;charset=utf-8",
  }
);
saveAs(file);
};



// function for Poster
const inputValPoster = document.querySelector("#name-p");
const submit_btn_p = document.querySelector("#submit-p");
submit_btn_p.addEventListener("click",()=>{
    let val = inputValPoster.value;
    let roll = prompt("Enter Your Key No: ");
    let isValid = false;   
    for(let i=0; i<arr.length; i++){
      if(arr[i] == roll){
        isValid = true;
        break;
      }        
    }
    if(isValid == false){
      alert("You are not a valid person..");
    }else{
      generatePDFPoster(val);
      alert(val+" , your certification for poster making competition is generated successfully...");
    }  
})

const generatePDFPoster = async (name) =>{ 
  const {PDFDocument, StandardFonts, rgb} = PDFLib;
  name = name.toUpperCase();

  const exBytes = await fetch("./poster_making.pdf").then((res) =>{
      return res.arrayBuffer();
  });

  const pdfDoc = await PDFDocument.load(exBytes);
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  
  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  
  // Draw a string of text diagonally across the first page 
  
  // xPos ---> line se pahle ki 
  // line ki width 19 charachters
  // 1 character --- 15px 
  let xPos = 170;
  let nameLenth = name.length;
  let offset = (490 - nameLenth*15)/2;
  firstPage.drawText(name, {
  x: xPos + offset,
  y: 240,
  size:25,
  // color: rgb(0, 0.53, 0.71),
  // color: rgb(0, 0, 0),
  font:timesRomanFont,
  // color: rgb(250, 250, 250),
});

const uri = await pdfDoc.saveAsBase64({dataUri:true});
// document.querySelector("#mypdf").src = uri;

  // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  // document.getElementById("mypdf").src = pdfDataUri;

  // Serialize the PDFDocument to bytes (a Uint8Array)
const pdfBytes = await pdfDoc.save();
console.log("Done creating");

// this was for creating uri and showing in iframe

// const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
// document.getElementById("pdf").src = pdfDataUri;

var file = new File(
  [pdfBytes],
  "NSS Poster Making Participation Certificate.pdf",
  {
    type: "application/pdf;charset=utf-8",
  }
);
saveAs(file);
};


// function for speech
const submit_btn_s = document.querySelector("#submit-s");
const inputValSpeech = document.querySelector("#name-s");
submit_btn_s.addEventListener("click",()=>{
  let val = inputValSpeech.value;

  let roll = prompt("Enter Your Key No: ");
    let isValid = false;   
    for(let i=0; i<arr.length; i++){
      if(arr[i] == roll){
        isValid = true;
        break;
      }        
    }
    if(isValid == false){
      alert("You are not a valid person..");
    }else{
      generatePDFSpeech(val);
      alert(val+" , your speech competition certificate is generated successfully...");
    }
})

const generatePDFSpeech = async (name) =>{ 
  const {PDFDocument, StandardFonts, rgb} = PDFLib;
  name = name.toUpperCase();

  const exBytes = await fetch("./Speech_comp.pdf").then((res) =>{
      return res.arrayBuffer();
  });

  const pdfDoc = await PDFDocument.load(exBytes);
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  
  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  
  // Draw a string of text diagonally across the first page 
  
  // xPos ---> line se pahle ki 
  // line ki width 19 charachters
  // 1 character --- 15px 
  let xPos = 170;
  let nameLenth = name.length;
  let offset = (490 - nameLenth*15)/2;
  firstPage.drawText(name, {
  x: xPos + offset,
  y: 240,
  size:25,
  // color: rgb(0, 0.53, 0.71),
  // color: rgb(0, 0, 0),
  font:timesRomanFont,
  // color: rgb(250, 250, 250),
});

const uri = await pdfDoc.saveAsBase64({dataUri:true});
// document.querySelector("#mypdf").src = uri;

  // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  // document.getElementById("mypdf").src = pdfDataUri;

  // Serialize the PDFDocument to bytes (a Uint8Array)
const pdfBytes = await pdfDoc.save();
console.log("Done creating");

// this was for creating uri and showing in iframe

// const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
// document.getElementById("pdf").src = pdfDataUri;

var file = new File(
  [pdfBytes],
  "NSS Speech Comp Certificate.pdf",
  {
    type: "application/pdf;charset=utf-8",
  }
);
saveAs(file);
};


// generatePDF("Shashwat Shrivastav");
// generatePDF("Mariyam Fatima Rizvi");
// generatePDF("Abhishek kumar pandey");







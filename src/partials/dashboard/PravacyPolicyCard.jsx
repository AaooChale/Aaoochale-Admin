import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import SingleButton from '../../singlebutton/SingleButton'
const modules = {
  toolbar: [
    //[{ 'font': [] }],
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    [{ align: [] }, { color: [] }, { background: [] }], 
    ["clean"],
  ],
};

const formats = [
  //'font',
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "align",
  "color",
  "background",
];

function Editor() {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const handleChange = (content, delta, source, editor) => {
    console.log(editor.getHTML()); // html 사용시
    // console.log(JSON.stringify(editor.getContents())); // delta 사용시
    setValue(editor.getHTML());

    
  };
  const handleSubmit = () =>{
    
        let txt = value1;
        setValue(txt);
        let txt1 = txt.replace('<p>', '');
        let txt2 = txt1.replace('</p>', '');
        setValue(txt2)
  }

  const handleReset = () =>{
    setValue("")
    setValue1("")
  }

  return (
    <>
    <Container  >
      <ReactQuill
        style={{ height: "300px"}}
        theme="snow"
        modules={modules}
        formats={formats}
        // value={value}
        onChange={setValue1}

      />
    </Container>
    <div style={{backgroundColor:"", width:"30%" , display:"flex", justifyContent:"space-around", alignItems:"center"}}>
    <SingleButton btn="Submit" width="30%" onClick={handleSubmit}/>
    <SingleButton btn="Reset" width="30%" onClick={handleReset}/>
  
    </div>
    <div style={{backgroundColor:"", height:"45vh"}}>
    <p style={{padding:"20px 50px"}}>{value}</p>
    </div>
    </>
  );
}

const Container = styled.div`
  height: 400px;
`;

export default Editor;

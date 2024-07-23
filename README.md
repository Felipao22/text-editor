
# React-Quill Text Editor



## Description

This project is a React application that utilizes [react-quill](https://www.npmjs.com/package/react-quill) to provide a rich text editor. With this tool, users can create and format content intuitively and efficiently. The application features character count, a button to clear the content, and customization of the toolbar.
## Features

* Rich text editor based on Quill.
* Real-time character count.
* Button to clear the editor content.
* Customizable toolbar and functionalities.
## Technologies Used

**Client:** React.

**react-quill:** Wrapper for the Quill text editor in React.

**Quill:** Underlying rich text editor.


## Instalación

1. Clone the repository:

```bash
git clone https://github.com/Felipao22/text-editor.git
```
2. Navigate to the project directory:
```bash
cd text-editor
```
3. Install dependencies:
```bash
npm install
```
## Usage

1. Start the application:
```bash
npm run dev
```
2. Open your browser and go to http://localhost:5173 to see the editor in action.
## Configuration
In the src/App.jsx file, you can adjust the editor configuration according to your needs. This is where the toolbar modules and formats are defined. For example:

```javascript
import React from "react";
import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

const App = () => {
  
  var modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] }
      ],
      [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
    ]
  };

  var formats = [
    "header", "height", "bold", "italic",
    "underline", "strike", "blockquote",
    "list", "color", "bullet", "indent",
    "link", "image", "align", "size",
  ];

  const handleProcedureContentChange = (content) => {
    console.log("content---->", content);
  };

  return (
    <div >
      <h1 style={{ textAlign: "center" }}>Text Editor In React JS</h1>
      <div style={{ display: "grid", justifyContent: "center"}}>
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          placeholder="write your content ...."
          onChange={handleProcedureContentChange}
          style={{ height: "220px" }}
        >
        </ReactQuill>
      </div>
    </div>
  );

}

export default App;
```


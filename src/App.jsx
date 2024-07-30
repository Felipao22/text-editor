import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import { useCallback, useEffect, useRef, useState } from 'react';
import RefreshIcon from './RefreshIcon';
import GitHubIcon from './Icons';

function App() {
  const [content, setContent] = useState('');
  const [charCount, setCharCount] = useState(0);
  const editorRef = useRef(null);

  var modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
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

  const handleProcedureContentChange = useCallback((content) => {
    setContent(content);
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(content, 'text/html');
    const textOnly = parsedHtml.body.textContent || "";
    setCharCount(textOnly.length);
  }, []);

  useEffect(() => {
    const addTooltips = () => {
      const tooltips = {
        bold: 'Bold',
        italic: 'Italic',
        underline: 'Underline',
        strike: 'Strikethrough',
        blockquote: 'Blockquote',
        ordered: 'Numbering',
        bullet: 'Bullets',
        link: 'Insert link',
        image: 'Insert image',
        align: 'Align',
        color: 'Font color',
        size: 'Font size'
      };

      Object.keys(tooltips).forEach((format) => {
        const buttons = document.querySelectorAll(`.ql-${format}`);
        buttons.forEach((button) => {
          button.setAttribute('title', tooltips[format]);
        });
      });

      const orderedButton = document.querySelector('.ql-list[value="ordered"]');
      if (orderedButton) {
        orderedButton.setAttribute('title', 'Ordered List');
      }

      const bulletButton = document.querySelector('.ql-list[value="bullet"]');
      if (bulletButton) {
        bulletButton.setAttribute('title', 'Bullet List');
      }

      const decreaseIndentButton = document.querySelector('.ql-indent[value="-1"]');
      if (decreaseIndentButton) {
        decreaseIndentButton.setAttribute('title', 'Decrease indent');
      }

      const increaseIndentButton = document.querySelector('.ql-indent[value="+1"]');
      if (increaseIndentButton) {
        increaseIndentButton.setAttribute('title', 'Increase indent');
      }

      const centerAlignButton = document.querySelector('.ql-picker-item[data-value="center"]');
      if (centerAlignButton) {
        centerAlignButton.setAttribute('title', 'Center');
      }

      const rightAlignButton = document.querySelector('.ql-picker-item[data-value="right"]');
      if (rightAlignButton) {
        rightAlignButton.setAttribute('title', 'Align right');
      }

      const justifyAlignButton = document.querySelector('.ql-picker-item[data-value="justify"]');
      if (justifyAlignButton) {
        justifyAlignButton.setAttribute('title', 'Justify');
      }

      const firstAlignButton = document.querySelector('.ql-picker-item svg');
        if (firstAlignButton) {
          const parent = firstAlignButton.parentElement;
          parent.setAttribute('title', 'Align left');
        }

    };

    addTooltips();
  }, []);

  const handleClearContent = () => {
    setContent('');
    
    if (editorRef.current) {
      editorRef.current.getEditor().root.innerHTML = '';
    }
  };

  return (
    <>
 <div style={{ position: 'relative', width: '100%' }}>
      <h1 style={{ textAlign: "center" }}>Text Editor</h1>
      <div style={{ display: "grid", justifyContent: "center" }}>
        <div style={{ position: 'relative', width: '100%' }}>
          <ReactQuill
            ref={editorRef}
            theme="snow"
            value={content}
            onChange={handleProcedureContentChange}
            placeholder="Write your content ...."
            modules={modules}
            formats={formats}
            style={{ height: '250px' }}
          />
            <p style={{ textAlign: "right", margin: "0 10px 10px 0", paddingBottom:"5px", fontSize:"12px" }}>{charCount}</p>
          <div style={{ position: 'absolute', right: '5px', bottom: '-5px' }}>
            <RefreshIcon
              style={{ cursor: 'pointer' }}
              onClick={handleClearContent}
            />
          </div>
        </div>
      </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
        <a style={{ padding: '10px', display: 'flex', alignItems: 'center', flexDirection:"column", textDecoration:"none" }} href="https://github.com/Felipao22" target="_blank" rel="noreferrer">
          <GitHubIcon />
          <strong style={{ color:"black", marginLeft: '10px' }}>Felipe Aviani</strong>
        </a>
      </div>
    </>
  )
}

export default App

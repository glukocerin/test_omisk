import React, { useState } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import style from "./entryEditor.module.css";
import pagesConfig from "../../assets/pagesConfig";

export const EntryEditor = ({ setText }) => {
  const contentBlock = htmlToDraft(
    "<p></p>" || pagesConfig.blog.cards[0].textFirst
  );
  const contentState = ContentState.createFromBlockArray(
    contentBlock.contentBlocks
  );
  const defaultContent = EditorState.createWithContent(contentState);
  const [content, setContent] = useState(defaultContent);

  function onEditorStateChange(newContent) {
    setText(draftToHtml(convertToRaw(content.getCurrentContent())));
    setContent(newContent);
  }

  function exportFunc() {}

  return (
    <Editor
      toolbar={{
        options: ["inline", "list", "link", "history"],
        inline: {
          options: ["bold", "italic", "underline"],
        },
        list: {
          options: ["unordered", "ordered"],
        },
      }}
      editorState={content}
      wrapperClassName={style["editor-wrapper"]}
      editorClassName={style["editor"]}
      onEditorStateChange={onEditorStateChange}
    />
  );
};

// export class EntryEditorASd extends Component {
//   constructor(props) {
//     super(props);
//     const html = "";
//     debugger;
//     const contentBlock = htmlToDraft(html);
//     if (contentBlock) {
//       const contentState = ContentState.createFromBlockArray(
//         contentBlock.contentBlocks
//       );
//       const editorState = EditorState.createWithContent(contentState);
//       this.state = {
//         editorState,
//       };
//     }
//   }

//   onEditorStateChange: Function = (editorState) => {
//     this.setState({
//       editorState,
//     });
//   };

//   render() {
//     const { editorState } = this.state;
//     return (
//       <div>
//         <Editor
//           editorState={editorState}
//           wrapperClassName="demo-wrapper"
//           editorClassName="demo-editor"
//           onEditorStateChange={this.onEditorStateChange}
//         />
//         <textarea
//           disabled
//           value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
//         />
//       </div>
//     );
//   }
// }

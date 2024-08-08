import ReactQuill from 'react-quill';
// STYLED COMPONENT
import { EditorWrapper } from './styles';
export default function QuillEditor({
  value,
  onChange,
  placeholder
}) {
  return <EditorWrapper>
      <ReactQuill theme="snow" value={value || ''} onChange={onChange} placeholder={placeholder || 'The new iPad combines the power and capability of a computer with the ease of use and versatility you’d never expect from one. And now it’s even more versatile, with a larger 10.2‑inch Retina display, support'} />
    </EditorWrapper>;
}
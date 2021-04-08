import React, { useEffect, useState } from 'react'
import MarkdownPreview from '@uiw/react-markdown-preview'

const MarkdownPage = ({ path }) => {
  const [content, setContent] = useState()
  useEffect(() => {
    fetch(path)
      .then((response) => response.text())
      .then(setContent)
  }, [path])

  return (
    <div style={{ padding: 8 }}>
      {content ? <MarkdownPreview source={content} /> : null}
    </div>
  )
}

export default MarkdownPage

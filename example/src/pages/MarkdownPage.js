import React, { useEffect, useState } from 'react'
import MarkdownPreview from '@uiw/react-markdown-preview'

const MarkdownPage = ({ path }) => {
  const [content, setContent] = useState()
  useEffect(() => {
    fetch(path)
      .then((response) => response.text())
      .then(setContent)
  }, [path])

  return content ? <MarkdownPreview source={content} /> : null
}

export default MarkdownPage

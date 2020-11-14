import React from 'react'

function MainContent(props) {
  return (
    <>
      <main className="flex-shrink-0">
        {/* HOC (high order component) todo app: is props' children */}
        {/* props.children代表嵌入在其中的元件或資料內容 */}
        {props.children}
      </main>
    </>
  )
}

export default MainContent

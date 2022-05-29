import React from "react";
import "./MainContent.scss"

export const MainContent = () => {
  return (
    <div className="content">
      <h3>About</h3>
      <p>Hello, I am Michael. This is a simple react static example and I am using it as a fun quick project for GitHub.</p>
      <h3>Interests</h3>
      <ul>
        <li>React js</li>
        <li>TypeScript</li>
        <li>Cypress</li>
        <li>Jest</li>
        <li>Storybook</li>
        <li>GraphQL</li>
      </ul>
    </div>
  )
}
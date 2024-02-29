import React from "react";
import Accordion from "react-bootstrap/Accordion";

/**
 * `AppDynamicAccordion` renders a Bootstrap accordion with dynamic content.
 * It accepts an array of objects to generate accordion items, each with a title and content.
 * Additional props are spread onto the Accordion component for further customization.
 *
 * @param {Object[]} accordionItems - An array of objects representing the accordion items.
 * @param {string} accordionItems[].title - The title of each accordion item.
 * @param {string|React.ReactNode} accordionItems[].content - The content of each accordion item, can be a string or JSX.
 * @param {Object} props - Additional props to be spread onto the Accordion component.
 * @returns {React.ReactElement} A React element representing the dynamic accordion.
 */
const AppDynamicAccordion = ({ accordionItems, ...props }) => {
  return (
    <Accordion defaultActiveKey="0" {...props}>
      {accordionItems.map((item, index) => (
        <Accordion.Item eventKey={String(index)} key={index}>
          <Accordion.Header>{item.title}</Accordion.Header>
          <Accordion.Body>{item.content}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default AppDynamicAccordion;

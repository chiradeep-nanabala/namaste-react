import React from 'react';
import ReactDOM from 'react-dom/client';

// ReactElement (Object) => HTML (Browser Understands)

// JSX => Babel transpiles it to React.createElement => React Element - JS Object => HTML Element(render)
const heading = React.createElement("h1", {id: "heading"}, "Namaste React");

const jsxHeading = (
    <h1 className="head">
        Namaste React using JSX
    </h1>
);

const Title = () => (
    <h1> This is the title </h1>
);

const SubHeading = () => (
    <div class="subheading">
        <h2> This is the subheading</h2>
    </div>
);

// Component Composition
const HeadingComponent = () => {
    return (
        <>
            {jsxHeading}
            <Title />
            <Title></Title>
            {Title()}
            <SubHeading />
            <h3>This is the last statement</h3>
        </>
    );
    
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);


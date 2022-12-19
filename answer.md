# Question: Explain the main hooks in React and give examples.

## Answer:

- React provides core hooks are special function that allows a functional component to have the same properties as a class component, but react also allows their user to create custom hooks to enable reusability. This helps to remove the overhead of having to manage complex designs like higher-order components and render props. examples include useState, useMemo, useEffect etc.

# Question: Walk me through useState, useEffect and UseContext.

## Answer:

- useState: useState is a hook that allows the functional component (stateless component) to be stateful, which then allows react trigger rerendering (ensuring the state value is up to date) when the state changes i.e this concept is very similar to state design pattern listed in the gang of four design patterns book.

- useEffect: useEffect is a hook that allows functional components to perform side effects (external dependencies like network requests, storage, logging, etc). useEffect also triggers a rendering when a useEffect is called and useEffect is called in three stages of the component lifecycle, componentDidMount, componentDidUpdate, componentWillUnmount, but this could be customized to preference i.e you choose to call one or more of this lifecycle depending on the needs of the component.

- useContext: Before useContext managing global store (flux architecture) was a hassle i.e a lot of prop drilling was done to move props from the parent component to a distant child component, but useContext allows data to move from parent to child component without prop drilling and with the combination of useReducer developers can implement flux architecture without needing third-party dependencies like redux.

# Question: Explain how to build components in React.

## Answer:

- React components are created using React.createElement method, although most developers use JSX, react still runs createElement under the hood, which can be used in creating HTML elements and react Components, but the key difference in how react differentiate HTML element from react components is that uppercase value are treated as a component while lowercase value are treated as HTML elements.

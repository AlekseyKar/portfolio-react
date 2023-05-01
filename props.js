// import React from 'react';

// function InnerComponent(props) {
//   return (
//     <div>
//       <p>Object Prop:</p>
//       <pre>{JSON.stringify(props.objProp, null, 2)}</pre>
//       <p>String Prop: {props.stringProp}</p>
//       <p>Function Prop: {props.funcProp()}</p>
//     </div>
//   );
// }

// function OuterComponent() {
//   const objProp = { name: 'John', age: 30 };
//   const stringProp = 'Hello, world!';
//   const funcProp = () => 'This is a function prop.';

//   return (
//     <div>
//       <h2>Outer Component</h2>
//       <InnerComponent objProp={objProp} stringProp={stringProp} funcProp={funcProp} />
//     </div>
//   );
// }

// export default OuterComponent;

//В этом примере мы создаем две компоненты: внешнюю OuterComponent и вложенную InnerComponent. OuterComponent передает пропсы objProp, stringProp и funcProp в InnerComponent. InnerComponent выводит значения этих пропсов. функция переданная в пропс funcProp вызывается в InnerComponent, чтобы показать ее результат.
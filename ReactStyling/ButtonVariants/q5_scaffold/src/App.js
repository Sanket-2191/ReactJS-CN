// import { ButtonView } from "./ButtonVariants.styled";
// import "./styles.css";

// export default function App() {

//   return (
//     <div className="App">
//       <h3>Button Variants</h3>
//       <div>
//         <h3>Outlined Button</h3>
//         <ButtonView filled={false}> Outlined  </ButtonView >
//       </div>
//       <div>
//         <h3>Filled Button</h3>
//         <ButtonView filled={true} bg="cyan" color="red" border="none"  > Filled </ButtonView >
//       </div>
//     </div >
//   );
// }

import "./styles.css";
import { ButtonView } from "./ButtonVariants.styled";

export default function App() {
  return (
    <div className="App">
      <h3>Button Variants</h3>
      <div>
        <h3>Inlined Button</h3>
        <ButtonView>Outlined</ButtonView>
      </div>
      <div>
        <h3>Filled Button</h3>
        <ButtonView filled bg="cyan" color="red">
          Filled
        </ButtonView>
      </div>
    </div>
  );
}

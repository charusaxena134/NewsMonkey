import React from "react";
import loading from "./loading.gif";
// class based component
// export class Spinner extends Component
// Hooks
const Spinner = () => {
  // render() {
  return (
    <div className="text-center">
      <img src={loading} alt="loading" />
    </div>
  );
  // }
};

export default Spinner;

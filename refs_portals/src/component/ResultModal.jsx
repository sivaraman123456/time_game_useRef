import { forwardRef } from "react";
// eslint-disable-next-line react/prop-types
const ResultModal = forwardRef(({ result, timer }, ref) => {

  return (
    <dialog className="result-modal" open ref={ref}>
      <h1>You&apos;re {result}</h1>
      <p>
        The target time was <strong>{timer}</strong> seconds .
      </p>
      <p>
        You stopped the time with <strong>X seconds left</strong>
      </p>

      <form method="dialog">
        <button>close</button>
      </form>
    </dialog>
  );
});
ResultModal.displayName = "Form";
export default ResultModal;

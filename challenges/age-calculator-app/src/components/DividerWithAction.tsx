interface DividerWithActionPropsType {
  calculateAge: () => void;
}

export function DividerWithAction({calculateAge}: DividerWithActionPropsType) {
  return (
    <div className="relative h-fit w-[100%] md:min-w-[680px]">
      <hr className="my-12" />
      <button
        type="button"
        onClick={calculateAge}
        className="absolute top-[-34px] md:top-[-45px] right-[40%] md:right-0 rounded-[50%] bg-purple p-3 md:p-6"
      >
        <img src="./assets/images/icon-arrow.svg" alt="Calculate Age" />
      </button>
    </div>
  );
}

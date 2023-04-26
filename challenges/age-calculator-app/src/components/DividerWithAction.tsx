interface DividerWithActionPropsType {
  calculateAge: () => void;
}

export function DividerWithAction({calculateAge}: DividerWithActionPropsType) {
  return (
    <div className="relative h-fit md:min-w-[680px]">
      <hr className="my-12" />
      <button
        type="button"
        onClick={calculateAge}
        className="absolute top-[-42px] right-[50%] md:right-0 rounded-[50%] bg-purple p-6"
      >
        <img src="./assets/images/icon-arrow.svg" alt="Calculate Age" />
      </button>
    </div>
  );
}

import { useNumericInput } from "../utils/useNumericInput";

interface ValueInputPropsType {
  label: string;
  placeholder: string;
  input: ReturnType<typeof useNumericInput>;
}

export function ValueInput(props: ValueInputPropsType) {
  const { label, placeholder, input } = props;
  const { value, onChange, error } = input;

  return (
    <div className="flex flex-col w-[100px] md:w-[160px]">
      <label className="text-sm tracking-[4px] font-bold text-smokey-grey">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="text-3xl font-bold text-off-black border-light-grey border-[1px] rounded-lg my-1 p-2 md:px-5 md:py-3 caret-purple hover:border-purple focus:border-purple focus:outline-none"
      />
      {error && (
        <span className="text-sm text-light-red font-light italic">
          {error}
        </span>
      )}
    </div>
  );
}

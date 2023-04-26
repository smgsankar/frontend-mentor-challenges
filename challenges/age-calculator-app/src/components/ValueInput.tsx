interface ValueInputPropsType {
  label: string;
  placeholder: string;
}

export function ValueInput(props: ValueInputPropsType) {
  const { label, placeholder } = props;
  return (
    <div className="flex flex-col w-[160px]">
      <label className="text-sm tracking-[4px] font-bold text-smokey-grey">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="text-3xl font-bold text-off-black border-light-grey border-[1px] rounded-lg my-1 px-4 py-3 caret-purple focus:border-purple focus:outline-none"
      />
      <span className="text-sm text-light-red font-light italic">
        This field is required
      </span>
    </div>
  );
}

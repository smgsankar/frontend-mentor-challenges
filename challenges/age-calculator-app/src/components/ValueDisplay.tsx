interface ValueDisplayPropsType {
  value: string;
  suffix: string;
}

export function ValueDisplay(props: ValueDisplayPropsType) {
  const { value, suffix } = props;
  return (
    <div>
      <span className="text-purple">{value}</span>{" "}
      <span className="text-off-black">{suffix}</span>
    </div>
  );
}

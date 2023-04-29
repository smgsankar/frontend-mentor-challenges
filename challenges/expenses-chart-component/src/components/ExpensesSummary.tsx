export function ExpensesSummary() {
  return (
    <section>
      <span className="text-medium-brown">Total this month</span>
      <div className="flex justify-between">
        <span className="text-dark-brown text-4xl font-bold">$478.33</span>
        <div className="flex flex-col items-end text-lg leading-none">
          <span className="text-dark-brown font-bold">+2.4 %</span>
          <span className="text-medium-brown">from last month</span>
        </div>
      </div>
    </section>
  );
}

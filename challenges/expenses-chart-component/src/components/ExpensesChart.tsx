export function ExpensesChart() {
  return (
    <section className="w-[100%]">
      <h1 className="text-2xl text-dark-brown font-bold">
        Spending - Last 7 days
      </h1>
      <div className="flex items-end mt-16 text-sm text-medium-brown justify-between">
        <div className="flex flex-col items-center">
          <span className="w-[30px] md:w-[50px] h-[180px] bg-soft-red rounded" />
          <span>mon</span>
        </div>
      </div>
    </section>
  );
}

import "./style.css";

export function App() {
  return (
    <div className="h-screen w-screen overflow-auto bg-cream flex flex-col justify-center items-center font-dmsans">
      <header className="flex flex-row justify-between bg-soft-red w-[360px] md:w-[540px] my-4 mx-2 p-6 md:p-8 text-white rounded-2xl">
        <div className="flex flex-col">
          <h1 className="font-extralight">My balance</h1>
          <h3 className="text-3xl font-bold">$921.48</h3>
        </div>
        <img src="./assets/images/logo.svg" alt="logo" />
      </header>
      <main className="flex flex-col bg-white w-[360px] md:w-[540px] my-4 mx-2 p-6 md:p-8 rounded-2xl">
        <section className="w-[100%]">
          <h1 className="text-2xl text-dark-brown font-bold">Spending - Last 7 days</h1>
          <div className="flex items-end mt-16 text-sm text-medium-brown justify-between">
            <div className="flex flex-col items-center">
              <span className="w-[30px] md:w-[50px] h-[180px] bg-soft-red rounded" />
              <span>mon</span>
            </div>
          </div>
        </section>
        <hr className="my-8" />
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
      </main>
    </div>
  );
}

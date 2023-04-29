import { Card } from "./Card";

export function TitleCard() {
  return (
    <Card background="softRed">
      <header className="flex flex-row justify-between text-white">
        <div className="flex flex-col">
          <h1 className="font-extralight">My balance</h1>
          <h3 className="text-3xl font-bold">$921.48</h3>
        </div>
        <img src="./assets/images/logo.svg" alt="logo" />
      </header>
    </Card>
  );
}

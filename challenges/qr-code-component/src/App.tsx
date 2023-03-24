import "./style.css";

export function App() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-light-gray">
      <div className="max-w-[330px] bg-white rounded-xl p-4">
        <img className="rounded-lg" src="images/image-qr-code.png" alt="qr-code"/>
        <div className="font-outfit text-center m-6">
        <div className="font-bold text-blue text-[21px] my-2">
          Improve your front-end skills by building projects
        </div>
        <div className="font-normal text-blue-gray text-[15px]">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </div>
        </div>
      </div>
    </div>
  );
}

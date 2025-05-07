type Props = {
  frames: number;
};

export default function Countdown({ frames }: Props) {
  return (
    <div
      style={{
        animation: `slide-in 1s linear`,
      }}
    >
      {" "}
      <div
        style={{
          animationDelay: `5s`,
        }}
        className="size-[408px] rounded-full bg-white flex justify-center items-center text-center font-montserrat text-blue-accent font-bold text-[264px]"
      >
        5
      </div>
    </div>
  );
}

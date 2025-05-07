type Props = {
  frames: number;
};

export default function Countdown({ frames }: Props) {
    var start = frames;
    var result = [];
    while (start >= 0) {
        result.push(start--);
    }
    console.log(result)
  return (
    <div className="countdown-container">
        {}
      <div      
      
        style={{
            animationName: `moveUp`,
            animationDelay: `0s`,
        }}
        className="circle">5</div>
      <div className="circle">4</div>
      <div className="circle">3</div>
      <div className="circle">2</div>
      <div className="circle">1</div>
    </div>
  );
}
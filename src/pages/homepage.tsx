import chainsawMan from "../assets/Volume_11.jpg";

function Homie() {
  return (
    <>
      <div className="container flex flex-col justify-items-center items-center">
        <img
          src={chainsawMan}
          alt="chainsaw Man"
          className="w-xs md:w-lg rounded-md"
        />
        <div className="bg-[#1b1b32] md:w-1/2 flex justify-center items-center rounded-md">
          <section className="m-3 bg-[#424769] text-white px-1 rounded-md">
            <p>
              Hope you're having a good day, if you're curious about the cover
              above the manga is called chainsaw Man but that's not our main
              topic here,this a food website so order something will ya
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
export default Homie;

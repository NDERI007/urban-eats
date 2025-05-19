import coverthir from "../assets/Volume_13.jpg";
function Menu() {
  return (
    <>
      <img src={coverthir} alt="" className="w-xs md:w-lg" />
      <div>
        <div>
          <p>Menu</p>
          <article>
            <p>Appetizer</p>
            <p>Croissant</p> <p>sh200</p>
            <p>Fresh juice</p> <p>sh150</p>
            <p>pigs in a blanket</p> <p>sh300</p>
          </article>
          {/*Container 2 */}
          <div>
            <article>
              <p>Main course</p>
              <div>
                Beef and Beef
                <p>Shawarma, lamb chops, meat pie</p>
              </div>{" "}
              <p>sh1000 each</p>
              <div>
                lezz go vegan
                <p>potato salad, pineapple and jalopeno pizza, choma</p>
              </div>{" "}
              <p>500 each</p>
            </article>
          </div>
          {/*Container 3 */}
          <div>
            <article>
              <div>
                Cocktails
                <p>Mix em to your pleasure </p>
              </div>{" "}
              <p>sh150</p>
              <div>Yoghurt</div>
              <div>Soda</div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
export default Menu;

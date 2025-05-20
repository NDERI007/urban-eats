function Menu() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 ml-6 bg-amber-100">
        {/*container 1 */}
        <div className="px-3">
          <article className="text-center">
            <h2 className="text-xl flex items-center justify-center">
              {/*-- Left line -- */}
              <div className="w-20 border-t-2 border-[#F9B17A] mr-4"></div>
              Appetizer {/*---Right line -- */}
              <div className="w-20 border-t-2 border-[#F9B17A] ml-4"></div>
            </h2>
            <p className="w-1/5 text-left">Croissant</p>{" "}
            <p className="w-1/5 text-right">sh200</p>
            <p className="w-1/4 text-left">Fresh juice</p>{" "}
            <p className="w-1/5 text-right">sh150</p>
            <p className="w-1/4 text-left">pigs in a blanket</p>{" "}
            <p className="w-1/5 text-right">sh300</p>
          </article>
        </div>
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
    </>
  );
}
export default Menu;

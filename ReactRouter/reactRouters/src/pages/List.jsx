import { items } from "../data";
import { NavLink } from "react-router-dom";

export const List = () => {
  return (
    <div className="list page">
      <h3>List page</h3>
      <div className="item-list">
        {items.map((i) => (
          <div className="item" key={i.id}>
            <h3><NavLink to={`/list/${i.id}`}>{i.name}</NavLink></h3>
            <img src={i.image} alt={i.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

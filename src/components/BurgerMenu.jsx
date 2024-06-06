import React from "react";

const BurgerMenu = () => {
  return (
    <>
      <div className="d-flex flex-col gap-1.5 w-6 hover:cursor-pointer mt-1 group hover:transition-all" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" >
        <div className="h-0.5 bg-slate-500 group-hover:bg-slate-900"></div>
        <div className="h-0.5 bg-slate-500 group-hover:bg-slate-900"></div>
        <div className="h-0.5 bg-slate-500 group-hover:bg-slate-900"></div>
      </div>
      <div className="offcanvas offcanvas-start" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <div>
          Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
        </div>
        <div className="dropdown mt-3">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
            Dropdown button
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
      </div>
    </>
  );
};

export default BurgerMenu;

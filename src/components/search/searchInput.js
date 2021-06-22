import React,{useContext,useState} from 'react'
import ProductContext from '../../context/productContext';

export default function SearchInput() {
    const productContext = useContext(ProductContext);
    const [searchItem, setSearchItem] = useState("");

      //search button
  const onClick = () => {
    productContext.searchHandler(searchItem);
  };
  //search enter press
  const onPress = (event) => {
    if (event.key === "Enter") {
        productContext.searchHandler(searchItem);
    }
  };
    return (
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search items"
            onChange={(event) => setSearchItem(event.target.value)}
            aria-label="Search"
            aria-describedby="basic-addon1"
            onKeyPress={onPress}
          />
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-secondary"
              onClick={onClick}
              type="submit"
            >
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
    )
}

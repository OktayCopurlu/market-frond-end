import React, { useContext } from "react";
import ProductContext from "../../../../context/productContext";
export default function ClothesCategory() {
    const productContext = useContext(ProductContext);

    return (
        
            <div className="select-group">
              <select
                defaultValue="Choose Category"
                name="clothesCategory"
                onChange={(event) =>
                  productContext.categoryClothesHandler(event.target.value)
                }
                className="dropdown browser-default p-1  rounded"
              >
                <option value="category"> Choose Category </option>
                <option value="Women's Clothing"> Women 's Clothing</option>
                <option value="Men's Clothing"> Men 's Clothing</option>
                <option value="Children's Clothing(Ages 0 - 6 years)">
                  Children 's Clothing (Ages 0 - 6 years)
                </option>
                <option value="Children's Clothing(Ages 6 - 12 years)">
                  Children 's Clothing (Ages 6 - 12 years)
                </option>
              </select>
            </div>
         
    )
}

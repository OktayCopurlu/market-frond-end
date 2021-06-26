import {render} from '@testing-library/react';

import { BrowserRouter as Route} from "react-router-dom"
import ProductCard from '../../components/cards/productCard'



describe("productCard",()=>{
test("data has reached to product card",async()=>{
    const { container } = render(<Route><ProductCard/></Route>)
    expect(container.getElementsByClassName('product-title').length).toBe(1);
    expect(container.getElementsByClassName('card-text').length).toBe(1);

})})
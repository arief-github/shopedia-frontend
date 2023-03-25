import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { filterProduct } from '../../action/productActions';

export default function Filter() {
  const [searchKey, setSearchKey] = useState("");
  const [sort, setSort] = useState("popular");
  const [category, setCategory] = useState("all");

  const dispatch = useDispatch();

  return (
    <div>
      <div className="row justify-content-center shadow p-3 mb-5 bg-white rounded">
        <div className="col-md-3 mt-4 ml-2" style={{ marginTop: '13px' }}>
          <input
            value={searchKey}
            onChange={(e) => {
              setSearchKey(e.target.value)
            }}
            type="text"
            placeholder='search products'
            className='form-control'
          />
        </div>
        <div className="col-md-2 mt-4 ml-2">
            <select
              className='form-control'
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="popular">Popular</option>
              <option value="htl">High To Low</option>
              <option value="lth">Low To High</option>
            </select>
        </div>
        <div className="col-md-2 mt-4 ml-2">
            <select
              className='form-control'
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
              }}
            >
              <option value="all">All</option>
              <option value="electronics">Electronics</option>
              <option value="technologies">Technologies</option>
              <option value="fashion">Fashion</option>
              <option value="mobiles">Mobiles</option>
              <option value="games">Games</option>
            </select>
        </div>
        <div className='col-md-2 mt-4 ml-2'>
            <button className='btn' onClick={() => { dispatch(filterProduct(searchKey, sort, category))}} >Filter</button>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

function Price({onChange}) {
  const handlePriceChange = (e) => {
    onChange(e.target.value)
  }
  return (
    <div>
      <h4 className="sidebar-title ">Price</h4>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="price" value="All" onChange={handlePriceChange}/>
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="price" value="0-50" onChange={handlePriceChange}/>
          <span className="checkmark"></span>$0 - $50
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="price" value="50-150" onChange={handlePriceChange}/>
          <span className="checkmark"></span>$50 - $150
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="price" value="150-350" onChange={handlePriceChange}/>
          <span className="checkmark"></span>$150 - $350
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="price" value="over350" onChange={handlePriceChange}/>
          <span className="checkmark"></span>Over $350
        </label>
      </div>
    </div>
  )
}

export default Price

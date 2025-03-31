import { useState, useEffect } from 'react'



function App() {


  return (
    <>
      <div className="container">
        <h1>React post form</h1>
        <div className="card">
          <form method='POST'>
            <div className="mb-3">
              <label htmlFor="Author" className="form-label">Author</label>
              <input
                type="text"
                className="form-control"
                name="Author"
                id="Author"
                aria-describedby="authorHelper"
                placeholder="Your Author"
              />
              <small id="authorHelper" className="form-text text-muted"></small>
            </div>

            <div className="mb-3">
              <label htmlFor="Author" className="form-label">Author</label>
              <input
                type="text"
                className="form-control"
                name="Author"
                id="Author"
                aria-describedby="authorHelper"
                placeholder="Your Author"
              />
              <small id="authorHelper" className="form-text text-muted"></small>
            </div>

            <div class="mb-3">
              <label htmlFor="" className="form-label"></label>
              <textarea className="form-control" name="body" id="body" rows="3"></textarea>
            </div>

            <div class="form-check">
              <input className="form-check-input" type="radio" name="public" id="public" />
              <label className="form-check-label" htmlFor="">Public</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="public"
                id="public"
                checked
                disabled
              />
              <label className="form-check-label" htmlFor="">
                Default checked radio
              </label>
            </div>


          </form>
        </div>
      </div>


    </>
  )
}

export default App

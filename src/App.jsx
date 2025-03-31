import { useState, useEffect } from 'react'



function App() {

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: ''

  });


  function handleFormData(e) {
    console.log(e.target)
    const value = e.target.value
    const key = e.target.name

    console.log(key, value)

    setFormData({ ...formData, [key]: value })

  };

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(formData)

    fetch('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', {
      method: 'POST',
      body: JSON.stringify(formData)
    })

      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.error(err)
      })




  }

  return (
    <>
      <div className="container my-3">
        <h1>React post form</h1>
        <div className="card">
          <form method='POST' onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="author" className="form-label">Author</label>
              <input
                type="text"
                className="form-control"
                name="author"
                id="author"
                aria-describedby="authorHelper"
                placeholder="Your author"
                value={formData.author}
                onChange={handleFormData}
              />
              <small id="authorHelper" className="form-text text-muted"></small>
            </div>

            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                id="title"
                aria-describedby="authorHelper"
                placeholder="Your title"
                value={formData.title}
                onChange={handleFormData}
              />
              <small id="titleHelper" className="form-text text-muted"></small>
            </div>

            <div className="mb-3">
              <label htmlFor="" className="form-label">Description</label>
              <textarea className="form-control" name="body" id="body" rows="3" value={formData.body} onChange={handleFormData}></textarea>
            </div>


            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="public"
                id="public"
                value="true"
                checked={formData.public === 'true'}
                onChange={handleFormData}
              />
              <label className="form-check-label" htmlFor="public">Public</label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="public"
                id="bozza"
                value="false"
                checked={formData.public === 'false'}
                onChange={handleFormData}
              />
              <label className="form-check-label" htmlFor="bozza">Bozza</label>
            </div>

            <button className='m-2 btn btn-primary' type='submit'>invia</button>


          </form>
        </div>
      </div>


    </>
  )
}

export default App

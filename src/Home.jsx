function Home () {

    return (
        <div>
        <form onSubmit={ handlesubmit}>
        <input type='text' placeholder='Dogname'  value={dogName}  onChange={handleDogname} />
        <button onClick={submit}> submit </button>
        </form>
        </div>
    )
}

export default Home
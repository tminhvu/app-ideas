const Home = () => {
    return (
        <div className="md:p-20 sm:p-10 bg-gray-500 h-screen">
            <h1 className='text-center p-10 mb-10 pt-0 font-bold text-4xl drop-shadow-2xl text-gray-900'>Projects</h1>
            <nav>
                <ul className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 place-content-center ">
                    <li className="text-center shadow-lg block w-full h-full bg-green-50" to="/beginner">Beginner</li>
                    <li className="text-center shadow-lg block w-full h-full bg-orange-100" to="/beginner">Intermediate</li>
                    <li className="text-center shadow-lg block w-full h-full bg-red-200" to="/beginner">Advanced</li>
                </ul>
            </nav>
        </div>
    )
}

export default Home

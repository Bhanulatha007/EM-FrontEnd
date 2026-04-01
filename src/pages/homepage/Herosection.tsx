
const Herosection = () => {
  return (
    <div className='w-full bg-blue-600 min-h-screen py-12 px-4 sm:px-6 md:px-10 lg:px-16'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
          
          <div className='w-full text-center md:text-left'>
            <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight'>
              Welcome to EMS Portal
            </h1>

            <p className='text-base md:text-lg text-white mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0'>
              Employee Management Made Easy. One platform for HR, employees, and leadership to manage the entire employee lifecycle.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
              <button className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow-lg'>
                Get Started
              </button>

              <button className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold'>
                Learn More
              </button>
            </div>
          </div>

          <div className='w-full flex items-center justify-center mt-8 md:mt-0'>
            <img
              src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80'
              alt='Hero Image'
              className='w-full h-auto rounded-lg shadow-2xl object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herosection
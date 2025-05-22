import geo from '../assets/1.jpg'
const SectionOne = () => {
    return ( 
    <section>
        <div>
            <div className="h-[calc(100vh-10rem)] flex [&>*]:flex-1">
                <div className="flex justify-center">
                    <div className="flex flex-col justify-around">
                        <h1 className='text-8xl font-bold text-navy_blue'>
                            <span className='border-b-8 border-b-navy_blue'>Id</span>entic
                        </h1>
                        <p className='opacity-50'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.</p>
                    </div>
                </div>
                <div style={{
                        backgroundImage:`url(${geo})`, 
                        backgroundPosition:"center",  
                        backgroundSize:"cover", 
                        backgroundRepeat:"no-repeat"
                }}>
                    <div className='w-96 px-12 py-20 text-white flex flex-col gap-4'>
                        <span>new</span>
                        <h1 className='text-xl font-bold'>Marketing Agency</h1>
                        <p className='text-sm leading-6 text-gray-200'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                            Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                            Quisquam, voluptatibus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section> );
}
 
export default SectionOne;
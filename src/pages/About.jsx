import React from 'react'

const About = () => {
    return (
        <>
            {/* first section */}
            <div className="relative bg-gradient-to-t from-primary-700 to-gray-600 h-screen  w-full">
                <img className="h-screen w-screen absolute object-cover mix-blend-overlay" src="img/aboutbackground.jpg" alt="error loading" />
                <div className='text-white p-60 text-center'>
                    <h1 className="font-semibold text-8xl">ABOUT US</h1>
                    <p className="pt-5 text-2xl"><span class="text-secondary-400">We are creating</span> new level for you.</p>
                    <p className="pt-3 text-2xl">Comfort and <span className="text-secondary-400">Quality of life</span></p>
                </div>
            </div>
            <div className="pb-16"></div>

            {/* second section */}
            <div className="text-justify py-16">
                <h1 className="text-4xl font-semibold px-60 pb-7">About us and our love for<br></br> our work and job.</h1>
                <p className="pl-96 pr-60">Welcome to Eclectica, your ultimate destination for eclectic home decor! We are a passionate team of design enthusiasts who believe in the beauty of blending styles, cultures, and eras to create truly unique and personalized spaces.<p>At Eclectica, we embrace the idea that your home should be a reflection of your individuality and storytelling. Our carefully curated collection brings together a diverse range of decor pieces from around the world, allowing you to curate a space that is as bold and distinctive as you are.</p>
                </p>
            </div>

            {/* third section */}
            <div className="grid grid-cols-2 gap-12 px-60 no-repeat pb-16">
                <img className="h-80 w-96" src="img/aboutimg1.jpg" alt="Error loading" />
                <img className="h-80 w-96" src="img/aboutimg2.jpg" alt="Error loading" />
            </div>

            {/* fourth section */}
            <div className="text-justify py-16">
                <h1 className="text-4xl font-semibold px-60 pb-7">We do not stand still and<br></br> help others develop</h1>
                <ul className="grid grid-cols-2 gap-12 px-60 list-disc">
                    <li>Quality craftsmanship and attention to detail.</li>
                    <li>Personalized customer service and support.</li>
                    <li>Sustainable and eco-friendly practices.</li>
                    <li>Fostering creativity and providing design inspiration.</li>
                    <li>Embracing individuality and celebrating unique styles.</li>
                </ul>
            </div>


            <div className="text-justify py-16" >
                <h1 className="text-4xl font-semibold px-60 pb-7">Huge selection of decorative <br></br>paints and plasters</h1>
                <p className="pl-96 pr-60">Discover an extensive collection of decorative paints and plasters at Eclectica. We take pride in offering a huge selection that caters to various styles and design preferences. From vibrant colors to subtle textures, our range of paints and plasters allows you to unleash your creativity and bring your unique vision to life. With our commitment to quality, you can trust that our products are not only visually appealing but also durable and long-lasting.</p>
            </div>


            <div className="grid grid-cols-3 gap-4 px-60 no-repeat pb-16">
                <img className="h-64 w-96" src="img/aboutimg3.jpg" alt="Error loading" />
                <img className="h-64 w-96" src="img/aboutimg4.jpg" alt="Error loading" />
                <img className="h-64 w-96" src="img/aboutimg5.jpg" alt="Error loading" />
            </div>
        </>
    )
}

export default About
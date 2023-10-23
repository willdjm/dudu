import Image from 'next/image';

export function Banner() {

return (
<section
    id="about"
    className="drop-shadow-2xl mt-24">



               
<figure className="relative  transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 object-cover w-full">

    <img className="rounded-lg" src="./banners.png" alt="image description"/>

  <figcaption className="absolute px-4 text-lg text-white bottom-6">
      <p>Do you want to get notified when a new component is added to Flowbite?</p>
  </figcaption>
</figure>



</section>
)
}
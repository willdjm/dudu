
export function Banner() {

return (
<section
    id="about"
    className="drop-shadow-2xl mt-24">



               
<figure className="relative  transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 object-cover w-full">
<picture>
<img className="rounded-lg" src="./bannerS.png" alt="image description"/>
</picture>
    
  <figcaption className="absolute px-4 text-lg text-white bottom-6">
      <p>Do you want to get notified when a new component is added to Flowbite?</p>
  </figcaption>
</figure>



</section>
)
}
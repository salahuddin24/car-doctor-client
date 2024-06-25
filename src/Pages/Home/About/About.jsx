import person from '../../../../public/assets/images/about_us/person.jpg'
import parts from '../../../../public/assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className='mt-5'>
      <div className="rounded-3xl hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
   <div className='lg:w-1/2 relative'>
   <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
   <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
   </div>
    <div className='lg:w-1/2'>
      <h3 className="text-2xl text-orange-500 font-bold">About us</h3>
      <h1>We are qualifind & of experience in this field</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate facilis neque iste harum libero, vitae impedit exercitationem adipisci sed fuga. Magnam cupiditate assumenda, repellendus non, velit dolores soluta veritatis reprehenderit, vel reiciendis optio mollitia blanditiis. Eveniet sunt reiciendis praesentium. Cumque officiis saepe omn</p>
      <button className="btn btn-error">Get More info</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default About;
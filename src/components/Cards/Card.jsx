import { useNavigate } from "react-router";
import BlackButton from "../../utils/Buttons/BlackButton/BlackButton"
import { cards } from "../../utils/constants/Cards"
import "./Card.css"
import { ArrowRightIcon } from '@heroicons/react/24/solid';


const Card = () => {
    const navigate=useNavigate();
  return (
    <div className="bg-black">
        <div className="w-5/6 mx-auto pt-16 pb-8">
            <div className="poppins-bold title-project text-3xl pb-8 flex justify-center">
                Cards
            </div>
            <div className="projects flex flex-wrap  overflow-hidden border-none justify-center gap-5">
                {cards.map((item,index)=>(
                    <div key={index} className=" w-56  h-84 mx-auto rounded-t-lg overflow-hidden mb-8 "  >
                        <div className="pt-4" style={{backgroundImage:`url(${item.img})`,backgroundSize: 'cover', backgroundPosition: 'center'}}><img src={item.profileImage} alt="No Img" className="w-28   text-white text-center  mx-auto h-28 rounded-full" /></div>
                        <div className="project-title bg-white flex flex-col  text-center poppins-semibold p-2 text-black text-sm h-48  overflow-hidden">
                            <div className="poppins-bold">{item.title}</div>
                            <div className="poppins-regular pt-1 text-xs text-blue-800">{item.profession}</div>
                            <div className="poppins-regular pt-3">{item.description}</div>
                        
                        </div>
                        <div onClick={()=>navigate(`/Home/${item.id}`)} className=" bg-white rounded-b-lg flex justify-center  "><BlackButton title="View Profile "   img={<ArrowRightIcon className="size-5"   />}  /></div>


                    </div>

                )
            )}
                
            </div>
        </div>
    </div>
  )
}

export default Card

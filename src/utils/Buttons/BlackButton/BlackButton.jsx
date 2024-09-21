import "./BlackButton.css"

const BlackButton = (props) => {
  return (
    <button  style={{backgroundColor:`rgba(61, 119, 147, 1)`}} className=" flex justify-center mb-2 items-center text-white border-2 border-solid bg-[rgba(61, 119, 147, 1)] border-white p-3 poppins-semibold text-xs">
        {props.title}
        {props.img}
    </button>
  )
}

export default BlackButton

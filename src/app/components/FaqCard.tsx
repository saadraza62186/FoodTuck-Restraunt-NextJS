import AddIcon from "@mui/icons-material/Add"

const FaqCard = ({ name }: any) => {
  return (
    <div className="w-full bg-[#FAF7F2] p-4 rounded-sm">
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-helvetica font-bold text-base md:text-lg">{name}</h1>
        <div className="flex-shrink-0">
          <AddIcon className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      </div>
      <div className="text-sm md:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim
        repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
      </div>
    </div>
  )
}

export default FaqCard


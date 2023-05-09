const Card = (data) => {
    return (
        <div className="bg-white cursor-pointer w-56 h-60">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute left-0 bottom-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.images[0]} alt={data.data.title} />
                <div className="absolute top-0 rigth-0 flex justify-center items-center bg-white w-5 h-5 rounded-full m-1.5 p-1">
                    +
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm">{data.data.title}</span>
                <span className="text-sm font-semibold">${data.data.price}</span>
            </p>
        </div>
    )
}
export default Card;
import { ChevronRightIcon } from '@heroicons/react/24/solid';


const OrdersCard = props => {
    // eslint-disable-next-line react/prop-types
    const { totalPrice, totalProducts } = props;

    return (
        <div className="flex justify-between items-center border border-black rounded-lg p-4 w-80 mb-4">
            <div className="flex flex-col justify-between">
                <span className="font-light">17-05-23</span>
                <span className="font-bold">{totalProducts} articles</span>
            </div>
                <span className="text-2xl font-medium">${totalPrice}</span>
                <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer"></ChevronRightIcon>
        </div>
    )
}

export  default OrdersCard;